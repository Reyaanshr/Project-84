canvas= document.getElementById("Track");
ctx = document.getContext("2d");
background_image = "https://thumbs.dreamstime.com/b/race-track-dark-background-illustration-rectamgular-cartoon-top-view-174314605.jpg"
car_image_1 = "car1.png";
car_image_2 = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQy5DpLYp2-acYdyP32X1_FFTKVj7xCkMk6RQ&usqp=CAU";
car_1_width = 120;
car_1_height = 70;
car_1_x = 10;
car_1_y = 10;
car_2_width = 120;
car_2_height = 70;
car_2_x = 10;
car_2_y = 100;
function add(){
    background_imgTag = new Image();
    background_imgTag.onload = uploadBackround;
    background_imgTag.src = background_image;
    
    car_1_imgTag = new Image();
    car_1_imgTag.onload = uploadCar_1;
    car_1_imgTag.src = car_image_1;

    car_2_imgTag = new Image();
    car_1_imgTag.onload = uploadCar_2;
    car_2_imgTag.src = car_image_2;
}

function uploadBackround(){
    ctx.drawImage(background_imgTag , 0 , 0 , canvas.width , canvas.height);
}

function uploadCar_1(){
    ctx.drawImage(car_1 , car_1_x , car_1_y , car_1_width , car_2_height);
}

window.addEventListener("keydown", my_keydown);
function my_keydown(e){
    keypressed = e.keycode;
    if(keypressed = '87'){
        car_1_straight();
    }
    if(keypressed = '83'){
        car_1_back();
    }
    if(keypressed = '65'){
        car_1_left();
    }
    if(keypressed = '68'){
        car_1_right();
    }
    if(keypressed = '38'){
        car_2_straight();
    }
    if(keypressed = '40'){
        car_2_back();
    }
    if(keypressed = '37'){
        car_2_left();
    }
    if(keypressed = '39'){
        car_2_right();
    }
}