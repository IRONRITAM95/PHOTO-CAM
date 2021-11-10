function preload(){

}

function setup(){
canvas = createCanvas(640,480);
canvas.position(140,250);
video = createCapture(VIDEO);
video.hide() ;
}

function draw(){
    rect(10, 10, 620, 460);
    image(video , 10,10 , 620,460);
}

function take_snapshot(){
save("pic.png");
}
