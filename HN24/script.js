var adrsBar = document.getElementById('theme');
var screen = $('#screen');
screen.hide();

/*setTimeout(function(){
document.getElementById("preloader").style.display = "none";
document.getElementById("screen").style.display = "block";
},2000);*/

/*$(window).on("load", function() {
	var preload = $('#preloader');
	var screen = $('#screen');
	preload.find('.logo').fadeOut(function(){
		preload.fadeOut();
		preload.style.transform = "scale(10)";
		preload.style.display = "none";
		preload.style.transition = "1s";
        document.getElementById('screen').style.opacity = "1";
	    screen.fadeIn();
	});
});*/
$(window).on("load", function() {
	var preload = $('#preloader');
	preload.find('.logo').fadeOut(function(){
		preload.fadeOut();
		screen.show();
	});
});
$("title").ready(function(){$(".Facebook,.Support,.Youtube,.Information,.maps").hide();});
$(".icon1").click(function(){$(".Support").show();document.getElementById("icon1").style.transform = "scale(1.4)";window.scrollTo(0, 0);
           adrsBar.setAttribute('content','#ff0000');
});
$(".icon2").click(function(){$(".Facebook").show();document.getElementById("icon2").style.transform = "scale(1.4)";window.scrollTo(0, 0);
           adrsBar.setAttribute('content','#5000ca');
});
$(".icon3").click(function(){$(".Home").show();window.scrollTo(0, 0);
           adrsBar.setAttribute('content','#ff0000');
});
$(".icon4").click(function(){$(".Youtube").show();document.getElementById("icon4").style.transform = "scale(1.4)";window.scrollTo(0, 0);
           adrsBar.setAttribute('content','#ff0000');
});
$(".icon5").click(function(){$(".Information").show();document.getElementById("icon5").style.transform = "scale(1.4)";window.scrollTo(0, 0);
           adrsBar.setAttribute('content','#ff0000');
});
$(".direction").click(function(){$(".maps").slideToggle(100);});
$(".icon1,.icon2,.icon3,.icon4").click(function(){
                                                   $(".Information").hide();
                                                   document.getElementById("icon5").style.transform = "scale(1)";
                                                   });
$(".icon1,.icon2,.icon3,.icon5").click(function(){
                                                   $(".Youtube").hide();
                                                   document.getElementById("icon4").style.transform = "scale(1)";
                                                   });
$(".icon1,.icon2,.icon4,.icon5").click(function(){
                                                   $(".Home").hide();
                                                   
                                                   });
$(".icon1,.icon3,.icon4,.icon5").click(function(){
                                                   $(".Facebook").hide();
                                                   document.getElementById("icon2").style.transform = "scale(1)";
                                                   });
$(".icon2,.icon3,.icon4,.icon5").click(function(){
                                                   $(".Support").hide();
                                                  document.getElementById("icon1").style.transform = "scale(1)";
                                                   });
                                                  
var reqURL = "https://api.rss2json.com/v1/api.json?rss_url=" + encodeURIComponent("https://www.youtube.com/feeds/videos.xml?channel_id=");
function loadVideo(iframe) {
  $.getJSON(reqURL + iframe.getAttribute('cid') + "&api_key=8bwwlljmtoiscsogior2ydu7phfapwa1hvwvkxkr&order_by=pubDate&order_dir=desc&count=27",
    function(data) {
      var videoNumber = (iframe.getAttribute('vnum') ? Number(iframe.getAttribute('vnum')) : 0);
      var link = data.items[videoNumber].link;
      id = link.substr(link.indexOf("=") + 1);
      iframe.setAttribute("src", "https://youtube.com/embed/" + id + "?enablejsapi=1&controls=1&autoplay=1&modestbranding=1&fullscreen=1");
    }
  );
}
var iframes = document.getElementsByClassName('latestVideoEmbed');
for (var i = 0, len = iframes.length; i < len; i++) {
  loadVideo(iframes[i]);
}
console.clear();

var tag = document.createElement("script");
tag.src = "//www.youtube.com/player_api";
var firstScriptTag = document.getElementsByTagName("script")[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

$(".bottom-nav").click(function(){
var i=0;
while(i<15){
	$(".latestVideoEmbed")[i].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
    i++;}
});

console.clear();
setTimeout(function(){ console.clear();}, 7500);
function sendmail(){
			var name = $('#name').val();
			var email = $('#email').val();
			var subject = $('#topic').val();
            var message = $('#Message').val();
			var Body='Name: '+name+'<br>Email: '+email+'<br>Subject: '+subject+'<br>Message: '+message+'<br>';
			//console.log(name, phone, email, message);

			Email.send({
        SecureToken:"5a5b68a8-f001-4a96-b742-0d2ad7dc4733",
				To: 'saininaman006@gmail.com',
				From: email,
				Subject: subject,
				Body: Body
			}).then(
				message =>{
					//console.log (message);
					if(message=='OK'){
					alert('Your mail has been send. Thanks for connecting to us.');
					}
					else{
						console.error (message);
						alert('There is error at sending message. ')
					}}
			);};
$(document).on('ready', function() {
  $(".variable").slick({
    dots: true,
    infinite: true,
    variableWidth: true
  });
});
