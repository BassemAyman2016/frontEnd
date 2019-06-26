$(document).ready(function(){
    
    var imageIndex = 1;
    
    $.fn.rightButtonClicked = function(){
        
        var current = $("#img"+imageIndex);

        if(imageIndex!=$(".slides").length){
            var next = $("#img"+(++imageIndex));
        }else{
            var next = $("#img"+1);
            imageIndex= 1;
        }

        current.css("animation","moveLeftOutFrame 0.5s ease 0s running forwards");
        next.css("animation","moveLeftIntoFrame 0.5s ease 0s running forwards");
        $.fn.currentDot(imageIndex);
    }

    $("#rightButton").click(function(){
        $.fn.rightButtonClicked()
    });

    $.fn.leftButtonClicked = function(){
        var current = $("#img"+imageIndex);

        if(imageIndex!=1){
            var next = $("#img"+(--imageIndex));
        }else{
            var next = $("#img"+($(".slides").length));
            imageIndex= $(".slides").length;
        }

        current.css("animation","moveRightOutFrame 0.5s ease 0s running forwards");
        next.css("animation","moveRightIntoFrame 0.5s ease 0s running forwards");
        $.fn.currentDot(imageIndex);
    }
    $("#leftButton").click( function(){
        $.fn.leftButtonClicked();
    });

    $.fn.currentDot = function(x){
        var i=0;
        while(i<$(".dot").length){
            $("#dot"+(i+1)).removeClass(" active");
            i++;
        }
        $("#dot"+x).addClass(" active");
        
    }

    $.fn.dotClicked = function(x){
        $.fn.currentDot(1);
        var displayedImage= imageIndex ;
        if(x>displayedImage){
            for(; x > displayedImage ; displayedImage++){
                $.fn.rightButtonClicked();
            }
        }else{
            for(; x < displayedImage ; displayedImage--){
                $.fn.leftButtonClicked();
            }
        }
    }

    $.fn.currentDot(1);

});


