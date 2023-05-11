
const rock = () => {
    uRook = 1;
    // console.log(`your rook ${uRook}`)
    document.getElementById('yourChoiceImg').innerHTML = '<img src="images/stone.jpeg">'
    document.getElementById('yourChoiceText').innerHTML = '<h3>Rock</h3>'
    num = Math.floor((Math.random() * 3) + 1)
    // console.log(num)
    if (num == 1) {
        document.getElementById('compChoiceImg').innerHTML = '<img src="images/stone.jpeg">'
        document.getElementById('compChoiceText').innerHTML = '<h3>Rock</h3>'

    }
    else if (num == 2) {
        document.getElementById('compChoiceImg').innerHTML = '<img src="images/paper.jpeg">'
        document.getElementById('compChoiceText').innerHTML = '<h3>Paper</h3>'
    }
    else {
        document.getElementById('compChoiceImg').innerHTML = '<img src="images/scissors.jpeg">'
        document.getElementById('compChoiceText').innerHTML = '<h3>Scissors</h3>'
    }

    if (num == 2) {
        cPoint++;
        document.getElementById('compPlusPoint').style.display = 'block'
        document.getElementById('yourPlusPoint').style.display = 'none'
        
    }
    if (num == 3) {
        uPoint++;
        document.getElementById('yourPlusPoint').style.display = 'block'
        document.getElementById('compPlusPoint').style.display = 'none'
    }
    if (num == 1) {
        document.getElementById('yourPlusPoint').style.display = 'none'
        document.getElementById('compPlusPoint').style.display = 'none'

    }
    document.getElementById('tData1').innerHTML = uPoint
    document.getElementById('tData2').innerHTML = cPoint

}
const paper = () => {
    uPaper = 2;
    // console.log(`your paper ${uPaper}`)
    document.getElementById('yourChoiceImg').innerHTML = '<img src="images/paper.jpeg">'
    document.getElementById('yourChoiceText').innerHTML = '<h3>Paper</h3>'
    num = Math.floor((Math.random() * 3) + 1)
    // console.log(num)
    if (num == 1) {
        document.getElementById('compChoiceImg').innerHTML = '<img src="images/stone.jpeg">'
        document.getElementById('compChoiceText').innerHTML = '<h3>Rock</h3>'

    }
    else if (num == 2) {
        document.getElementById('compChoiceImg').innerHTML = '<img src="images/paper.jpeg">'
        document.getElementById('compChoiceText').innerHTML = '<h3>Paper</h3>'

    }
    else {
        document.getElementById('compChoiceImg').innerHTML = '<img src="images/scissors.jpeg">'
        document.getElementById('compChoiceText').innerHTML = '<h3>Scissors</h3>'

    }

    if (num == 3) {
        cPoint++;
        // document.getElementById('compPlusPoint').innerHTML = '+1'
        document.getElementById('compPlusPoint').style.display = 'block'
        document.getElementById('yourPlusPoint').style.display = 'none'
    }
    if (num == 1) {
        uPoint++;
        document.getElementById('yourPlusPoint').style.display = 'block'
        document.getElementById('compPlusPoint').style.display = 'none'
        // document.getElementById('yourPlusPoint').innerHTML = '+1'
    }

    if (num == 2) {
        document.getElementById('yourPlusPoint').style.display = 'none'
        document.getElementById('compPlusPoint').style.display = 'none'
        
    }
    document.getElementById('tData1').innerHTML = uPoint
    document.getElementById('tData2').innerHTML = cPoint


}
const scissor = () => {
    uScissors = 3;
    // console.log(`your scissor ${uScissors}`)
    document.getElementById('yourChoiceImg').innerHTML = '<img src="images/scissors.jpeg">'
    document.getElementById('yourChoiceText').innerHTML = '<h3>scissors</h3>'
    num = Math.floor((Math.random() * 3) + 1)
    // console.log(num)
    if (num == 1) {
        document.getElementById('compChoiceImg').innerHTML = '<img src="images/stone.jpeg">'
        document.getElementById('compChoiceText').innerHTML = '<h3>Rock</h3>'

    }
    else if (num == 2) {
        document.getElementById('compChoiceImg').innerHTML = '<img src="images/paper.jpeg">'
        document.getElementById('compChoiceText').innerHTML = '<h3>Paper</h3>'

    }
    else {
        document.getElementById('compChoiceImg').innerHTML = '<img src="images/scissors.jpeg">'
        document.getElementById('compChoiceText').innerHTML = '<h3>Scissors</h3>'

    }


    if (num == 1) {
        cPoint++;
        // document.getElementById('compPlusPoint').innerHTML = '+1'
        document.getElementById('compPlusPoint').style.display = 'block'
        document.getElementById('yourPlusPoint').style.display = 'none'
    }
    if (num == 2) {
        uPoint++;
        document.getElementById('yourPlusPoint').style.display = 'block'
        document.getElementById('compPlusPoint').style.display = 'none'
        // document.getElementById('yourPlusPoint').innerHTML = '+1'
    }

    if (num == 3) {
        document.getElementById('yourPlusPoint').style.display = 'none'
        document.getElementById('compPlusPoint').style.display = 'none'
        
    }
    document.getElementById('tData1').innerHTML = uPoint
    document.getElementById('tData2').innerHTML = cPoint
}

const point = () => {

    if (cPoint == 10) {
        console.log("Computer won this match")
        document.getElementById('winComp').style.display = 'block'
        document.getElementById('section').style.display = 'none'
    }
    if (uPoint == 10) {
        console.log("You won this match")
        document.getElementById('winYou').style.display = 'block'
        document.getElementById('section').style.display = 'none'


    }
}
const restart = () => {
    location.href = 'https://ugouda.github.io/StonePaperScissors/'
}
let num;
let uPaper;
let uRock;
let uScissors;
let uPoint = 0;
let cPoint = 0;

document.getElementById('tData1').innerHTML = uPoint
document.getElementById('tData2').innerHTML = cPoint
