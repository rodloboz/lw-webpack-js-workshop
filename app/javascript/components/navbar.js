const changeNavbar = function() {
    window.addEventListener('scroll', function(event) {
        let position = window.scrollY;
        // console.log(position);
        const navBar = this.document.querySelector(".navbar-wagon");
        let windowHeight = window.innerHeight;

        if (position >= windowHeight - navBar.offsetHeight / 2) {
            navBar.classList.remove("navbar-wagon-transparent");
            navBar.classList.add("navbar-wagon-filled");
        } else {
            navBar.classList.add("navbar-wagon-transparent");
            navBar.classList.remove("navbar-wagon-filled");
        }
    });
}

export { changeNavbar };
