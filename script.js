var im = 0, ij=0;
var txtarray = ['I am a student of Web Design And Development.','I know basic Html, Css, JavaScript, PHP, MySql.'];
var speed = 100;

function typeWriter() {
	if (im < txtarray[ij].length) {
		document.getElementById("message").innerHTML += txtarray[ij].charAt(im);
		im++;
		setTimeout(typeWriter, speed);
	}
	else{
		setTimeout(repeatt, 1000);
	}
}
 typeWriter();

function repeatt() {
	document.getElementById("message").innerHTML = "";
	im=0;
	if(ij < txtarray.length-1){
		ij++;
	}
	else{
		ij = 0;
	}
	typeWriter();
}

