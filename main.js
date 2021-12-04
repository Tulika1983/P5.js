function preload()
{

}

function setup()
{
    canvas = createCanvas(640,480);
    video = createCapture(VIDEO);
    video.hide();

    tint_color = "";
}

function draw()
{
    image(video,0,0,640,480);
    tint(tint_color);
    fill(0, 128 , 0)
    stroke(0, 128 , 0)
    circle(40,50,70)
    circle(700,50,70)
    circle(40,50,70)
    circle(700,50,70)
   
}

function take_snapshot()
{
    save('student_name.png');
}

function filter_tint()
{
    tint_color = document.getElementById("color_name").value;
}