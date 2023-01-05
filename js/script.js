

function showMenuMobile(){
    const menuMobile = document.querySelector('.header');

    if(menuMobile.style.display !== 'flex'){
        menuMobile.style.display = 'flex';
    }else{
        menuMobile.style.display = 'none'
    }

}




function animaScroll() {

        const target = document.querySelectorAll('[data-anime]');
        const animationClass = 'animate';


        target.forEach((section) => {
            const halfSection = window.innerHeight * 0.6;
            const sectionTop = section.getBoundingClientRect().top;
            const isSectionVisible = sectionTop - halfSection < 0;
            console.log(section)
            if(isSectionVisible) {
                section.classList.add(animationClass);
            }else{
                section.classList.remove(animationClass);
            }
        })
};

window.addEventListener('scroll', animaScroll);
