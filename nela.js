let currentPage = 1;
let totalPages = 5;
let zoomLevel = 1;

/* Pagination */
function renderPages() {
  let container = document.getElementById("pageNumbers");
  container.innerHTML = "";

  for (let i = 1; i <= totalPages; i++) {
    let btn = document.createElement("button");
    btn.innerText = i;
    btn.classList.add("page-btn");

    if (i === currentPage) {
      btn.classList.add("active");
    }

    btn.onclick = () => {
      currentPage = i;
      updatePage();
    };

    container.appendChild(btn);
  }
}

function updatePage() {
  renderPages();
  console.log("Current Page:", currentPage);

  // 👉 Load page content here if needed
}

function goToFirst() {
  currentPage = 1;
  updatePage();
}

function goToLast() {
  currentPage = totalPages;
  updatePage();
}

function goToNext() {
  if (currentPage < totalPages) {
    currentPage++;
    updatePage();
  }
}

function goToPrev() {
  if (currentPage > 1) {
    currentPage--;
    updatePage();
  }
}

/* Zoom */
function zoomIn() {
  zoomLevel += 0.1;
  document.getElementById("content").style.transform = `scale(${zoomLevel})`;
}

function zoomOut() {
  if (zoomLevel > 0.5) {
    zoomLevel -= 0.1;
    document.getElementById("content").style.transform = `scale(${zoomLevel})`;
  }
}

/* Crop */
function cropPage() {
  alert("Crop feature can be implemented using canvas or libraries.");
}

/* Archive */
function openArchive() {
  let date = document.getElementById("archiveDate").value;

  if (date) {
    alert("Loading e-paper for: " + date);

    // Example:
    // window.location.href = `archive/${date}.html`;
  } else {
    alert("Please select a date");
  }
}

/* Initial Load */
renderPages();