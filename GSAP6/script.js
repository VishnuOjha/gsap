function breakTheText() {
    var h1 = document.querySelector('h1');
    var h1Text = h1.textContent;

    var splittedText = h1Text.split("");

    var clutter = ""
    var halfTextLength = splittedText.length / 2;
    splittedText.forEach((letter, idx) => {
        if(idx<halfTextLength){
            clutter += `<span class="a">${letter}</span>`
        } else{
            clutter += `<span class="b">${letter}</span>`
        }
    });

    h1.innerHTML = clutter;
}         

breakTheText()

gsap.from("h1 .a",{
    y:70,
    duration:0.8,
    delay:0.5,
    opacity:0,
    stagger: 0.5
})

gsap.from("h1 .b",{
    y:-70,
    duration:0.8,
    delay:0.5,
    opacity:0,
    stagger: 0.5
})