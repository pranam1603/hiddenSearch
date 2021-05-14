const button = document.querySelector('button')
const input = document.querySelector('input')


button.addEventListener('click', () => {
    input.classList.toggle('showInput')
    input.classList.toggle('input')

})