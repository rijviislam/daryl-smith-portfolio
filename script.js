var timeline = gsap.timeline();

timeline.from(".heading", {
  y: -10,
  opacity: 0,
  duration: 0.5,
  delay: 0.5,
});
timeline.from(".home", {
  y: -10,
  opacity: 0,
  duration: 0.5,
  delay: 0.5,
});
timeline.from(".talk", {
  y: -10,
  opacity: 0,
  duration: 0.5,
  delay: 0.5,
});
timeline.from(".hero-box", {
  x: -10,
  opacity: 0,
  duration: 1,
  scale: 0.2,
});
// timeline.from(".resume", {
//   y: -10,
//   opacity: 0,
//   duration: 0.5,
//   delay: 0.5,
// });
gsap.from("#resume #resumeTitle", {
  y: -30,
  opacity: 0,
  duration: 0.5,
  delay: 0.5,
  scrollTrigger: "#resume #resumeTitle",
});

gsap.from("#resume #box1", {
  x: 200,
  opacity: 0,
  duration: 2,
  delay: 2,
  scrollTrigger: {
    trigger: "#resume #box1",
    scroller: "body",
    start: "top 80%",
    end: "top 40%",
    scrub: 1,
  },
});
gsap.from("#resume #box2", {
  x: 200,
  opacity: 0,
  duration: 2,
  delay: 2,
  scrollTrigger: {
    trigger: "#resume #box2",
    scroller: "body",
    start: "top 80%",
    end: "top 40%",
    scrub: 1,
  },
});
gsap.from("#work #box3", {
  x: 200,
  opacity: 0,
  duration: 2,
  delay: 2,
  scrollTrigger: {
    trigger: "#work #box3",
    scroller: "body",
    start: "top 80%",
    end: "top 40%",
    scrub: 1,
  },
});
gsap.from("#work #box4", {
  x: 200,
  opacity: 0,
  duration: 2,
  delay: 2,
  scrollTrigger: {
    trigger: "#work #box4",
    scroller: "body",
    start: "top 80%",
    end: "top 40%",
    scrub: 1,
  },
});

gsap.from("#skills #skillTitle", {
  y: -30,
  opacity: 0,
  duration: 1,
  delay: 1,
  scrollTrigger: "#skills #skillTitle",
});

gsap.from("#skills #skillItem", {
  x: 30,
  opacity: 0,
  duration: 1,
  delay: 1,
  scrollTrigger: "#skills #skillItem",
});
gsap.from("#skills #skillItem2", {
  x: 30,
  opacity: 0,
  duration: 1,
  delay: 1,
  scrollTrigger: "#skills #skillItem2",
});
gsap.from("#skills #skillItem3", {
  x: 30,
  opacity: 0,
  duration: 1,
  delay: 1,
  scrollTrigger: "#skills #skillItem3",
});
gsap.from("#skills #skillItem4", {
  x: 30,
  opacity: 0,
  duration: 1,
  delay: 1,
  scrollTrigger: "#skills #skillItem4",
});
gsap.from("#skills #skillItem5", {
  x: 30,
  opacity: 0,
  duration: 1,
  delay: 1,
  scrollTrigger: "#skills #skillItem5",
});


