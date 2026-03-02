document.addEventListener("DOMContentLoaded", function () {

  // ===== โหลด Sidebar =====
  fetch("/components/sidebar.html")
    .then(res => res.text())
    .then(data => {
      const sidebarContainer = document.getElementById("sidebar-container");
      if (sidebarContainer) {
        sidebarContainer.innerHTML = data;

        const sidebarTitle = document.getElementById("sidebar-title");
        if (sidebarTitle) {
          sidebarTitle.innerText =
            SYSTEM_CONFIG.branchName + " " + SYSTEM_CONFIG.year;
        }
      }
    });

  // ===== หา current page จาก URL =====
  const path = window.location.pathname;
  const fileName = path.split("/").pop().replace(".html", "");

  // แปลงชื่อไฟล์เป็นชื่อหน้า (ตัวแรกพิมพ์ใหญ่)
  const pageName =
    fileName.charAt(0).toUpperCase() + fileName.slice(1);

  // ===== ตั้งค่า Title =====
  const pageTitle = document.getElementById("page-title");
  if (pageTitle) {
    pageTitle.innerText =
      SYSTEM_CONFIG.systemName + " - " + pageName;
  }

  // ===== ตั้งค่า Heading =====
  const pageHeading = document.getElementById("page-heading");
  if (pageHeading) {
    pageHeading.innerText =
      SYSTEM_CONFIG.branchName +
      " " +
      pageName +
      " " +
      SYSTEM_CONFIG.month +
      " " +
      SYSTEM_CONFIG.year;
  }

  // ===== ตั้งค่า Subtitle =====
  const pageSubtitle = document.getElementById("page-subtitle");
  if (pageSubtitle) {
    pageSubtitle.innerText =
      SYSTEM_CONFIG.reportTitle;
  }

});
