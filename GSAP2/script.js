
// GSAP Animations with ScrollTrigger

// gsap.from("#page1 #box", {
//     scale: 0,
//     delay: 1,
//     duration: 2,
//     rotate: 360
// })


// gsap.from("#page2 #box", {
//     scale: 0,
//     opacity: 0,
//     duration: 1,
//     rotate: 360,
//     scrollTrigger: {
//         trigger: "#page2 #box",
//         scroller: "body",
//         markers: true,
//         start: "top 60%",
//         end: "top 30%",
//         scrub: 2,
//         // toggleActions: "restart none none reverse"
//     }
// })


// gsap.from("#page3 #box", {
//     scale: 0,
//     delay: 1,
//     duration: 2,
//     rotate: 360
// })



// text animation using scrollTrigger

// gsap.from("#page2 h1", {
//     opacity: 0,
//     duration: 2,
//     x:500,
//     scrollTrigger: {
//         scroller: "body",
//         trigger: "#page2 h1",
//         start: "top 50%",
//         markers: true,
//     }
// })


// gsap.from("#page2 h2", {
//     opacity: 0,
//     duration: 2,
//     x:-500,
//     scrollTrigger: {
//         scroller: "body",
//         trigger: "#page2 h1",
//         start: "top 50%",
//         markers: true,
//     }
// })



// text animation on scroll

gsap.to("#page2 h1", {
    transform:"translateX(-150%)",
    scrollTrigger: {
        scroller: "body",
        trigger: "#page2",
        start: "top 0%",
        end: "top -150%",
        markers: true,
        scrub: 2,
        pin: true,
    }
})