var comptuerImage=1;
var totalimage=10;

function slider(x){
	var image=document.getElementById('img');
	comptuerImage=comptuerImage + x;
	image.src="image/front"+comptuerImage+".jpg";
	if(comptuerImage>=totalimage)
		{
			comptuerImage=1;
		}
	if(comptuerImage<1){comptuerImage=totalimage;}

}

function sliderAuto(){
	var image=document.getElementById('img');
	comptuerImage=comptuerImage + 1;
	image.src="image/front"+comptuerImage+".jpg";
	if(comptuerImage>=totalimage)
		{
			comptuerImage=1;
		}
	if(comptuerImage<1){comptuerImage=totalimage;}

}

window.setInterval(sliderAuto,3000);