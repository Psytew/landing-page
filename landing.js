var images = ["Paris.jpg","Ex01.jpg","Ex02.jpg"]
const backgroundImage = document.querySelector("#opener")
var i = 0;
var transitioning = false;

setTimeout(function(){newSlide(true,true)},7000);

function newSlide(next,loop){
	if (transitioning == false){
		transitioning = true
		if (next){
			if (i < images.length - 1){
				i += 1
			} else {
				i = 0;
			}
		} else {
			if (i > 0){
				i -= 1
			} else {
				i = images.length - 1
			}
		}
		backgroundImage.style.setProperty('--image',"url(" + images[i] + ")")
		setTimeout(function(){transitioning = false}, 1000);
	}
	if (loop){
		setTimeout(function(){newSlide(true,true)}, 6000)
	}
}