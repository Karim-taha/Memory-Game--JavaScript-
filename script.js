var img = ['assets/1.gif', 'assets/2.gif', 'assets/3.gif', 'assets/4.gif',
'assets/5.gif', 'assets/6.gif'];

var main = document.getElementById("main");
var allDivs = document.getElementsByTagName('div');
var rightAudio = new Audio('assets/right.wav');
var wrongAudio = new Audio('assets/wrong.wav');

function drawImage(){
    for(var i =0; i < img.length; i++){
        main.innerHTML += '<div><img src="' + img[i] + '"></div>';
    }
}

drawImage();
drawImage();

var flag = true;
var arr = [];

for(var i =0; i < allDivs.length; i++){
    allDivs[i].addEventListener('click', function(){
        if(flag){
            this.firstChild.style.opacity = '1';
            if(arr.length == 0){
                arr[0] = this;
            }
            else if(arr.length == 1){
                arr[1] = this;
            }
            if(arr.length == 2){
                flag = false;
                setTimeout(checkImage, 200);
            }
        }else {
            return;
        }
    });
}

function checkImage(){
    if(arr[0].firstChild.getAttribute('src') === arr[1].firstChild.getAttribute('src')){
        rightAudio.play();
        arr = [];
        flag = true;
    }else{
        arr[0].firstChild.style.opacity = '0';
        arr[1].firstChild.style.opacity = '0';
        arr = [];
        flag = true;
        wrongAudio.play();
    }
}








