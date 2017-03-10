var container = document.querySelector('.container');
var heading = container.querySelector('h1');

container.addEventListener('mouseenter', function() {
    heading.classList.add('active');
});

container.addEventListener('mouseleave', function() {
    heading.classList.remove('active');
});
