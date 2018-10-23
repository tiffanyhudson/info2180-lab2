window.onload= function (){
	let boundary1 = document.getElementById("boundary1");
	boundary1.onmouseover = function() {
		this.setAttribute("class", "boundary youlose");
	}
	let boundary = document.querySelectorAll(".boundary");
	let tracker = 0;
	for (let a = 0; a < boundary.length; a++)
	{
		boundary[a].onmouseover = function(){
			for (let b = 0; b< boundary.length-1;b++){
				boundary[b].setAttribute("class","boundary youlose");
			}
		}
	}
}