const initSlider = () => {
    const portionslist = document.querySelector(".portions");
    const silderContainer = document.querySelectorAll(".slide-button");
    const maxScroll = portionslist.scrollWidth - portionslist.clientWidth;


    silderContainer.forEach(button => {
        button.addEventListener("click", () =>{
            const direction = button.id === "prev-btn" ? -1 : 1;
            const scrollAmount = portionslist.clientWidth * direction;
            console.log(scrollAmount);
            portionslist.scrollBy({left: scrollAmount, behavior: "smooth"});

        })

    })

    const handleSlideButton = () =>{
        silderContainer[0].style.display = portionslist.scrollLeft <= 0 ? "block" : "block";
        silderContainer[1].style.display = portionslist.scrollLeft >= maxScroll ? "none" : "block";
    }
    
    portionslist.addEventListener('scroll', () =>{
        handleSlideButton();
    })
}


window.addEventListener('load', initSlider);