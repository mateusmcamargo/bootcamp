//DOM
const drums   = document.querySelectorAll('div.drum');

// the map function iterates over each elemen in the 'soundNames' Array
// for each 'sound', creates a new Audio Object
// this results in a new array 'audios' containing Audio objects for each sound file
// 
// eg:
// if soundNames is filles with ['som-1', 'som-2', 'som3'], the map function will produce:
// [
//     new Audio('./snd/som-1.mp3'),
//     new Audio('./snd/som-2.mp3'),
//     new Audio('./snd/som-3.mp3')
// ]
const keys       = ['KeyS', 'KeyD', 'KeyF', 'Space', 'KeyJ', 'KeyK', 'KeyL'];
const soundNames = ['crash', 'kick-bass', 'snare', 'tom-1', 'tom-2', 'tom-3', 'tom-4'];
const audios = soundNames.map(sound => new Audio(`./snd/${sound}.mp3`));

drums.forEach((button, index) => {

    let mouseover = false;

    //mouse hovers in
    button.addEventListener('mouseenter', () => {
        mouseover = true;
    });

    //mouse hovers out
    button.addEventListener('mouseleave', () => {
        mouseover = false;
        button.classList.remove('clicked');
    });   

    //mouse button down
    if (mouseover = true) {
        button.addEventListener('mousedown', () => {
            button.classList.add('clicked');
            audios[index].currentTime = 0;
            audios[index].play(); 
        });
    }

    //mouse button up
    button.addEventListener('mouseup', () => {
        button.classList.remove('clicked');
    });
});

document.addEventListener('keydown', (key) => {

    keys.forEach(index => {
        if (key.code === index) {
            audios[keys.indexOf(index)].currentTime = 0;
            audios[keys.indexOf(index)].play();
        }
    });
});