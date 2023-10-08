const profileMenu = document.getElementById('profileMenu')
const navProfileImg = document.querySelector('.nav-profile-img')

navProfileImg.onclick = function(){
    profileMenu.classList.toggle('open-menu')
}
