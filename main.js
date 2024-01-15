const question = document.querySelectorAll(".question");
const faqItems = document.querySelectorAll(".faq-items")
const answer = document.querySelectorAll(".answer");
const arrow = document.querySelectorAll("svg");

question.forEach((faqQuestion, index) => {
    faqQuestion.addEventListener("click", () => {
        faqItems[index].classList.toggle("bold");
        answer[index].classList.toggle("active");
        arrow[index].classList.toggle("active");
    });
});