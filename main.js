// inicio slide imagenes
let slider = document.querySelector('.slider_container');
let sliderInvididual = document.querySelectorAll('.slider_section img');
let contador = 0;
let width = sliderInvididual[0].clientWidth;
let intervalo = 6000;

window.addEventListener("resize", function(){
	width = sliderInvididual[0].clientWidth;
})

setInterval(function(){
	slides();
},intervalo);

function slides(){
	slider.style.transform = "translate("+(-width*contador)+"px)";
	slider.style.transition = "transform 0.8s";
	contador++;

		if(contador == sliderInvididual.length){
		setTimeout(function(){
            slider.style.transform = "translate(0px)";
	        slider.style.transition = "transform 0s";
	        contador=1;
		},3000)
	}
}


const atras = document.querySelector('#atras');
const adelante = document.querySelector('#adelante');

atras.addEventListener('click', ()=>{
	if(contador >= sliderInvididual.length -1) return;
	slider.style.transition = "transform 0s";
    contador++;
    slider.style.transform = "translate("+(-width*contador)+"px)";
	});


adelante.addEventListener('click', ()=>{	
	if(contador <= 0) return;
	slider.style.transition = "transform 0s";
	contador--;
	slider.style.transform = "translate("+(-width*contador)+"px)";
	});

//fin slide imagenes

//inicio imagenes scroll

window.addEventListener('scroll', function(){
	let animacion = document.getElementById('animado');
	let posicionObj1 = animacion.getBoundingClientRect().top;
	console.log(posicionObj1);
	let tamañoDePantalla = window.innerHeight/1;

	if(posicionObj1 < tamañoDePantalla){
		animacion.style.animation = 'slide 2s'
	}
});

window.addEventListener('scroll', function(){
	let animacion2 = document.getElementById('animado2');
	let posicionObj2 = animacion2.getBoundingClientRect().top;
	console.log(posicionObj2);
	let tamañoDePantalla = window.innerHeight;

	if(posicionObj2 < tamañoDePantalla){
		animacion2.style.animation = 'slide 3s'
	}
});

window.addEventListener('scroll', function(){
	let animacion3 = document.getElementById('animado3');
	let posicionObj3 = animacion3.getBoundingClientRect().top;
	console.log(posicionObj3);
	let tamañoDePantalla = window.innerHeight/1;

	if(posicionObj3 < tamañoDePantalla){
		animacion3.style.animation = 'slide 2s'
	}
});
window.addEventListener('scroll', function(){
	let animacion4 = document.getElementById('animado4');
	let posicionObj4 = animacion4.getBoundingClientRect().top;
	console.log(posicionObj4);
	let tamañoDePantalla = window.innerHeight/1;

	if(posicionObj4 < tamañoDePantalla){
		animacion4.style.animation = 'slide 3s'
	}
});
window.addEventListener('scroll', function(){
	let animacion5 = document.getElementById('animado5');
	let posicionObj5 = animacion5.getBoundingClientRect().top;
	console.log(posicionObj5);
	let tamañoDePantalla = window.innerHeight/1;

	if(posicionObj5 < tamañoDePantalla){
		animacion5.style.animation = 'horizontal 3s'
	}
});
window.addEventListener('scroll', function(){
	let animacion7 = document.getElementById('animado7');
	let posicionObj7 = animacion7.getBoundingClientRect().top;
	console.log(posicionObj7);
	let tamañoDePantalla = window.innerHeight/1;

	if(posicionObj7 < tamañoDePantalla){
		animacion7.style.animation = 'slide 3s'
	}
});
//fin imagenes scroll

//inicio menu horizontal scroll

const header = document.querySelector('.grid_header');

window.addEventListener('scroll', function(){
	header.classList.toggle('active', window.scrollY > 0)
})