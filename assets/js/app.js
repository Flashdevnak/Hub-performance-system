// โหลด sidebar
fetch("/components/sidebar.html")
  .then(res => res.text())
  .then(data => {
    document.getElementById("sidebar-container").innerHTML = data;

    // ใส่ชื่อระบบใน sidebar
    document.getElementById("sidebar-title").innerText =
      SYSTEM_CONFIG.branchName + " " + SYSTEM_CONFIG.year;
  });

// ตั้งค่าหน้าเว็บจาก config กลาง
document.getElementById("page-title").innerText =
  SYSTEM_CONFIG.systemName + " - Dashboard";

document.getElementById("page-heading").innerText =
  SYSTEM_CONFIG.branchName +
  " KPI " +
  SYSTEM_CONFIG.month +
  " " +
  SYSTEM_CONFIG.year;

document.getElementById("page-subtitle").innerText =
  SYSTEM_CONFIG.reportTitle;
