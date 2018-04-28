
//list of image names in the img/companyPhotos folder
var g_imageList = ["image_1.jpeg", "image_2.png", "image_3.jpg", "image_4.jpg", "image_5.jpg",
                    "image_6.jpg", "image_7.jpg"];

//loads all the images and stores them in g_images list variable
function getAllImages()
{

    for (var i = 0; i < g_imageList.length; i++)
    {
        var img = new Image();
        img.src = "img/companyPhotos/" + g_imageList[i];
        g_images.push(img);
        
    }
}

//setting up global g_images list variable
var g_images = [];
//image element object
var myImg = document.getElementById("myImg");
//setting up initial opacity level for fading 
var opacity = 1;
//setting up initial opacity level for unfading
var increaseOpacity = 0.01;
//handle for increment or decrement opacity level
var handle = 0.02;
//counter for changing images in g_images list
var counter = 0;

//function call for getting ready all the images
getAllImages();


//listens on rightButton/forwardButton click event and fades in the current 
//image and fades out the next image
function forward() {
    opacity = 1;
    increaseOpacity = 0.01;
    opacityReducer(myImg);
    setTimeout(function() {
        //changes image source and get the next image on the right
        counter >= g_images.length - 1 ? counter = 0 : counter++;
        myImg.src = g_images[counter].src;
        opacityIncrease(myImg);
    }, 2000)

}

//listens on rightButton/forwardButton click event and fades in the current
// image and fades out the next image
function back() {
    opacity = 1;
    increaseOpacity = 0.01;
    opacityReducer(myImg);
    setTimeout(function() {
        //changes image source and get the next image on the left
        counter <= 0 ? counter = g_images.length - 1 : counter -= 1;
        myImg.src = g_images[counter].src;
        opacityIncrease(myImg);
    }, 2000)

}

//continuesly plays the slideshow, images are shown forward
function play()
{
    var playButton = document.getElementById("playButton");
    var pauseButton = document.getElementById("pauseButton");
    //toggling the play and pause buttons
    playButton.style.display = "none";
    pauseButton.style.display = "inline-block";
    //calls rotate function to rotate images on the right
    rotateForward(myImg, g_images);

}

//reloads the whole page 
function stopSlide(){
    location.reload();
}


//rotates the images from g_images list starting from 0 position till the last
//element in the list and goes back to zero postion when it reaches the end of the list
function rotateForward(myImg, g_images){
    var opacity = 1;
    counter = 0
    setInterval(function() {
        myImg.src = g_images[counter].src;
        myImg.style.opacity = opacity;
        opacity -= handle;
        if (opacity <= 0)
        {
            counter >= g_images.length - 1 ? counter = 0 : counter++;
            handle = 0 - handle;
        }
        if (opacity >= 1)
        {
            handle = 0.02;
        }
    }, 50); 
}


//decreases the opacity level from the initial level set up above
//takes an html element object as an input when opacity level reaches 0 
//funtion stops execution
function opacityReducer(ele){
    opacity -= 0.02;
    if (opacity <= 0 )
    {
        return;
    }
    ele.style.opacity = opacity;
    setTimeout(function() {
        opacityReducer(ele);
    }, 30);

}


//increases the opacity level from the initial level set up above
//takes an html element object as an input when opacity level reaches 1 
//funtion stops execution
function opacityIncrease(ele){

    increaseOpacity += 0.02;
    if(increaseOpacity >= 1)
    {
        return;
    }
    ele.style.opacity = increaseOpacity;
    setTimeout(function() {
        opacityIncrease(ele);  
    }, 30);

}



