function animateOnScroll() {
    var elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach(function(element) {
        var position = element.getBoundingClientRect();
        if(position.top < window.innerHeight && position.bottom >= 0) {
            element.classList.add('is-visible');
        }
    });
}

window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', animateOnScroll);


document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.btn-formacion');
    const contents = document.querySelectorAll('.formation-content');

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const target = this.getAttribute('data-target');
            
            buttons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');

            contents.forEach(content => {
                if (content.id === target.substring(1)) {
                    content.classList.add('active');
                } else {
                    content.classList.remove('active');
                }
            });
        });
    });
});
