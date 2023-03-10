
var i = 0;
var m = document.getElementsByClassName("aud");

const music1 = document.getElementById("player1");
const music2 = document.getElementById("player2");
const music3 = document.getElementById("player3");
const music4 = document.getElementById("player4");
const music5 = document.getElementById("player5");
const music6 = document.getElementById("player6");
const music7 = document.getElementById("player7");
const music8 = document.getElementById("player8");

var player1 = document.getElementById("player1");
var player2 = document.getElementById("player2");
var player3 = document.getElementById("player3");
var player4 = document.getElementById("player4");
var player5 = document.getElementById("player5");
var player6 = document.getElementById("player6");
var player7 = document.getElementById("player7");
var player8 = document.getElementById("player8");

var hl = document.getElementsByClassName("blocks");
/*
const playBtn = $(".fa-play");
const pauseBtn = $(".fa-pause");
/*  if () {
  playBtn.classList.remove("fa-play");
  playBtn.classList.add("fa-pause");
} else {
  playBtn.classList.remove("fa-pause");
  playBtn.classList.add("fa-play");
} 
playBtn.show(); pauseBtn.hide();*/
function starts1() {
    // if(i = 0, i < 6, i++){m[i].pause();};
    do { i++; m[0].pause(); m[1].pause(); m[2].pause(); m[3].pause(); m[4].pause(); m[5].pause(); m[6].pause(); m[7].pause(); } while (i < 10);
    //  else(m.pause());
    music1.play();
    player1.addEventListener("timeupdate", function () {
        var currentTime = player1.currentTime;
        var duration = player1.duration;
        $('.range1').stop(true, true).animate({ 'width': (currentTime + .25) / duration * 100 + '%' }, 250, 'linear');
    });
}
function pause1() {
    music1.pause();
}

function starts2() {
    do { i++; m[0].pause(); m[1].pause(); m[2].pause(); m[3].pause(); m[4].pause(); m[5].pause(); m[6].pause(); m[7].pause(); } while (i < 10);
    music2.play();
    player2.addEventListener("timeupdate", function () {
        var currentTime = player2.currentTime;
        var duration = player2.duration;
        $('.range2').stop(true, true).animate({ 'width': (currentTime + .25) / duration * 100 + '%' }, 250, 'linear');
    });
}
function pause2() {
    music2.pause();
}

function starts3() {
    do { i++; m[0].pause(); m[1].pause(); m[2].pause(); m[3].pause(); m[4].pause(); m[5].pause(); m[6].pause(); m[7].pause(); } while (i < 10);
    music3.play();
    player3.addEventListener("timeupdate", function () {
        var currentTime = player3.currentTime;
        var duration = player3.duration;
        $('.range3').stop(true, true).animate({ 'width': (currentTime + .25) / duration * 100 + '%' }, 250, 'linear');
    });
}
function pause3() {
    music3.pause();
}

function starts4() {
    do { i++; m[0].pause(); m[1].pause(); m[2].pause(); m[3].pause(); m[4].pause(); m[5].pause(); m[6].pause(); m[7].pause(); } while (i < 10);
    music4.play();
    player4.addEventListener("timeupdate", function () {
        var currentTime = player4.currentTime;
        var duration = player4.duration;
        $('.range4').stop(true, true).animate({ 'width': (currentTime + .25) / duration * 100 + '%' }, 250, 'linear');
    });
}
function pause4() {
    music4.pause();
}

function starts5() {
    do { i++; m[0].pause(); m[1].pause(); m[2].pause(); m[3].pause(); m[4].pause(); m[5].pause(); m[6].pause(); m[7].pause(); } while (i < 10);
    music5.play();
    player5.addEventListener("timeupdate", function () {
        var currentTime = player5.currentTime;
        var duration = player5.duration;
        $('.range5').stop(true, true).animate({ 'width': (currentTime + .25) / duration * 100 + '%' }, 250, 'linear');
    });
}
function pause5() {
    music5.pause();
}

function starts6() {
    do { i++; m[0].pause(); m[1].pause(); m[2].pause(); m[3].pause(); m[4].pause(); m[5].pause(); m[6].pause(); m[7].pause(); } while (i < 10);
    music6.play();
    player6.addEventListener("timeupdate", function () {
        var currentTime = player6.currentTime;
        var duration = player6.duration;
        $('.range6').stop(true, true).animate({ 'width': (currentTime + .25) / duration * 100 + '%' }, 250, 'linear');
    });
}
function pause6() {
    music6.pause();
}

function starts7() {
    do { i++; m[0].pause(); m[1].pause(); m[2].pause(); m[3].pause(); m[4].pause(); m[5].pause(); m[6].pause(); m[7].pause(); } while (i < 10);
    music7.play();
    player7.addEventListener("timeupdate", function () {
        var currentTime = player7.currentTime;
        var duration = player7.duration;
        $('.range7').stop(true, true).animate({ 'width': (currentTime + .25) / duration * 100 + '%' }, 250, 'linear');
    });
}
function pause7() {
    music7.pause();
}

function starts8() {
    do { i++; m[0].pause(); m[1].pause(); m[2].pause(); m[3].pause(); m[4].pause(); m[5].pause(); m[6].pause(); m[7].pause(); } while (i < 10);
    music8.play();
    player8.addEventListener("timeupdate", function () {
        var currentTime = player8.currentTime;
        var duration = player8.duration;
        $('.range8').stop(true, true).animate({ 'width': (currentTime + .25) / duration * 100 + '%' }, 250, 'linear');
    });
}
function pause8() {
    music8.pause();
}

var screen = $('#screen');
screen.hide();
$(window).on("load", function () {
    var preload = $('.preloader');
    preload.fadeOut();
    setInterval(function () { screen.show(); }, 800);
});


/*var player = document.getElementsByClassName("aud");    
if(i = 0, i < 7 ,i++){
    player[1].addEventListener("timeupdate", function() {
    var currentTime = player[1].currentTime;
    var duration = player[1].duration;
    $('.hp_range').stop(true,true).animate({'width':(currentTime +.25)/duration*100+'%'},250,'linear');
})};*/

