
var crsr = document.querySelector("#cursor");
var blur = document.querySelector("#cursor-blur");
document.addEventListener("mousemove",function(e){
    crsr.style.left = e.x + "px"
    crsr.style.top  = e.y + "px"
    blur.style.left = e.x- 150 + "px"
    blur.style.top  = e.y - 150 + "px"
    crsr.style.transition ="all ease 0.3s"
    blur.style.transition = "all ease 0.3s"

 

})


gsap.to('#nav',{
    backgroundColor:"#000",
    duration:0.5,
    height:"110px",
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        // markers:true,
        start:"top -1%",
        end:"top -2%",
        scrub:1,

    }   

})


gsap.to("#main",{
    backgroundColor:"#000",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        // markers:true,
        start:"top -25%",
        end:"top -70%",
        scrub:3
        
    }
})



$(document).ready(function(){
    $("#carousel").owlCarousel({
        items: 1,
        loop: true,
        margin: 50,
        // nav: true,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true
        
    });
});




var h4all = document.querySelectorAll("#nav h4")
h4all.forEach(function(elem){
    elem.addEventListener("mouseenter",function(e){
          crsr.style.left = e.x +50 + "px"
         
        crsr.style.scale = 4
        crsr.style.border = "1px solid #fff"
        crsr.style.backgroundColor = "transparent"
         crsr.style.transition = "all ease 0.3s"
        
    })
})

h4all.forEach(function(elem){
    elem.addEventListener("mouseleave",function(){
        crsr.style.scale = 1
        crsr.style.border = "0 solid #b5dd23"
        crsr.style.backgroundColor = "#b5dd23"
        crsr.style.transition = "all ease 0.3s"

    })

    
})


gsap.from("#about-us img,#about-us-in",{
    y:100,
    opacity:0,
    duration:1,
    // stagger:0.4, //pops up  element one by one
    scrollTrigger:{
        trigger:"#about-us",
        scroller:"body",
        start:"top 60%",
        end:"top 55%",
        scrub:2 //When u continously scroll apply this animation will get apply else not

    }
   
})





var wrapperhover = document.querySelectorAll(".swiper-wrapper img")
wrapperhover.forEach(function(elem){
    elem.addEventListener("mouseenter",function(e){
        crsr.style.left = e.x + 50  +"px"
        crsr.style.scale = 4
        crsr.style.border = "1px solid #fff"
        crsr.style.backgroundColor = "transparent"
        crsr.style.transition = "all ease 0.3s"
    })
})


wrapperhover.forEach(function(elem){
    elem.addEventListener("mouseleave",function(){
        crsr.style.scale = 1
        crsr.style.border = "0 solid #b5dd23"
        crsr.style.backgroundColor = "#b5dd23"
        crsr.style.transition = "all ease 0.3s"

    })    
})







gsap.from("#inverted-comma1",{
    y:-70,
    x:-70,
    scrollTrigger:{
        trigger:"#inverted-comma1",
        scroller:"body",
        start:"top 55%",
        end:"top 45%",
        scrub:4
    }
})

gsap.from("#inverted-comma2",{
    y:10,
    x:80,
    scrollTrigger:{
        trigger:"#inverted-comma2",
        scroller:"body",
        start:"top 55%",
        end:"top 55%",
        scrub:4
    }
})




var cardimage = document.querySelectorAll(".card")
cardimage.forEach(function(elem){
    elem.addEventListener("mouseenter",function(e){
        crsr.style.left = e.x + 50 + "px"
        crsr.style.scale = 4
        crsr.style.border = "1px solid #fff"
        crsr.style.backgroundColor = "transparent"
        crsr.style.transition = "all ease 0.3s"
    })
})



var cardimage = document.querySelectorAll(".card")
cardimage.forEach(function(elem){
    elem.addEventListener("mouseleave",function(e){  
        crsr.style.scale = 1
        crsr.style.border = "0px solid #b5dd23"
        crsr.style.backgroundColor = "#b5dd23"
        crsr.style.transition = "all ease 0.3s"
    })
})


gsap.from(".card",{
    opacity:0,
    duration:1,
    // stagger:0.2, //pops up  element one by one
    scrollTrigger:{
        trigger:".card",
        scroller:"body",
        start:"top 70%",
        end:"top 65%",
        scrub:1 //When u continously scroll apply this animation will get apply else not

    }
   
})



gsap.from('#page5 h1',{
    y:50,
    scrollTrigger:{
        trigger:"#page5 h1",
        scroller:"body",
        start:"top 95%",
        end:"top 70%",
        scrub:3 //When u continously scroll apply this animation will get apply else not

    }
})


var elemcard = document.querySelectorAll(".elem")
elemcard.forEach(function(elem){
    elem.addEventListener("mouseenter",function(e){
        crsr.style.left = e.x + 40 + "px"
        crsr.style.scale = 4
        crsr.style.border = "1px solid #fff"
        crsr.style.backgroundColor = "transparent"
        crsr.style.transition = "all ease 0.3s"
    })
})


elemcard.forEach(function(elem){
    elem.addEventListener("mouseleave",function(e){  
        crsr.style.scale = 1
        crsr.style.border = "0px solid #b5dd23"
        crsr.style.backgroundColor = "#b5dd23"
        crsr.style.transition = "all ease 0.3s"
      
    })
})




var scoller_marquee = document.querySelectorAll("#scroller-in")

scoller_marquee.forEach(function(elem){
    elem.addEventListener("mouseenter",function(e){
        crsr.style.left = e.x + 40 + "px"
        crsr.style.scale = 4
        crsr.style.border = "1px solid #fff"
        crsr.style.backgroundColor = "transparent"
        crsr.style.transition = "all ease 0.3s"
    })
})


scoller_marquee.forEach(function(elem){
    elem.addEventListener("mouseleave",function(e){  
        crsr.style.scale = 1
        crsr.style.border = "0px solid #b5dd23"
        crsr.style.backgroundColor = "#b5dd23"
        crsr.style.transition = "all ease 0.3s"
      
    })
})



