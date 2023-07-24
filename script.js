// gsap.to("#page1 svg",{
//     scale:0.1,
//     duration:0.5,
//     scrollTrigger:{
//         trigger:"#page1",
//         scroller :"body",
//         start:"top -3%",
//         end:"top -20%",
//         scrub:3
//     }
// })
// gsap.from("#nav-part1 ",{
//     opacity:0,
//     stagger:0.3,
// scrollTrigger:{
// trigger:"nav",
// scroll:"body",
// start:"top -1%",
// end:"top 1%",
// scrub:2,
//     }
//    })

gsap.to("nav svg ", {
    y: "-50%",
    top: "50%",
    width: "10%",
    left: "44%",
    color: "#000",
    scrollTrigger: {
        trigger: "#main",
        scroller: "body",
        // markers: true,
        start: "top -15%",
        end: "top 5%",
        scrub: 4
    }
})

gsap.to("nav a", {
    y: "-50%",
    top: "50%",
    width: "12%",
    left: "44%",
    color: "#000",
    scrollTrigger: {
        trigger: "#main",
        scroller: "body",
        // markers: true,
        start: "top -5%",
        end: "top 11%",
        scrub: 3
    }
})

gsap.to("#page1 #text1", {
    position: "absolute",
    bottom: 0,
    scrollTrigger: {
        trigger: "#page2",
        scroller: "body",
        start: "top 100%",
        end: "top 80%",
        scrub: true

    }

})