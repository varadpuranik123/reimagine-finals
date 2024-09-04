function page1Animation(){
    gsap.from("#page1 .above-heading, #heading, #sub-heading ", {
      y:100,
      filter:"blur(30px)",
      ease: "power2.inOut",
      opacity:0,
    }); 

    gsap.from(".video, #timg1, #timg2",{
        filter:"blur(30px)",
        duration:1,
        ease: "power2.inOut",
    })

    gsap.to("#timg1",{
        x:-300,
        y:-300,
        scrollTrigger: {
            scroller: "body",
            trigger: "#page1",
            start: "top 0%",
            end: "bottom 80%",
            scrub:1,
          }
    })

    gsap.to("#timg2",{
        x:300,
        y:-300,
        scrollTrigger: {
            scroller: "body",
            trigger: "#page1",
            start: "top 0%",
            end: "bottom 80%",
            scrub:1,
          }
    })

    gsap.to(".video",{
        scale:1.4,
        y:-60,
        scrollTrigger: {
            scroller: "body",
            trigger: "#page1",
            start: "top 0%",
            end: "bottom 80%",
            scrub:1,
          }
    })


}

function page2Animation(){

    var genbtn = document.querySelector('#genbtn');

    genbtn.addEventListener("click",() => {
        gsap.to(".bee",{
            opacity:1,
            filter:"blur(0px)",
            duration:3
        })

        gsap.to("#border",{
            opacity:0
        })
    })

}

function page3Animation(){
    gsap.from("#heading3, #prmp, #btnn",{
      y:100,
      filter:"blur(30px)",
      ease: "power2.inOut",
      opacity:0,
      scrollTrigger: {
        scroller: "body",
        trigger: "#page3",
        start: "top 60%",
        end: "bottom 80%",
      }
    })

    var btnn = document.querySelector('#btnn');

    btnn.addEventListener("click",() => {

        let tl = gsap.timeline({
            scrollTrigger: {
              scroller:"body",
              trigger: "#page3",
              start: "top 60%",
              end: "bottom 80%",
            }
          });

        tl.to("#text-prompt",{
            opacity:0,
        })

        tl.to("#imgdiv",{
            opacity:1
        })

        tl.from("#heading",{
            y:100,
            filter:"blur(30px)",
            ease: "power2.inOut",
            opacity:0,
        })

        tl.from("#imggrid",{
            filter:"blur(100px)",
        })
    })

}

function page4Animation(){

    gsap.from("#heading4",{
        y:100,
        filter:"blur(30px)",
        ease: "power2.inOut",
        opacity:0,
        scrollTrigger: {
          scroller: "body",
          trigger: "#page4",
          start: "top 60%",
          end: "bottom 80%",
        }
      })

    var genbtnn = document.querySelector('#genbtnn');

    genbtnn.addEventListener("click",() => {
        let tl2 = gsap.timeline({
            scrollTrigger: {
              scroller:"body",
              trigger: "#page4",
              start: "top 60%",
              end: "bottom 80%",
            }
          });

          tl2.to(".harinimg1, #inputtag, #genbtnn",{
            opacity:0,
            duration:1,
            filter:"blur(30px)",
            ease: "power2.inOut",
          })

          tl2.to(".harinimg2",{
            opacity:1,
            duration:3,
            filter:"blur(10px)",
            ease: "power2.inOut",
          })

          tl2.to(".harinimg2",{
            opacity:0,
            duration:2,
            filter:"blur(10px)",
            ease: "power2.inOut",
          })

          tl2.to("#finalharin",{
            opacity:1,
            duration:1,
            filter:"blur(10px)",
            ease: "power2.inOut",
          })

          tl2.to("#finalharin",{
            opacity:1,
            duration:1,
            filter:"blur(0px)",
            ease: "power2.inOut",
          })


        
          

          
    })

}

