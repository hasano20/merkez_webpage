const navSlide=()=>{
	const burger = document.querySelector('.burger');
	const navbox = document.querySelector('.nav-box');
	const navcontentt = document.querySelectorAll('.nav-box li');

		burger.addEventListener('click',() => {
		 	//lässt navbox sliden
		 	navbox.classList.toggle('nav-active');
			
		 	//anmiert links
			navcontentt.forEach((link, index) => {
				if(link.style.animation){
					link.style.animation="";
				} else {
				link.style.animation = `save 0.7s ease forwards ${index/7+0.2}s`;
				}
			 });	 
			 burger.classList.toggle('change');
		});
		
		
}		


//mainclass
const mainn =()=>{
	navSlide();
}

//ausführen der Main
mainn();