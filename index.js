const buttons=document.querySelectorAll(".drum");
for(var i=0; i< buttons.length; i++){
    buttons[i].addEventListener("click",ClickEvent);
   
}
function ClickEvent() { 
    // alert('i got clicked');
    var btnInnerHtml= this.innerHTML;
    sound(btnInnerHtml);
    btnAnimation(btnInnerHtml);
    // if (btnInnerHtml=='w'){
    //     let w_sound= new Audio('sounds/crash.mp3');
    //     w_sound.play();
    // }
    
}

document.addEventListener('keypress', function(event){ 
    sound(event.key);
    btnAnimation(event.key);
});


function sound(key){
    switch(key) {
        case "w":
            let w_sound= new Audio('sounds/tom-1.mp3');
            w_sound.play();
            break;

        case "a":
            let a_sound= new Audio('sounds/tom-2.mp3');
            a_sound.play();
            break;

        case "s":
            let s_sound= new Audio('sounds/tom-3.mp3');
            s_sound.play();
            break;

        case "d":
            let d_sound= new Audio('sounds/tom-4.mp3');
            d_sound.play();
            break;

        case "j":
            let j_sound= new Audio('sounds/snare.mp3');
            j_sound.play();
            break;

        case "k":
            let k_sound= new Audio('sounds/crash.mp3');
            k_sound.play();
            break;

        case "l":
            let l_sound= new Audio('sounds/kick-bass.mp3');
            l_sound.play();
            break;

        default:
            console.log(btnInnerHtml);
    }

}

function btnAnimation(currentkey){

    var activebtn=document.querySelector('.'+currentkey);

    activebtn.classList.add('animation');
    
    setTimeout(function() {
        activebtn.classList.remove('animation');
    },100);
}


