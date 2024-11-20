document.addEventListener("DOMContentLoaded", function () {
  const tabs = document.querySelectorAll(".tab-button");

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      // Удаляем активный класс у всех табов
      tabs.forEach((t) => t.classList.remove("active"));
      // Добавляем активный класс нажатому табу
      tab.classList.add("active");
    });
  });
});
