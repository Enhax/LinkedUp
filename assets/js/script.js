// PROFILE_MENU + DARK_MODE

const profileMenu = document.getElementById('profileMenu')
const navProfileImg = document.querySelector('.nav-profile-img')
const darkBtn = document.getElementById('dark-btn')

navProfileImg.onclick = function(){
    profileMenu.classList.toggle('open-menu')
}

darkBtn.onclick = function(){
    darkBtn.classList.toggle('dark-btn-on')
}

// MEDIA_QUERY_ACTIVITY

const sidebarActivity = document.querySelector('.sidebar-activity')
const showMoreLink = document.getElementById('showMoreLink')

showMoreLink.onclick = function(){
    sidebarActivity.classList.toggle('show-activity')

    if(sidebarActivity.classList.contains('show-activity')){
        showMoreLink.innerHTML= 'Voir moins <b>-</b>'
    }
    else{
        showMoreLink.innerHTML= 'Voir plus <b>+</b>'
    }
}
