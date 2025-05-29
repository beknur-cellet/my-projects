var lineParent = document.querySelector('section.second > div > div:first-of-type');

function changeLine1() {
    lineParent.style.setProperty('--line-left', '0px')
    lineParent.style.setProperty('--width', '66%')
    document.querySelector('section.second div div:first-of-type').classList.add('activated');
    document.querySelector('section.second div div:nth-of-type(2)').classList.remove('activated');
    document.querySelector('section.second div div:nth-of-type(3)').classList.remove('activated');
}

function changeLine2() {
    lineParent.style.setProperty('--line-left', '520px');
    lineParent.style.setProperty('--width', '78%')
    document.querySelector('section.second div div:first-of-type').classList.remove('activated');
    document.querySelector('section.second div div:nth-of-type(2)').classList.add('activated');
    document.querySelector('section.second div div:nth-of-type(3)').classList.remove('activated');
}

function changeLine3() {
    lineParent.style.setProperty('--line-left', '1075px');
    lineParent.style.setProperty('--width', '100%')
    document.querySelector('section.second div div:first-of-type').classList.remove('activated');
    document.querySelector('section.second div div:nth-of-type(2)').classList.remove('activated');
    document.querySelector('section.second div div:nth-of-type(3)').classList.add('activated');
}

function pressed(number) {
    document.querySelector(`section.third>div:nth-child(${number})`).classList.toggle('pressed');
}
