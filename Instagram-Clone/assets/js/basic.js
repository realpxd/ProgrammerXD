AOS.init();
const containerF = document.querySelector(".feed-container");
const containerD = document.querySelector(".direct-container");
let limit = 4;
let pageCount = 1;
let postCount = 1;


const getPost = async () => {
	const response = await fetch(`https://realpxd.github.io/Igc/db.json`);
	//console.log(response);
	const data = await response.json();
	//console.log(data);
	
data.map((curElm) => {
	const feedData = `
		<div class="posts">
			<div class="post-nav">
				<span class="post-head">
					<img class="post-pfp" src="https://source.unsplash.com/random/?person?sig=${curElm.likes}&auto=webp&q=10" alt="${curElm.id}'s profile picture">
					${curElm.id}
				</span>
				<span class="post-menu">
					<i class="fa fa-ellipsis-v" aria-hidden="true"></i>
				</span>
			</div>
			<img class="post-main" src="https://source.unsplash.com/random/${screen.width}x${screen.height/2}?sig=${curElm.likes}&auto=webp&q=10" alt="${curElm.id}'s post";">
			<div class="post-info">
				<div class="post-reacts">
					<i class="far fa-heart" aria-hidden="true" onclick="likeme()"></i>
					<i class="far fa-comment" aria-hidden="true"></i>
				<i class="far fa-paper-plane"></i>
				</div>
				<i class="far fa-bookmark" aria-hidden="true" onclick="saveme()"></i>
			</div>		
			<p class="post-like-count">${curElm.likes}</p>
			<div class="post-caption">
				<span>${curElm.id}</span> ${curElm.caption}
			</div>
			<div class="post-comments">
				View all ${curElm.commentsCount} comments
			</div>
			<p class="post-time"> ${curElm.postTime} hours ago </p>
		</div>
	`;

	containerF.insertAdjacentHTML('beforeend' , feedData);

	const directData = `
		<div class="m-boxes" onclick="boxes()">
			<div class="m-clm-a">
				<img class="m-pfp" src="https://source.unsplash.com/random/?person?sig=${curElm.likes}&auto=webp&q=10" alt="${curElm.id}'s profile picture";">
				<div>
					<p class="m-user">${curElm.id}</p>
					<p  class="m-text-box">last online : ${curElm.postTime}h ago</p>
				</div>
			</div>
			<div class="m-clm-b">
				<i class="fas fa-camera"></i>
			</div>
		</div>
	`;
		containerD.insertAdjacentHTML('beforeend' , directData);

})
};

getPost();

// Search Bar
function search_thread() { 
    let sb = document.querySelector('.search-bar input').value 
    sb=sb.toLowerCase(); 
    let x = document.getElementsByClassName('m-user');
    let y = document.getElementsByClassName('m-boxes'); 
    for (i = 0; i < x.length; i++) {  
        if (!x[i].innerHTML.toLowerCase().includes(sb)) { 
            y[i].style.opacity = "0";
            y[i].style.position = "absolute";
            y[i].style.top = "0";
        } 
        else {
        	 y[i].style.opacity = "1";
        	 y[i].style.position = "static";
        	 y[i].style.top = "";
        } 
    } 
}
function likeme(){
	let lb = document.querySelectorAll(".post-reacts .fa-heart");
for (i = 0; i < lb.length; i++){
	if(document.querySelector(".post-reacts .fa-heart").style.color == "white"){
		lb[i].style.color = "red";
		lb[i].setAttribute("class" , "fas fa-heart");
	}else{
		lb[i].style.color = "white";
		lb[i].setAttribute("class" , "far fa-heart");
		}
	}
}
function saveme(){
	let lb = document.querySelectorAll(".fa-bookmark");
for (i = 0; i < lb.length; i++){ 
	if(document.querySelector(".fa-bookmark").style.color == "white"){
		lb[i].style.color = "silver";
		lb[i].setAttribute("class" , "fas fa-bookmark");
	}else{
		lb[i].style.color = "white";
		lb[i].setAttribute("class" , "far fa-bookmark");
		}
	}
}


function boxes(){
	chatContainer.style.display = "block";
	chatContainer.style.marginLeft = "0";
}
$(".fa-arrow-left").click(function(){
	chatContainer.style.display = "none";
	chatContainer.style.marginLeft = "200%";
});
const chatArea = document.getElementById("c-area");
$(".gotoBottom").click(function(){
	chatArea.scrollTo(0,20000);
});
setTimeout(function(){
	var preload = $('.preloader');
		preload.fadeOut(700);
	},3500);