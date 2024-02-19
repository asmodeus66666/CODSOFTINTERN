const screen = document.getElementById('screen');
const buttons = Array.from(document.getElementsByClassName('btn'));
buttons.map( button => {
    button.addEventListener('click', (e) => {
        screen.value += e.target.value;
    })
});
document.getElementById('clear').addEventListener('click', () => {
    screen.value = '';
});
document.getElementById('equals').addEventListener('click', () => {
    try {
        screen.value = eval(screen.value);
    } catch {
        screen.value = "Error"
    }
});