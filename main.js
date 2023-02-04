function setup() {
    video = createCapture(VIDEO);
    video.size(550,350);

    canvas = createCanvas(550 , 350);
    canvas.position(560,150);
    poseNet = ml5.poseNet(video,modalLoaded);
    poseNet.on('pose',getPoses);
}
function draw(){
 background('#66ff33');
}
function modalLoaded() {
    console.log("Posenet Intialized")
}
function getPoses(results) {
    if (results.length > 0){
        console.log(results); 
    }
}