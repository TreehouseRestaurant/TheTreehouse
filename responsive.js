function toggleMenu() {
    document.querySelector(".center-nav").classList.toggle("show");
}

const questions = document.querySelectorAll('.faq-question');

questions.forEach(question => {
    question.addEventListener('click', () => {
        document.querySelectorAll('.faq-answer').forEach(answer => {
            if (answer !== question.nextElementSibling) {
                answer.style.display = 'none';
            }
        });

        const answer = question.nextElementSibling;
        answer.style.display = (answer.style.display === 'block') ? 'none' : 'block';

        questions.forEach(q => q.classList.remove('active'));
        question.classList.toggle('active');
    });
});