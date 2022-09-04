$(document).ready(function(){
  // alert("Hello");
});
// selector



// event
$("#btn").click(function(){
// this implement on selected element  here button will hide
$(this).hide();
});
// implement on double click
$("#btn").dblclick(function(){
$(this).hide();
});
// when mouse pointer enter over on id btn, id=pra will hide
$("#btn").mouseenter(function(){
$("#pra").hide();
});
// after mouse pointer exit from on id=btn, id=pra will hide
$("#colored-div").mouseleave(function(){
$("#btn").hide();
});

$("#colored-brown").hover(function(){
$("#colored-div").hide();
},
function(){
$("#colored-div").show();
});
// on() method attaches one or more event handlers for the selected elements.
$("#pra").on({
mouseenter: function(){
  $(this).css("background-color", "lightgray");
},
mouseleave: function(){
  $(this).css("background-color", "lightblue");
},
click: function(){
  $(this).css("background-color", "yellow");
}
});
// effect
// we can give time in ms as well
// Hides the selected elements when click on btn1
$("#btn1").click(function(){
$("#colored-div").hide(1000);
});


$("#btn2").click(function(){
$("#colored-div").show(2000);
});

// fadeIn() and fadeOut()
$("#btn1").click(function(){
$("#colored-brown").fadeOut(1000,function(){
  alert("Fade Out div hidden")
});
});


$("#btn2").click(function(){
$("#colored-pink").fadeIn(2000);
});
// fadeToggle()  Toggles between the fadeIn() and fadeOut() methods
$("#btn1").click(function(){
$("#colored-yellow").fadeToggle(1000);
});
// fadeIn()	Fades in the selected elements we can give opacity as well as
$("#btn1").click(function(){
$("#colored-orange").fadeTo(1000, 0.3);
});
$("#btn1").click(function(){
$("#colored-blue").slideUp(1000);
});
$("#btn2").click(function(){
$("#colored-purple").slideDown(1000);
});
// animate
// animate() method is used to create custom animations.
// syntax:  $(selector).animate({params},speed,callback);
$("#btn1").click(function(){
$("#colored-green").animate({
 opacity:'0.3',
 height:'200px',
 width:'200px',
},6000);
});
// stop applying effects by using stop()
$("#btn2").click(function(){
$("#colored-green").stop()
});