gsap.from("#portfolio #item1", {
  scale: 0,
  duration: 0.5,
  delay: 0.5,
  scrollTrigger: {
    trigger: "#portfolio #item1",
    scroller: "body",
    start: "top 90%",
    end: "top 50%",
    scrub: 1,
  },
});
gsap.from("#portfolio #item2", {
  scale: 0,
  duration: 0.5,
  delay: 0.5,
  scrollTrigger: {
    trigger: "#portfolio #item2",
    scroller: "body",
    start: "top 90%",
    end: "top 50%",
    scrub: 1,
  },
});
gsap.from("#portfolio #item3", {
  scale: 0,
  duration: 0.5,
  delay: 0.5,
  scrollTrigger: {
    trigger: "#portfolio #item3",
    scroller: "body",
    start: "top 90%",
    end: "top 50%",
    scrub: 1,
  },
});
gsap.from("#portfolio #item4", {
  scale: 0,
  duration: 0.5,
  delay: 0.5,
  scrollTrigger: {
    trigger: "#portfolio #item4",
    scroller: "body",
    start: "top 90%",
    end: "top 50%",
    scrub: 1,
  },
});
gsap.from("#portfolio #item5", {
  scale: 0,
  duration: 0.5,
  delay: 0.5,
  scrollTrigger: {
    trigger: "#portfolio #item5",
    scroller: "body",
    start: "top 90%",
    end: "top 50%",
    scrub: 1,
  },
});
gsap.from("#portfolio #item6", {
  scale: 0,
  duration: 0.5,
  delay: 0.5,
  scrollTrigger: {
    trigger: "#portfolio #item6",
    scroller: "body",
    start: "top 90%",
    end: "top 50%",
    scrub: 1,
  },
});
gsap.from("#portfolio #item7", {
  scale: 0,
  duration: 0.5,
  delay: 0.5,
  scrollTrigger: {
    trigger: "#portfolio #item7",
    scroller: "body",
    start: "top 90%",
    end: "top 50%",
    scrub: 1,
  },
});
gsap.from("#portfolio #item8", {
  scale: 0,
  duration: 0.5,
  delay: 0.5,
  scrollTrigger: {
    trigger: "#portfolio #item8",
    scroller: "body",
    start: "top 90%",
    end: "top 50%",
    scrub: 1,
  },
});
gsap.from("#portfolio #item9", {
  scale: 0,
  duration: 0.5,
  delay: 0.5,
  scrollTrigger: {
    trigger: "#portfolio #item9",
    scroller: "body",
    start: "top 90%",
    end: "top 50%",
    scrub: 1,
  },
});
gsap.from("#blogContainer #blog1", {
    scale: 0,
    duration: 0.5,
    delay: 0.5,
    scrollTrigger: {
      trigger: "#blogContainer #blog1",
      scroller: "body",
      start: "top 200%",
      end: "top 50%",
      scrub: 1,
    },
  });
  gsap.from("#blogContainer #blog2", {
    scale: 0,
    duration: 0.5,
    delay: 0.5,
    scrollTrigger: {
      trigger: "#blogContainer #blog2",
      scroller: "body",
      start: "top 200%",
      end: "top 50%",
      scrub: 1,
    },
  });
  gsap.from("#blogContainer #blog3", {
    scale: 0,
    duration: 0.5,
    delay: 0.5,
    scrollTrigger: {
      trigger: "#blogContainer #blog3",
      scroller: "body",
      start: "top 200%",
      end: "top 50%",
      scrub: 1,
    },
  });
  gsap.from("#blogContainer #blog4", {
    scale: 0,
    duration: 0.5,
    delay: 0.5,
    scrollTrigger: {
      trigger: "#blogContainer #blog4",
      scroller: "body",
      start: "top 200%",
      end: "top 50%",
      scrub: 1,
    },
  });
  gsap.from("#blogContainer #blog5", {
    scale: 0,
    duration: 0.5,
    delay: 0.5,
    scrollTrigger: {
      trigger: "#blogContainer #blog5",
      scroller: "body",
      start: "top 200%",
      end: "top 50%",
      scrub: 1,
    },
  });
  gsap.from("#blogContainer #blog6", {
    scale: 0,
    duration: 0.5,
    delay: 0.5,
    scrollTrigger: {
      trigger: "#blogContainer #blog6",
      scroller: "body",
      start: "top 200%",
      end: "top 50%",
      scrub: 1,
    },
  });

  gsap.from("#pricingContainer #pCard1", {
    scale: 0,
    duration: 0.5,
    delay: 0.5,
    scrollTrigger: {
      trigger: "#pricingContainer #pCard1",
      scroller: "body",
      start: "top 200%",
      end: "top 50%",
      scrub: 1,
    },
  });
  gsap.from("#pricingContainer #pCard2", {
    scale: 0,
    duration: 0.5,
    delay: 0.5,
    scrollTrigger: {
      trigger: "#pricingContainer #pCard2",
      scroller: "body",
      start: "top 200%",
      end: "top 50%",
      scrub: 1,
    },
  });
  gsap.from("#pricingContainer #pCard3", {
    scale: 0,
    duration: 0.5,
    delay: 0.5,
    scrollTrigger: {
      trigger: "#pricingContainer #pCard3",
      scroller: "body",
      start: "top 200%",
      end: "top 50%",
      scrub: 1,
    },
  });
  gsap.from("#pricingContainer #pCard4", {
    scale: 0,
    duration: 0.5,
    delay: 0.5,
    scrollTrigger: {
      trigger: "#pricingContainer #pCard4",
      scroller: "body",
      start: "top 200%",
      end: "top 50%",
      scrub: 1,
    },
  });


  gsap.from("#formContainer #form", {
    x: 200,
    opacity: 0,
    duration: 3,
    delay: 3,
    scrollTrigger: {
      trigger: "#formContainer #form",
      scroller: "body",
      start: "top 120%",
      end: "top 40%",
      scrub: 1,
    },
  });
