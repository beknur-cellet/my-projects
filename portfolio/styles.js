const blocks = document.querySelectorAll('.block'); // Получаем все элементы с классом .block

function changePosition(value) {
    let add  = 300;

    blocks.forEach(block => {
        var currentLeft = parseInt(block.style.left) || 0; // Получаем текущее значение left

        if (value === 'next' && currentLeft > -1200) {
            block.style.left = (currentLeft - add) + 'px';
        } else if (value === 'prev' && currentLeft < 0) {
            block.style.left = (currentLeft + add) + 'px';
        }
    });
}

document.addEventListener("DOMContentLoaded", function () {
    const questions = document.querySelectorAll(".questions div div");

    questions.forEach(question => {
        question.addEventListener("click", function () {
            const arrow = this.querySelector('.fa-chevron-down') //находит стрелку
            const answer = this.querySelector("h5"); // Находим h5 внутри текущего нажатого элемента
            if (answer) {
                answer.style.display = answer.style.display === "block" ? "none" : "block";
                arrow.style.transform = arrow.style.transform === "rotate(90deg)" ? "rotate(0deg)" : "rotate(90deg)"
            }
        });
    });
});

