function preload(){
}
function setup(){
    canvas=createCanvas(300,300);
    canvas.position(450,350);
    webcam=createCapture(VIDEO);
    webcam.hide();
    classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/x1ZlJl3aa/model.json',modelLoaded);
}
function draw(){
    image(webcam,0,0,300,300)
    classifier.classify(webcam,gotResult);
}
function modelLoaded(){
    console.log('MODEL IS LOADED');
}
function gotResult(error,results){
 if(error){
  console.error(error)
}
else{
    //console.log(results);
    document.getElementById("object_name").innerHTML=results[0].label;
    document.getElementById("accuracy_name").innerHTML=results[0].confidence.toFixed(3);
}
}
