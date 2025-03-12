var timeline = gsap.timeline();
// timeline.from(".home-img", {
//     x:-10,
//     opacity: 0,
//     duration: 0.5,
//     delay:0.5,
//  })
timeline.from(".heading", {
   y:-10,
   opacity: 0,
   duration: 0.5,
   delay:0.5,
})
timeline.from(".home", {
    y:-10 ,
    opacity: 0,
    duration: 0.5,
    delay:0.5,
 })
 timeline.from(".talk", {
    y:-10 ,
    opacity: 0,
    duration: 0.5,
    delay:0.5,
 })
 timeline.from(".hero-box", {
    x:-10 ,
    opacity: 0,
    duration: 1,
    scale:0.2,
 })
 timeline.from(".resume", {
    y:-10 ,
    opacity: 0,
    duration: 0.5,
    delay:0.5,
 })
 gsap.from("#resume #resumeTitle", {
    y:-30 ,
    opacity: 0,
    duration: 0.5,
    delay:0.5,
    scrollTrigger: "#resume #resumeTitle",
 })
 gsap.from("#resume #box1", {
    x:30 ,
    opacity: 0,
    duration: 1,
    delay:1,
    scrollTrigger: "#resume #box1",
 })
 gsap.from("#resume #box2", {
    x:30 ,
    opacity: 0,
    duration: 1,
    delay:1,
    scrollTrigger: "#resume #box2",
 })
 gsap.from("#work #box3", {
    x:30 ,
    opacity: 0,
    duration: 1,
    delay:1,
    scrollTrigger: "#work #box3",
 })
 gsap.from("#work #box4", {
    x:30 ,
    opacity: 0,
    duration: 1,
    delay:1,
    scrollTrigger: "#work #box4",
 })

 gsap.from("#skills #skillTitle", {
    y:-30 ,
    opacity: 0,
    duration: 1,
    delay:1,
    scrollTrigger: "#skills #skillTitle",
 })
 gsap.from("#skills #skillItem", {
    x:30 ,
    opacity: 0,
    duration: 1,
    delay:1,
    scrollTrigger: "#skills #skillItem",
 })
 gsap.from("#skills #skillItem2", {
    x:30 ,
    opacity: 0,
    duration: 1,
    delay:1,
    scrollTrigger: "#skills #skillItem2",
 })
 gsap.from("#skills #skillItem3", {
    x:30 ,
    opacity: 0,
    duration: 1,
    delay:1,
    scrollTrigger: "#skills #skillItem3",
 })
 gsap.from("#skills #skillItem4", {
    x:30 ,
    opacity: 0,
    duration: 1,
    delay:1,
    scrollTrigger: "#skills #skillItem4",
 })
 gsap.from("#skills #skillItem5", {
    x:30 ,
    opacity: 0,
    duration: 1,
    delay:1,
    scrollTrigger: "#skills #skillItem5",
 })
 gsap.from("#portfolio #portfolioTitle", {
    y:-30 ,
    opacity: 0,
    duration: 1,
    delay:1,
    scrollTrigger: "#skills #portfolioTitle",
 })
 gsap.from("#portfolio #item", {
   scale:0,
    duration: 1,
    delay:1,
    scrollTrigger: "#portfolio #item",
 })
 gsap.from("#portfolio #item1", {
    scale:0,
     duration: 1,
     delay:1,
     scrollTrigger: "#portfolio #item1",
  })
  gsap.from("#portfolio #item2", {
    scale:0,
     duration: 1,
     delay:1,
     scrollTrigger: "#portfolio #item2",
  })
  gsap.from("#portfolio #item3", {
    scale:0,
     duration: 1,
     delay:1,
     scrollTrigger: "#portfolio #item3",
  })
  gsap.from("#portfolio #item4", {
    scale:0,
     duration: 1,
     delay:1,
     scrollTrigger: "#portfolio #item4",
  })
  gsap.from("#portfolio #item5", {
    scale:0,
     duration: 1,
     delay:1,
     scrollTrigger: "#portfolio #item5",
  })