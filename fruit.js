Status="";

function preload(){
    loadImage("roselamp.jpg");
}

function setup(){
    canvas=createCanvas(640,420);
    canvas.center();
    objectDetector=ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML="Status : Detecting Object:"
    }
    

    function modelLoaded(){
        console.log("Model Loaded");
        Status=true;
    }
    
    function gotResult(error,results){
        if (error){
            console.log(error);
        }
    }