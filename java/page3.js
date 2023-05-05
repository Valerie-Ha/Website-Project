const misc = document.getElementById('misc')
const miscBox = document.querySelector('.miscellaneous')

misc.addEventListener('click', () => {
    miscBox.classList.toggle('active')
})