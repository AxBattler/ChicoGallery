var chico = [
	"Sierra Nevada Brewery",
	"that old covered bridge",
	"Roots brunch",
	"Chico State",
	"Maltese"
];
var current = 0;

function shuffleGallery()
{
	var index = 0;
	do {
		index = Math.floor(Math.random() * (chico.length-1));
	} while (index == current);
	console.log(chico[index]);
	current = index;
}
