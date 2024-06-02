window.addEventListener('scroll',
    function() {
        if (this.window.scrollY > 0) {
            this.document.getElementById('header').classList.add('scroll');
        }
        if (this.window.scrollY == 0) {
            this.document.getElementById('header').classList.remove('scroll');
        }
    }
)