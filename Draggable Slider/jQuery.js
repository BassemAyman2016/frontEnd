$(document).mousemove(function(e) {
    var newPosX = e.pageX - 10;
    var newPosY = e.pageY - 10;
    $('.pointer').css({ left: newPosX, top: newPosY });
})