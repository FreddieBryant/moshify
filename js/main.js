// 1. Target the clickable headers directly so the logo doesn't intercept clicks
const interactiveHeaders = document.querySelectorAll(".collapsible__header, .nav__toggler");

interactiveHeaders.forEach((header) => {
  header.addEventListener("click", function () {
    // 2. Climbs upward to find the parent collapsible wrapper and toggles the expanded class name
    this.closest(".collapsible").classList.toggle("collapsible--expanded");
  });
});
