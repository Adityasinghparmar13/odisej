var tot = document.querySelectorAll("#page2 h1")
tot.forEach(function(elem){
  var colh1 = elem.textContent
  var splittxt = colh1.split("")
  var clutter= ""
  splittxt.forEach(function(e){
    clutter+=`<span>${e}</span>`;
  })
  console.log(clutter)
  elem.innerHTML = clutter
})

gsap.to("#page2 h1 span",{
    color: "#E3E3C4",
    stagger:0.2,
    scrollTrigger:{
        trigger:"#page2 h1",
        scroller: "body",
        start:"top 60%",
        end:"top -10%",
        scrub:2,
    }
})
