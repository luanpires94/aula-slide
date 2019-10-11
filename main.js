let imageList = [
	'assets/resize.jpeg',
	'assets/maxresdefault.jpg',
	'assets/jukes.jpeg',
	'assets/jukes2.jpeg',
	'assets/jukes3.jpg',
]

let counter = 0;

let jukera = document.querySelector('body');

let before = document.createElement('h1')
let beforeText = document.createTextNode('<')
before.appendChild(beforeText);

let image = document.createElement('img');
image.setAttribute('src', imageList[counter]);

let next = document.createElement('h1')
let nextText = document.createTextNode('>')
next.appendChild(nextText);

function init() {
	console.log(jukera, image);
	jukera.appendChild(before);
	jukera.appendChild(image);
	jukera.appendChild(next);
}

before.addEventListener('click', function(){
	if(counter > 0){
	counter = counter - 1;
	}
	image.setAttribute('src', imageList[counter]);
})

next.addEventListener('click', function(){
	if(counter < 4){
	counter = counter + 1;
	}
	image.setAttribute('src', imageList[counter]);
})

init();