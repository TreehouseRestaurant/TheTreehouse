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

const foodBtn = document.getElementById('foodBtn');
const drinksBtn = document.getElementById('drinksBtn');
const snacksBtn = document.getElementById('snacksBtn');

const foodMenu = document.getElementById('foodMenu');
const drinksMenu = document.getElementById('drinksMenu');
const snacksMenu = document.getElementById('snacksMenu');

function showMenu(menuToShow) {
  foodMenu.style.display = 'none';
  drinksMenu.style.display = 'none';
  snacksMenu.style.display = 'none';

  foodBtn.classList.remove('active');
  drinksBtn.classList.remove('active');
  snacksBtn.classList.remove('active');

  menuToShow.menu.style.display = 'block';
  menuToShow.button.classList.add('active');
}

foodBtn.addEventListener('click', () => showMenu({ menu: foodMenu, button: foodBtn }));
drinksBtn.addEventListener('click', () => showMenu({ menu: drinksMenu, button: drinksBtn }));
snacksBtn.addEventListener('click', () => showMenu({ menu: snacksMenu, button: snacksBtn }));