const cube = document.querySelector('.cube');
const faces = cube.querySelectorAll('.face');
let currentFaceIndex = 0;

document.getElementById('prevBtn').addEventListener('click', () => {
    rotateCube('prev');
});

document.getElementById('nextBtn').addEventListener('click', () => {
    rotateCube('next');
});

function rotateCube(direction) {
    if (direction === 'next') {
        currentFaceIndex++;
    } else if (direction === 'prev') {
        currentFaceIndex--;
    }

    // Ensure currentFaceIndex stays within bounds
    if (currentFaceIndex >= faces.length) {
        currentFaceIndex = 0;
    } else if (currentFaceIndex < 0) {
        currentFaceIndex = faces.length - 1;
    }

    // Rotate the cube to show the selected face
    switch (currentFaceIndex) {
        case 0:
            cube.style.transform = 'translateZ(-100px) rotateX(0deg) rotateY(0deg)';
            break;
        case 1:
            cube.style.transform = 'translateZ(-100px) rotateX(0deg) rotateY(-90deg)';
            break;
        case 2:
            cube.style.transform = 'translateZ(-100px) rotateX(0deg) rotateY(90deg)';
            break;
        case 3:
            cube.style.transform = 'translateZ(-100px) rotateX(-90deg) rotateY(0deg)';
            break;
        case 4:
            cube.style.transform = 'translateZ(-100px) rotateX(90deg) rotateY(0deg)';
            break;
        case 5:
            cube.style.transform = 'translateZ(-100px) rotateX(180deg) rotateY(0deg)';
            break;
        default:
            cube.style.transform = 'translateZ(-100px) rotateX(0deg) rotateY(0deg)';
    }
}
