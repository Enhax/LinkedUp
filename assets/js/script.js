const profileMenu = document.getElementById('profileMenu')
const navProfileImg = document.querySelector('.nav-profile-img')
const darkBtn = document.getElementById('dark-btn')

navProfileImg.onclick = function(){
    profileMenu.classList.toggle('open-menu')
}

darkBtn.onclick = function(){
    darkBtn.classList.toggle('dark-btn-on')
}