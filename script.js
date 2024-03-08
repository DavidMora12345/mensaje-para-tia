document.getElementById('showLoveButton').addEventListener('click', function() {
    var loveDisplay = document.getElementById('loveDisplay');
    loveDisplay.innerHTML = '';
    for (var i = 0; i < 100; i++) {
        var heart = document.createElement('span');
        heart.innerHTML = '❤️';
        heart.style.position = 'absolute';
        heart.style.left = Math.random() * window.innerWidth + 'px';
        heart.style.top = Math.random() * window.innerHeight + 'px';
        heart.style.animation = 'float 3s ease-in-out infinite, spin 3s linear infinite';
        loveDisplay.appendChild(heart);
        var delay = Math.random() * 5;
        heart.style.animationDelay = delay + 's';
        setTimeout(function() {
            heart.remove();
        }, 3000 + delay * 1000);
    }
});