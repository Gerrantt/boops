const { webFrame } = require('electron');

const toPress = document.getElementById('boop')
window.boops = 0
function boop() {
    ++toPress
    toPress.innerHTML = `${window.boops} boops`
}