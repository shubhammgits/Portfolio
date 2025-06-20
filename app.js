const video1 = document.getElementById('projectvideo1');
const video2 = document.getElementById('projectvideo2');
const video3 = document.getElementById('projectvideo3');
const hoverSign = document.querySelector('.hover-sign');

//sidebar

const sidebar = document.querySelector('.sidebar')
const menu = document.querySelector('.menu-icon')

const videoList = [video1, video2, video3]

videoList.forEach(function(video){
    video.addEventListener('mouseover' , function(){
        video.play()
    })

    video.addEventListener('mouseout' , function(){
        video.pause()
        video.currentTime = 0; 
    })
})


menu.addEventListener("click",  function(){
    sidebar.classList.add("open-sidebar")
})