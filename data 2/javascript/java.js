

function setup() {
   var canvas = createCanvas(screen.availWidth, windowHeight, WEBGL);
   canvas.parent('dump2');
   background ('rgb(90, 183, 102)');
   angleMode(DEGREES);

i = 0;
var rand = random(1000);
var rand2 = random(50, 100);
}


function draw () {
fill(255);
stroke(10);

   beginShape();
   vertex(mouseX-700, mouseY-500, mouseX+0-700, mouseY+0-500);
   vertex(mouseX+30-700, mouseY+30-500, mouseX+30-700, mouseY+30-500);
   vertex(mouseX+60-700, mouseY-500, mouseX+60-700, mouseY+0-500);
   vertex(mouseX+120-700, mouseY+30-500, mouseX+120-700, mouseY+30-500);
   vertex(mouseX+90-700, mouseY+90-500, mouseX+90-700, mouseY+90-500);
   //
   vertex(mouseX+90-700, mouseY+180-500, mouseX+90-700, mouseY+180-500);
   vertex(mouseX-30-700, mouseY+180-500, mouseX-30-700, mouseY+180-500);
   vertex(mouseX-30-700, mouseY+90-500, mouseX-30-700, mouseY+90-500);
   vertex(mouseX-60-700, mouseY+30-500, mouseX-60-700, mouseY+30-500);
   vertex(mouseX-700, mouseY-500, mouseX-700, mouseY-500);
   vertex(mouseX+60-700, mouseY-500, mouseX+60-700, mouseY-500);
   endShape(CLOSE);


//triangle(mouseX-700, mouseY-500, mouseX-670, mouseY-425, mouseX-642, mouseY-480, mouseX-614, mouseY-425);
//ellipse(mouseX-700, mouseY-500, 200, random(100, 110));
}

