$('#marche').on('click',function(){
jQuery.fx.off=false;
})
$('#arret').on('click',function(){
    jQuery.fx.off=true;
    })
$('#changer').on('click',function(){
    $('div').toggle(3000)
     })