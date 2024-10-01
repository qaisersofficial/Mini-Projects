const boxesContainer = document.getElementById('boxes');
const btn = document.getElementById('btn');

// Toggle 'big' class on button click
btn.addEventListener('click', () => boxesContainer.classList.toggle('big'));

// Create and append 4x4 grid of boxes
function createBoxes() {
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            const box = document.createElement('div');
            box.classList.add('box');
            box.style.backgroundPosition = `${-j * 125}px ${-i * 125}px`;
            boxesContainer.appendChild(box);
        }
    }
}

// Initialize the boxes
createBoxes();