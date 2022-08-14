console.log("//Loading scripts....");
// Sounds
var audio = new Audio('./assets/sounds/click.mp3');
	audio.defaultPlaybackRate = 1.7;
	audio.load();
console.log("//Loaded .... 25%");
// Menu Bar Toggle 
var menuIcon = document.getElementById('menu');
var sn = document.getElementById("Snav");

function openNav(){
	if(sn.style.left = "-120vw"){
		sn.style.left = "0";
		menuIcon.style.transform = "rotate(1800deg) translateX(0%)";
	}else{};
	changeCross();
  	menu.setAttribute("onclick" , "openNav2()");
}
function closeNav(){
	sn.style.left = "-120vw";
	menuIcon.style.transform = "rotate(0deg)";
	changeHB();
}
function openNav2(){
	if(sn.style.left = "0"){
		sn.style.left = "-120vw"; 
	};
	changeHB();
	menu.setAttribute("onclick" , "openNav()");
}
//Function to Change the Hamburger icon
var equationValue = new Array("",'&#10005;'+1,'&#9776;'+1,0,2,3);
var mdiv = document.createElement("div");
function changeCross(){
	mdiv.innerHTML = equationValue[1];
	menu.value = (mdiv.textContent || mdiv.innerText);
	audio.play();
};
function changeHB(){
	mdiv.innerHTML = equationValue[2];
	menu.value = (mdiv.textContent || mdiv.innerText);
	menuIcon.style.transform = "rotate(-1800deg) translateX(0%)";
	audio.play();
};
// Contact Form
function sendmail(){
			var name = $('#name').val();
			var email = $('#email').val();
            var message = $('#message').val();
			var Body='Name: '+name+'<br>Email: '+email+'<br>Message: '+message+'<br>.';
			console.log(name, email, message);

			Email.send({
        SecureToken:"f21936a4-0eb7-434c-9ad9-df43f1016354",
				To: 'amlittleprogrammer@gmail.com',
				From: email,
				Subject: "Hiring",
				Body: Body
			}).then(
				message =>{
					//console.log (message);
					if(message=='OK'){
					alert('Your mail has been send. Thanks for connecting.');
					}
					else{
						console.error (message);
						alert('There is an error at sending message. ')
					}}
);};

console.log("//Loaded .... 75%");

// Canvas Short Game
canvas = document.getElementById('canvas');
context = canvas.getContext("2d");
canvas.width = window.innerWidth-10;
canvas.height = window.innerHeight/2.5;
ctx = canvas.width;
cty = canvas.height;
// All vars
    var x = 0;
    var y = 0;
    var px =50;
    var py = 100;
    var t = Date.now();
    var pg = 0;
    w = ctx/3;
   const player = new Image();
   player.src = 'https://telegra.ph/file/698fbd41b4756411651d1.png';
 	var f = new FontFace('pangolin', "url(https://fonts.gstatic.com/s/pangolin/v6/cY9GfjGcW0FPpi-tWMfN79z4i6BH.woff2)");
	
//main
setTimeout(
	function(){
	context.beginPath();
	 f.load().then(function() {
		context.font = (ctx/15) + "px pangolin";

		context.fillStyle = "white";
		context.fillText("GRAB THE PLANETS," , ctx/4 , cty/2);
		context.fillText(" - short game" , ctx/3.5 , cty/1.5);
		context.fill();
	});
					
while(w >= (ctx/4)){
  function doo(){		
	context.beginPath();
		context.rect(ctx/4 , cty/1.4 , w , cty/4);
		context.strokeStyle = "red";
		context.stroke();

			w += 10;
}doo();} 
	},3000
);
window.onload = function(){
setInterval(function(){
function draw(){
  //time and fps settings
    var timePassed = (Date.now() - t) / 1000;        
    t = Date.now();
    var fps = Math.round(1 / timePassed);
   //clear()
    context.clearRect(x,y,ctx,cty);
    	
    //Text 
    context.beginPath();
           context.font = (ctx/25) + 'px Arial';
           context.fillStyle = "silver";
           context.fillText("Planets Grabbed: " + pg , 100 , 30);
           context.fill();
           context.fillStyle = "grey";
           context.fillText("FPS: " + fps , 20 , 30);
           context.fill();
    //Player 
    context.beginPath();
           context.drawImage(player,px,py, ctx/6 ,cty/8);
           context.stroke();
           
    addEventListener(
    "touchmove",
    (e) => {
    e.preventDefault();
    let rect = canvas.getBoundingClientRect();
    px = e.touches[0].clientX - rect.top - (-150);
    py = e.touches[0].clientY - rect.left - 250;
    pg += 1;
    },
    { passive: false }
    );
    console.log("1");
        canvas.style.backgroundImage = "url('./assets/img/space.png')";
   raf = window.requestAnimationFrame(draw);
}

canvas.addEventListener('mouseout', function(e) {
  window.cancelAnimationFrame(raf);
});

draw();



         //setInterval(draw,160);
     },1000)}


console.log("//Loaded 100%");
console.log("Owner - @ProgrammerXD");