var chico = [
	{	description: "Sierra Nevada Brewery",
		picture: "https://beerbloggersconference.org/wp-content/uploads/2013/05/SN_ExteriorNight.jpg",
		from: "beerbloggersconference.org"
	},
	{	description: "that old covered bridge",
		picture: "https://s-media-cache-ak0.pinimg.com/originals/ef/57/f8/ef57f8074246875cba715d89b0231600.jpg",
		from: "pinterest.com/greathomeschico"
	},
	{	description: "Roots brunch",
		picture: "https://media-cdn.tripadvisor.com/media/photo-s/07/77/00/9e/roots-section-of-dining.jpg",
		from: "tripadvisor.com"
	},
	{	description: "Chico State",
		picture: "http://www.csuchico.edu/cob/images/kendall-hall.jpg",
		from: "csuchico.edu"
	},
	{	description: "Paradise Lake",
		picture: "http://www.newsfromtheridge.com/wp-content/uploads/2011/04/P4030272.jpg",
		from: "newsfromtheridge.com"
	}
];
var current = 0;

function shuffleGallery()
{
	var index = 0;
	do {
		index = Math.floor(Math.random() * (chico.length-1));
	} while (index == current);
	document.getElementById("picture").style = "height:480px";
	document.getElementById("picture").src = chico[index].picture;
	document.getElementById("caption").innerHTML = chico[index].description;
	document.getElementById("source").innerHTML = "Image courtesy of: " + chico[index].from;
	//	console.log(chico[index]);
	current = index;
}
