const question = document.querySelectorAll(".question");
const answer = document.querySelectorAll(".answer");
const arrow = document.querySelectorAll("svg");

question.forEach((faqQuestion, index) => {
    faqQuestion.addEventListener("click", () => {
        answer[index].classList.toggle("active");
        arrow[index].classList.toggle("active")
    });
});