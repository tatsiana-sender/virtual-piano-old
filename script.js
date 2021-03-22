document.addEventListener("DOMContentLoaded", () => {
    let btns = document.getElementsByClassName('btn');
    let keys = document.getElementsByClassName('piano-key');
    let fullscreen = document.getElementsByClassName('fullscreen');
    btns[0].onclick = function() {
        btns[1].classList.remove("btn-active");
        this.classList.add("btn-active");
        for (let i = 0; i < keys.length; i++) { 
            keys[i].classList.remove("letter");
        }
    }
    btns[1].onclick = function() {
        btns[0].classList.remove("btn-active");
        this.classList.add("btn-active");
        for (let i = 0; i < keys.length; i++) { 
            keys[i].classList.add("letter");
        }
    }
    document.onclick = function(event){
        if (event.target.className == 'piano-key' || event.target.className == 'piano-key sharp'){
            for (let i = 0; i < keys.length; i++) { 
                keys[i].classList.remove("piano-key-active");
            }
            event.target.classList.add('piano-key-active');
        } 
    }

    function fullScreen(element) {
        if(element.requestFullscreen) {
          element.requestFullscreen();
        } else if(element.webkitrequestFullscreen) {
          element.webkitRequestFullscreen();
        } else if(element.mozRequestFullscreen) {
          element.mozRequestFullScreen();
        }
    }
    var html = document.documentElement;
    var fullscreenEnabled = document.fullscreenEnabled; 
    
    fullscreen[0].onclick = function() {
        
        fullScreen(html);
        if (fullscreenEnabled) {            
            function cancelFullscreen() {
                if(document.cancelFullScreen) {
                  document.cancelFullScreen();
                } else if(document.mozCancelFullScreen) {
                  document.mozCancelFullScreen();
                } else if(document.webkitCancelFullScreen) {
                  document.webkitCancelFullScreen();
                }
            }
            cancelFullscreen();
        } else {
            fullScreen(html);    
        } 
               
    }    
});

