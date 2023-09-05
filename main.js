// up
let span = document.querySelector(".up");
window.onscroll = function () {
	console.log(this.scrollY)
	if (this.scrollY >= 600) {
		span.classList.add("show");
	} else {
		span.classList.remove("show");
	}
};

span.onclick = function () {
	window.scrollTo({
		top: 0,
		behavior: "smooth",
	});
};

window.addEventListener('scroll',reveal);
function reveal(){
	var reveals =document.querySelectorAll('.reveal');
	for (var i=0;i<reveals.length;i++){
		var windowheight =window.innerHeight;
		var revealtop =reveals[i].getBoundingClientRect().top;
		var revealpoint =150;
		if(revealtop <windowheight - revealpoint){
			reveals[i].classList.add('active');
			
		}else{
			reveals[i].classList.remove('active');
		}
	}
}

const myButton = document.getElementById('myButton');


myButton.addEventListener('click', function() {

  alert('Thanks for donnation');
});

