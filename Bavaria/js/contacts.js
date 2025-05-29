document.querySelectorAll("input").forEach((input) => {
    input.addEventListener("blur", function () {
      const label = document.querySelector(`label[for="${this.id}"] span`); // Находим связанный label
      
      if (this.value.trim() === "") {
        this.style.border = "1px solid red"; // Ошибка (пустое поле)
        if (label) label.style.display = "inline-block"; // Меняем цвет label
      } else {
        this.style.border = "1px solid green"; // Успешный ввод
        if (label) label.style.display = "none"; // Меняем цвет label
      }
    });
});
  
document.querySelector("textarea").addEventListener("blur", function () {
    const label = document.querySelector(`label[for="${this.id}"] span`); // Ищем связанный label
  
    if (this.value.trim() === "") {
      this.style.border = "1px solid red"; // Ошибка (пустое поле)
      if (label) label.style.display = "inline-block"; // Меняем цвет label
    } else {
      this.style.border = "1px solid green"; // Успешный ввод
      if (label) label.style.display = "none"; // Меняем цвет label
    }
});

const form = document.getElementById("myForm");
const resetBtn = document.getElementById("resetBtn");

function checkFields() {
    // Проверяем, есть ли хотя бы одно пустое поле
    const hasEmptyField = [...form.elements].filter(el => el.tagName !== "BUTTON").some(el => el.value.trim() === "");
    resetBtn.disabled = hasEmptyField; // Блокируем кнопку, если хотя бы одно поле пустое
}

// Проверяем сразу при загрузке
checkFields();

// Проверяем при каждом вводе
form.addEventListener("input", checkFields);