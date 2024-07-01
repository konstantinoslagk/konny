document.addEventListener('DOMContentLoaded', function() {
    const button = document.createElement('button');
    button.textContent = 'I want to go home';
    button.id = 'homeButton';
    button.onclick = function() {
        alert('Going home!');
    };
    document.getElementById('container').appendChild(button);
});
