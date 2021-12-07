const user =  document.getElementById('share-button');
const share = document.getElementById('social-media');
const closeButton = document.getElementById('share-container-button');
    

user.addEventListener('click', showMedia);
closeButton.addEventListener('click', closeMedia);


function showMedia() {
    share.style.visibility = 'visible'; 
    share.classList.remove('animationRemove')
    share.classList.add('animation'); 

}

function closeMedia(){
    share.classList.remove('animation');
    share.classList.add('animationRemove');  
} 

