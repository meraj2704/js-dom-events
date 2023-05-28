console.log('this is separate js file');

// onclick function : after red button click body background color will be red
function makeRed ()
{
    document.body.style.backgroundColor= 'red';
}
// here get element by id then create a function for make body background color blue
const makeBlueButton = document.getElementById('make-blue');
makeBlueButton.onclick = makeBlue;
function makeBlue ()
{
    document.body.style.backgroundColor= 'blue';
}
// here also use a function for make body background color purple
const purpleButton = document.getElementById('make-purple');
purpleButton.onclick= function makePurple()
{
    document.body.style.backgroundColor = 'purple';
}

// here use addlistner for make body background pink
const makePinkButton = document.getElementById('make-pink');
makePinkButton.addEventListener('click',pink);

function pink()
{
    document.body.style.backgroundColor = 'pink';
}

// here also use addeventlistner for make body background color green
const makeGreenButton = document.getElementById('make-green');
makeGreenButton.addEventListener('click', function makeGreen(){
    document.body.style.backgroundColor = 'green';
})

// here also use directly addeventlistener
document.getElementById('make-goldenrod').addEventListener('click', function(){
    document.body.style.backgroundColor = 'goldenrod';
})