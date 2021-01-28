const polygons = document.querySelectorAll('.questionSlider');
for (let i = 0; i < polygons.length; i++) {
    const polygon = polygons[i];
    polygon.addEventListener('click', slide);
}

let num = -1;
let deg, textQuest;

function slide(event) {
    const trin = this.querySelector('.questionImg');
    const question = this.querySelector('.answerQuestion')
    num = num*(-1);

    if (num > 0) {
        textQuest = 'Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов.';
        deg = 90;
    }
    else {
        textQuest = '';
        deg = 0;
    }

    trin.style.transform = "rotateZ("+ deg +"deg)";
    question.innerText = textQuest;
}