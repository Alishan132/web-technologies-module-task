// Песочница: текст из <textarea> показывается внутри <iframe>.
// Без JavaScript сайт работает, пропадает только живой результат.
const editor = document.getElementById('sandbox-code');
const frame = document.getElementById('sandbox-frame');
const runButton = document.getElementById('sandbox-run');
const resetButton = document.getElementById('sandbox-reset');
const initialCode = editor.value;

function render() {
  frame.srcdoc = editor.value;
}

runButton.addEventListener('click', render);

resetButton.addEventListener('click', function () {
  editor.value = initialCode;
  render();
});

// живое обновление при вводе
editor.addEventListener('input', render);

// клавиша Tab вставляет два пробела, а не уводит фокус
editor.addEventListener('keydown', function (event) {
  if (event.key === 'Tab') {
    event.preventDefault();
    const start = editor.selectionStart;
    editor.setRangeText('  ', start, editor.selectionEnd, 'end');
    render();
  }
});

render();
