Webcam.set({
    width: 350,
    height: 350,
    image_format: "png",
    png_quality: 100
});
camera=document.getElementById("camera");
Webcam.attach("#camera");

function clickpic(){
    Webcam.snap(function (data_uri){
        document.getElementById("result").innerHTML='<img id="pre_img" src="'+data_uri+'">';
    });
}
console.log("ml5", ml5.version);
classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/WSdCTA7-1/model.json",modelLoaded);

function modelLoaded(){
    console.log("Model Loaded!")
}

function check(){
    img=document.getElementById("pre_img");
    classifier.classify(img, gotResult);
}

function gotResult(error, result){
    if(error){
        console.error(error);   
    }
    else{
        console.log(result);
        document.getElementById("name").innerHTML=result[0].label;
        document.getElementById("%").innerHTML=result[0].confidence.toFixed(2)*100+"%";
    }
}