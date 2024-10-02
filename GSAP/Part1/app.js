// gsap.to("#box1",{
//     x: 1000,
//     duration: 2,
//     delay:3,
//     rotate:360,
//     borderRadius:"50%"
// })
// gsap.from("#box2",{
//     x:1000,
//     duration:2,
//     delay:3,
//     sacle: 1
// })

// gsap.from("h1",{
//     y:40,
//     duration:2,
//     delay:3,
//     opacity:0,
//     stagger:1
// })
// gsap.to("#box",{
//     x:1000,
//     duration:2,
//     delay:2,
//     rotate:360,
//     // repeat: -1,
//     // yoyo:true,
//     borderRadius:"50%"
// })

var tl = gsap.timeline()

tl.from(".logo",{
    y:-30,
    duration:2,
    delay:0.5,
    opacity:0
})
tl.from("li",{
    y:-30,
    duration:2,
    delay:0.2,
    opacity:0,
    stagge:1

})


tl.from("h1",{
    y:-30,
    duration:2,
    delay:0.2,
    opacity:0,
    scale:1
})