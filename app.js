var sliderLeft = document.getElementById("slider-left");
var sliderRight = document.getElementById("slider-right")

let image1,image2,image3;
image1 = true;
image2 = false;
image3 = false;

sliderRight.addEventListener("click", function () {
    var images = document.getElementsByClassName("images");
    if(image1 == true ){
        images[0].style.display = "none";
        images[1].style.display = "flex";
        image1 = false;
        image2 = true;
    }else if(image2 == true){
        images[1].style.display = "none";
        images[2].style.display = "flex";
        image2 = false;
        image3 = true;
    }
});

sliderLeft.addEventListener("click", function () {
    var images = document.getElementsByClassName("images");
    if(image2 == true ){
        images[1].style.display = "none";
        images[0].style.display = "flex";
        image2 = false;
        image1 = true;
    }else if(image3 == true){
        images[2].style.display = "none";
        images[1].style.display = "flex";
        image3 = false;
        image2 = true;
    }
});
