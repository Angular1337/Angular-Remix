document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('logo').onclick = function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };
});
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('about__us').onclick = function() {
        document.getElementById('about__us__text').scrollIntoView({ behavior: 'smooth' });
    };
});
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('projects').onclick = function() {
        document.getElementById('projects__name').scrollIntoView({ behavior: 'smooth' });
    };
});