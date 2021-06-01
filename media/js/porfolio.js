window.onload = function () {

    let proyect = document.getElementsByClassName("proyect");

    proyect.addEventListener('mouseover', function (){
        proyect.classList.toggle("color")
    })

    // ps.addEventListener('mouseleave', function(){
    //     ps.style.width = "50%"
    //     ps.style.transition = "600ms"
    // })
}