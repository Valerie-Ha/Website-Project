const instaTxt = document.querySelector('.instaTxt')
const instaBtn = document.getElementById('insta')
const tikTxt = document.querySelector('.tikTxt')
const tikTokBtn = document.getElementById('tiktok')

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
