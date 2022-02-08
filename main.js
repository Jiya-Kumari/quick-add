object_set=["pen","mobile","eraser","blackboard","laptop"];
randomNumber=Math.floor(Math.random()*object_set.length);
sketch=object_set[randomNumber];
document.getElementById("sketch_to_drawn").innerHTML="sketch to be drawn: "+sketch;
score=0;
drawn_sketch="";
function preload(){
    classifier=ml5.imageClassifier("DoodleNet");
    imageClassifier=
}
function setup(){
    canvas=createCanvas(400,400);
canvas.center();
background("white");
canvas.mouseReleased(classifyCanvas);
synth=window.speechSynthesis;
}
function draw(){
    strokeWeight(10);
    stroke("red");
    if(mouseIsPressed){
        line(pmouseX,pmouseY,mouseX,mouseY);
    }
    
}
function clear_canvas(){
    background("white");
    
}