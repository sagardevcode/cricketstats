
$(function () {
    $('[data-toggle="popover"]').popover();
    searchBar();
    closeButton1();
});
function searchBar() {
    $('.search').click(rotate180);
};
function closeButton1() {
    $('.closeButton').click(closeEvent);
} ;
function closeEvent(ev)
{
    $('.eventList')[0].style.animationName = "move" ;
    removeSearchbar() ;
}
function removeSearchbar()
{
    $('#searchcol').html(` <button class="btn btn-danger search">
            <i class="fa fa-align-justify"></i>
                </button>`);
    searchBar() ;
    closeButton1() ;
}
function rotate180(ev)
{
    ev.target.style.transform = "rotateZ(180deg)";
    ev.target.style.transition = "transform 2s";
    setTimeout(removeBut,1900);
    setTimeout(addSearch,1950);
    setTimeout(addEvent,300);
    setTimeout(addchart,400);
    setTimeout(addcar,7000);
}
function addcar()
{
    $('.carousel').carousel() ;
}
function addchart()
{
    $('.module21')[0].setAttribute("id","calendar_basic");
    $('.module22')[0].setAttribute("id","calendar_basic1")
    drawChart();

}
function addEvent()
{
    $('.eventList').css("display","block");
    $('.eventList')[0].style.position = "relative";
    $('.eventList')[0].style.animationName = "moveUp";
    $('.eventList')[0].style.animationDuration = "1.5s";
    $('.eventList')[0].style.animationTimingFunction = "linear";
    $('.eventList')[0].style.animationFillMode = "forwards";
    $('.eventListdiv')[0].style.display = "none" ;

}
function addSearch()
{
  $('#searchcol').html( `<div class="input-group search" id="input">
    <span class="input-group-btn">
    <button class="btn btn-danger" type="button"><i class="fa fa-search"></i></button>
</span>
<input type="text" class="form-control" placeholder="Search">
    </div>`);
}
function removeBut()
{
    $('.bigdiv').children().children().children()[0].style.display = "none" ;
}
