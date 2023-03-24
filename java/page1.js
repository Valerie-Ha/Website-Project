const instaTxt = document.querySelector('.instaTxt')
const instaBtn = document.getElementById('insta')

const tikTxt = document.querySelector('.tikTxt')
const tikTokBtn = document.getElementById('tiktok')

const youTxt = document.querySelector('.youTxt')
const youBtn = document.getElementById('youtube')

instaBtn.addEventListener('mouseover', () => {
    instaTxt.style.width = "90px"
})
instaBtn.addEventListener('mouseout', () => {
    instaTxt.style.width = "0px"
})



tikTokBtn.addEventListener('mouseover', () => {
    tikTxt.style.width = "80px"
})
tikTokBtn.addEventListener('mouseout', () => {
    tikTxt.style.width = "0px"
})


youBtn.addEventListener('mouseover', () => {
    youTxt.style.width = "80px"
})
youBtn.addEventListener('mouseout', () => {
    youTxt.style.width = "0px"
})