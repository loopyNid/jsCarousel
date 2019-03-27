var currentPos;
var nextPos;
$("#left").click(function(){
    moveLeft();
});
$("#right").click(function(){
    moveRight();
});

function moveLeft(){
    $(".planet").each(function(){
        currentPos = $(this).attr("data-order");
        currentPos = parseInt(currentPos);
        if(currentPos == 1){
            nextPos = 8;
        } else {
            nextPos = currentPos - 1;
        }
        $(this).attr("id", "planet"+nextPos);
        $(this).attr("data-order", nextPos);
    });
}
function moveRight(){
    $(".planet").each(function(){
        currentPos = $(this).attr("data-order");
        currentPos = parseInt(currentPos);
        if(currentPos == 8){
            nextPos = 1;
        } else {
            nextPos = currentPos + 1;
        }
        $(this).attr("id", "planet"+nextPos);
        $(this).attr("data-order", nextPos);
    });
}
