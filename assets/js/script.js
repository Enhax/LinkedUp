// PROFILE_MENU + DARK_MODE

const profileMenu = document.getElementById('profileMenu');
const navProfileImg = document.querySelector('.nav-profile-img');
const darkBtn = document.getElementById('dark-btn');
let profileMenuLink = document.getElementsByClassName('profile-menu-link');

navProfileImg.onclick = function(){
    profileMenu.classList.toggle('open-menu')
}

darkBtn.onclick = function(){
    darkBtn.classList.toggle('dark-btn-on')
}

document.addEventListener('click', (e)=>{
    /* console.log(e.target); */
    if(e.target != darkBtn && e.target != darkBtn.firstChild && e.target != profileMenu && e.target != navProfileImg && e.target != document.querySelector('.user-info') && e.target != document.getElementById('inner-profile')){
        profileMenu.classList.remove('open-menu')
        
        /* Array.from(profileMenuLink).forEach(link =>{
            if(e.target != link && e.target != link.childNodes){
                profileMenu.classList.remove('open-menu')
            }
        }) */

        /* for(let link of profileMenuLink){
            if(e.target != link && e.target != link.childNodes){
                profileMenu.classList.remove('open-menu')
            }
        } */

        /* for (let index = 0; index < profileMenuLink.length; index++){
            if(e.target != profileMenuLink[index]){
                profileMenu.classList.remove('open-menu')
            }           
        } */
    }
})

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
