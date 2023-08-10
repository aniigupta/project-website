gsap.to("#nav",{
    backgroundColor:"#000",
    duration:0.5,
    height:"110px",
    scrollTriger:{
        trigger:"#nav",
        scroller:"body",
        start:"top -10%",
        end:"top -11",
        scrub:1
    }
})