function page5Animation(){
    gsap.from("#heading5",{
        y:100,
        duration:1,
        filter:"blur(30px)",
        ease: "power2.inOut",
        opacity:0,
        scrollTrigger: {
          scroller: "body",
          trigger: "#page5",
          start: "top 60%",
          end: "bottom 80%",
        }
      })

      gsap.to(".removid",{
        scale:1.3,
        scrollTrigger: {
            scroller: "body",
            trigger: "#page5",
            start: "top 0%",
            end: "bottom 80%",
            scrub:1,
          }
    })


}

function page60Animation(){
    gsap.from("#heading-new ",{
        y:100,
        duration:1,
        filter:"blur(30px)",
        ease: "power2.inOut",
        opacity:0,
        scrollTrigger: {
          scroller: "body",
          trigger: ".page6heading",
          start: "top 60%",
          end: "bottom 80%",
        }
      })

      gsap.to("#appsection",{
        transform:"translateX(-300%)",
      duration:5,
      scrollTrigger:{
          trigger:"#page60",
          scroller:"body",
          start:"top 0%",
          end:"top -400%",
          scrub: 2, 
          pin:true,
      }
      })
}

function page6Animation(){
    gsap.from("#page6 #heading6",{
        y:100,
        duration:1,
        filter:"blur(30px)",
        ease: "power2.inOut",
        opacity:0,
        scrollTrigger: {
          scroller: "body",
          trigger: "#page6",
          start: "top 60%",
          end: "bottom 80%",
        }
      })

      gsap.to(".birdimg",{
        scale:1.3,
        scrollTrigger: {
            scroller: "body",
            trigger: "#page6",
            start: "top 60%",
            end: "bottom 80%",
            scrub:1,
          }
      })
}

function page7Animation(){
    gsap.from("#page7 #heading7",{
        y:100,
        duration:1,
        filter:"blur(30px)",
        ease: "power2.inOut",
        opacity:0,
        scrollTrigger: {
          scroller: "body",
          trigger: "#page7",
          start: "top 60%",
          end: "bottom 80%",
        }
      })

      var imgg1 = document.querySelector('#imgg1')
      var imgg2 = document.querySelector('#imgg2')
      var imgg3 = document.querySelector('#imgg3')

      var imgcont1 = document.querySelector('#imgcont1')
      var imgcont2 = document.querySelector('#imgcont2')
      var imgcont3 = document.querySelector('#imgcont3')

      imgg1.addEventListener("mouseenter",() => {
        gsap.to("#imgcont1",{
            opacity:1,
        })
        gsap.to("#imgcont2, #imgcont3",{
            opacity:0,
        })
      })

      imgg2.addEventListener("mouseenter",() => {
        gsap.to("#imgcont2",{
            opacity:1,
        })
        gsap.to("#imgcont1, #imgcont3",{
            opacity:0,
        })
      })

      imgg3.addEventListener("mouseenter",() => {
        gsap.to("#imgcont3",{
            opacity:1,
        })
        gsap.to("#imgcont1, #imgcont2",{
            opacity:0,
        })
      })

}

function page8Animation(){
    gsap.from("#page8 #heading8, #faqgrid",{
        y:100,
        duration:1,
        filter:"blur(30px)",
        ease: "power2.inOut",
        opacity:0,
        scrollTrigger: {
          scroller: "body",
          trigger: "#page8",
          start: "top 60%",
          end: "bottom 80%",
        }
      })
}

function page9Animation(){
    gsap.from("#page9 #animatediv ", {
      y: 20,
      opacity: 0,
      duration: 1,
      filter: "blur(30px)",
      ease: "power2.inOut",
      stagger:0.1,
      scrollTrigger: {
        scroller: "body",
        trigger: "#page9",
        start: "top 60%",
        end: "bottom 80%",
      }
    }); 
  }




document.addEventListener('DOMContentLoaded', () => {
    page1Animation()
    page2Animation()
    page3Animation()
     page4Animation()
     page5Animation()
     page60Animation()
     page6Animation()
     page7Animation()
     page8Animation()
     page9Animation()

});