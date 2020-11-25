
$(".div1").on('click',function(){
    $(".1").slideToggle(2000)
    $(".2").slideToggle(1000)
    $(".1 , .2").toggleClass("active")
    
});
$(".div2").on('click',function(){
    
    $(".1 , .2").toggleClass("active");
    
});