// Учебная форма: данные никуда не уходят, после проверки браузером
// (required, type, pattern) показываем сообщение об успехе.
// Без JS форма отправляется обычным GET-запросом на ту же страницу.
const form = document.querySelector('.form');
const message = document.getElementById('form-success');

form.addEventListener('submit', function (event) {
  event.preventDefault();
  const name = form.elements['name'].value.trim();
  const email = form.elements['email'].value.trim();
  message.textContent = 'Спасибо, ' + name + '! Заявка принята, куратор напишет на ' + email + '.';
  message.hidden = false;
  form.reset();
});
