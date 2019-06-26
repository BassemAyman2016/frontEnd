var imageIndex=1;

currentDot(1);

function rightButtonClicked(){
    var slides = document.getElementsByClassName("slides");
    var current = document.getElementsByClassName("img"+imageIndex);
    
    if(imageIndex!=slides.length){
        var next = document.getElementsByClassName("img"+(++imageIndex));
    }else{
        var next = document.getElementsByClassName("img"+1);
        imageIndex=1;
    }
    current[0].style.animation = "moveLeftOutFrame 0.5s ease 0s running forwards";
    next[0].style.animation = "moveLeftIntoFrame 0.5s ease 0s running forwards";
    currentDot(imageIndex);
}

function leftButtonClicked(){

    var slides = document.getElementsByClassName("slides");
    var current = document.getElementsByClassName("img"+imageIndex);
    
    if(imageIndex!=1){
        var next = document.getElementsByClassName("img"+(--imageIndex));
    }else{
        var next = document.getElementsByClassName("img"+(slides.length));
        imageIndex= slides.length;
    }
    current[0].style.animation = "moveRightOutFrame 0.5s ease 0s running forwards";
    next[0].style.animation = "moveRightIntoFrame 0.5s ease 0s running forwards";
    currentDot(imageIndex);
}

function currentDot(x){
    var dots = document.getElementsByClassName("dot");
    var i=0;
    while(i<dots.length){
        document.getElementById("dot"+(i+1)).className=document.getElementById("dot"+(i+1)).className.replace(" active","");
        i++;
    }
    document.getElementById("dot"+x).className+=" active";
}


function dotClicked(x){
    currentDot(x);
    var displayedImage= imageIndex ;
    if(x>displayedImage){
        for(; x > displayedImage ; displayedImage++){
            rightButtonClicked();
        }
    }else{
        for(; x < displayedImage ; displayedImage--){
            leftButtonClicked();
        }
    }
}

