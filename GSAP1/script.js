

// Box animation using gsap
// gsap.to("#box1",{
//     x: 1200,
//     duration: 1,
//     delay: 1,
//     rotate: 360,
//     backgroundColor: "red",
//     // borderRadius: "50%",
//     repeat:-1,
//     yoyo: true
// })


// gsap.to("#box1",{
//     x: 1200,
//     duration: 1,
//     delay: 1,
//     rotate: 360,
   
// })

// gsap.to("#box2",{
//     x: 1200,
//     duration: 1.5,
//     delay: 2.5
// })

// gsap.to("#box3",{
//     x: 1200,
//     duration: 2.5,
//     delay: 4
// })


// creating timeline for animation in gsap

// var tl = gsap.timeline()

// tl.to("#box1",{
//     x: 1200,
//     duration: 1.5,
//     delay: 1,
//     rotate: 360,

// })

// tl.to("#box2",{
//     x:1200,
//     duration: 1.5,
// })

// tl.to("#box3",{
//     x:1200,
//     duration: 1.5,
// })


// Text animation using gsap

// gsap.from("h1", {
//     opacity: 0,
//     duration: 1,
//     y: 30,
//     delay: 1,
//     stagger: -1,
//     color:"red"
    
// })

// time line for header

 var tl = gsap.timeline()

 tl.from("h2", {
    opacity: 0,
    duration: 1,
    y: -30,
    delay: 1,
    
 })

 tl.from("h4", {
    opacity: 0,
    duration: 1,
    y: -20,
    stagger: 0.5
    
 })

 tl.from("h1", {
    opacity: 0,
    duration: 1,
    y: -20,
    
 })