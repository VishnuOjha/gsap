var main = document.querySelector('#main');
var cursor = document.querySelector('#cursor');
var imageDiv = document.querySelector('#image');

main.addEventListener('mousemove', function(e) {
    gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.6,
        ease:'back.out(1.7)'
    })
});

imageDiv.addEventListener('mouseenter', function() {
    cursor.innerHTML = "View More"
    gsap.to(cursor, {
        scale: 4,
        duration: 0.5,
        ease:'back.out(1.7)',
        backgroundColor: "#ffffff8a",
    })
});

imageDiv.addEventListener('click', function() {
    cursor.innerHTML = "clicked"
});

imageDiv.addEventListener('mouseleave', function() {
    cursor.innerHTML = ""
    gsap.to(cursor, {
        scale: 1,
        duration: 0.5,
        ease:'back.out(1.7)',
        backgroundColor:"#fff"
    })
});