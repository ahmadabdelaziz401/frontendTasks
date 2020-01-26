
var images = ["img/faded-monaco.jpg","img/px-action.jpg","img/px-beach.jpg","img/px-bloom.jpg","img/px-fun.jpg"];

var curr_image = document.getElementById("curr")
var prev_image = document.getElementById("prev")
var next_image = document.getElementById("next")
var imagesContainer = document.getElementById("images")
var curr = 0;


curr_image.style.backgroundImage = "url('"+images[0]+"')"
prev_image.style.backgroundImage = "url('"+images[4]+"')"
next_image.style.backgroundImage = "url('"+images[1]+"')"

function prevImage(){

    imagesContainer.classList.add("transition");
    imagesContainer.classList.add("prevMove");
    setTimeout(function(){
        setValues();
        imagesContainer.classList.remove("transition");
        imagesContainer.classList.remove("prevMove");
    }, 300);
    
    // curr_image.style.backgroundImage = "url('"+images[curr]+"')"
    // prev_image.style.backgroundImage = "url('"+images[4]+"')"
    // next_image.style.backgroundImage = "url('"+images[1]+"')"
}
function setValues(){
    if(curr > 0){
        next_image.style.backgroundImage = "url('"+images[curr]+"')"
        curr -- ;
        curr_image.style.backgroundImage = "url('"+images[curr]+"')"
        if(curr>0){
            prev_image.style.backgroundImage = "url('"+images[curr-1]+"')"
        }
        else{
            prev_image.style.backgroundImage = "url('"+images[images.length-1]+"')"
        }
    }
    else{
        curr = 4;
        curr_image.style.backgroundImage = "url('"+images[curr]+"')"
        prev_image.style.backgroundImage = "url('"+images[curr-1]+"')"
        next_image.style.backgroundImage = "url('"+images[0]+"')"
        
    }
}

function nextImage(){

    imagesContainer.classList.add("transition");
    imagesContainer.classList.add("next-move");
    setTimeout(function(){
        setValues2();
        imagesContainer.classList.remove("transition");
        imagesContainer.classList.remove("next-move");
    }, 300);
    
    // curr_image.style.backgroundImage = "url('"+images[curr]+"')"
    // prev_image.style.backgroundImage = "url('"+images[4]+"')"
    // next_image.style.backgroundImage = "url('"+images[1]+"')"
}
function setValues2(){
    if(curr < 4){
        prev_image.style.backgroundImage = "url('"+images[curr]+"')"
        curr ++ ;
        curr_image.style.backgroundImage = "url('"+images[curr]+"')"
        if(curr == 4){
            next_image.style.backgroundImage = "url('"+images[0]+"')"
        }
        else{
            next_image.style.backgroundImage = "url('"+images[curr+1]+"')"
        }
    }
    else{
        curr = 0;
        curr_image.style.backgroundImage = "url('"+images[curr]+"')"
        prev_image.style.backgroundImage = "url('"+images[4]+"')"
        next_image.style.backgroundImage = "url('"+images[1]+"')"
        
    }
}

// function setValues(){
    // if(curr < 0) {
    //     curr = 4;
    //     curr_image.style.backgroundImage = "url('"+images[curr]+"')"
    //     prev_image.style.backgroundImage = "url('"+images[curr-1]+"')"
    //     next_image.style.backgroundImage = "url('"+images[0]+"')"
    // } else {
    //     curr_image.style.backgroundImage = "url('"+images[curr]+"')"
    // }
// }
