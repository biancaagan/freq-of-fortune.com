let wheelSpeed = 50;
let d = 350;
let r = 175;

let angle = 0;
let angleV = 0;
let angleA = 0.001;

let pressed1 = false;
let pressed2 = false;
let pressed3 = false;

let stateChange = 0;

let count = 0;

var choices = [
  "TRY AGAIN", 
  "NO.", 
  "STILL NO", 
  "0 MHz", 
  "GO HARDWIRED", 
  "Stop asking.", 
  "Why?",
  "0 MHz",
  "No",
  "No (but nicely)",
  "F**k off"
  ];

let c1, c2, c3, c4, c5, c6, c7, c8, c9, c10, c11, c12;

let textRadius;

// Buttons
let newChoices;
let startWheel;
let stop;
let spin;
let setChoices;


function setup() {
  createCanvas(600, 400);
  frameRate(wheelSpeed);
  
  startWheel = createButton('CLICK TO START');
  startWheel.mouseClicked(() => pressed1 = true);
  // startWheel.position(10, 310);
  startWheel.size(120, 60);
  
  stop = createButton('STOP / SPIN AGAIN');
  stop.mouseClicked(() => pressed2 = true);
  // stop.position(10, 340);
  stop.size(120, 60);

  setChoices = createButton('Shuffle Choices');
  setChoices.mousePressed(shuffleChoices);
  // setChoices.position(10, 370);
  setChoices.size(120, 60);
  
  // spin = createButton('SPIN');
  // spin.mouseClicked(() => pressed3 = true);
  // spin.position(70, 340);
  

     
  c1 = random(choices);
  c2 = random(choices);
  c3 = random(choices);
  c4 = random(choices);
  c5 = random(choices);
  c6 = random(choices);
  c7 = random(choices);
  c8 = random(choices);
  c9 = random(choices);
  c10 = random(choices);
  c11 = random(choices);
  c12 = random(choices);
}

function draw() {
  background(220);
  
  textAlign(LEFT);
  textSize(20)
  textWrap(WORD);
  fill(0);
  text('So you want a new frequency?', 10, 10, 150);
  text('Spin for an answer!', 10, 75, 150);

  // 0, 0 at center
  translate(width/2, height/2);
  scale(1, -1);
  
  fill('yellow');
  ellipse(0, 0, d, d);
  
  push();
  // Start wheel
  if(pressed1 == true && pressed2 == false){
    pressed2 = false;
    rotate(angle);
    angle += angleV;
    angleV += angleA; 
    angleV = constrain(angleV, 0, 0.2);
    
    //console.log('start button state is: ' + pressed1);
  } 
  
  // Stop wheel
  if(pressed2 == true && pressed1 == true){
    pressed2 = false;
    angleA = -angleA;
    angleV = constrain(angleV, 0, 0.2);
    
    //console.log('stop button state is: ' + pressed2);
  }
  
  // if(angleV == 0){
  //   console.log(angle);
  //   rotate(angle);
  //   pressed1 = false; 
  //   pressed2 = false;
  // }

  
  // Spin again
  if(pressed3 == true && angle == 0){
    angle += angleV;
    angleV += angleA;
    angleA = -angleA;
    angleV = constrain(angleV, 0, 0.2);
  }
  
  
  // Draw lines in wheel
  for(i = 0; i < 2*PI; i += ((1/6)*PI)){
    let x1 = r * cos(i);
    let y1 = r * sin(i);
    let x2 = r * cos(i + PI);
    let y2 = r * sin(i + PI);
    fill(0);
    line(x1, y1, x2, y2);
  }
  
  textAlign(LEFT);
  textSize(12);
  
  drawChoices();

  
  pop();
  
  rotate(0);
  fill('red');
  triangle(190, 0, 
           210, 10,
           210, -10);
}

function shuffleChoices(){
  if(angleV == 0){
  c1 = random(choices);
  c2 = random(choices);
  c3 = random(choices);
  c4 = random(choices);
  c5 = random(choices);
  c6 = random(choices);
  c7 = random(choices);
  c8 = random(choices);
  c9 = random(choices);
  c10 = random(choices);
  c11 = random(choices);
  c12 = random(choices);
  }
}



function drawChoices(){
  strokeWeight(1);
  stroke(0);
  fontsize = 32;
  textRadius = 65;
  
  
  push();
  translate(textRadius * cos(radians(15)), textRadius * sin(radians(15)));
  rotate(radians(15));
  scale(1, -1);
  text(c1, 0, 0);
  pop();
  
  push();
  translate(textRadius * cos(radians(45)), textRadius * sin(radians(45)));
  rotate(radians(45));
  scale(1, -1);
  text(c2, 0, 0);
  pop();
  
  push();
  translate(textRadius * cos(radians(75)), textRadius * sin(radians(75)));
  rotate(radians(75));
  scale(1, -1);
  text(c3, 0, 0);
  pop();
  
  push();
  translate(textRadius * cos(radians(105)), textRadius * sin(radians(105)));
  rotate(radians(105));
  scale(1, -1);
  text(c4, 0, 0);
  pop();
  
  push();
  translate(textRadius * cos(radians(135)), textRadius * sin(radians(135)));
  rotate(radians(135));
  scale(1, -1);
  text(c5, 0, 0);
  pop();
  
  push();
  translate(textRadius * cos(radians(165)), textRadius * sin(radians(165)));
  rotate(radians(165));
  scale(1, -1);
  text(c6, 0, 0);
  pop();
  
  push();
  translate(textRadius * cos(radians(195)), textRadius * sin(radians(195)));
  rotate(radians(195));
  scale(1, -1);
  text(c7, 0, 0);
  pop();
  
  push();
  translate(textRadius * cos(radians(225)), textRadius * sin(radians(225)));
  rotate(radians(225));
  scale(1, -1);
  text(c8, 0, 0);
  pop();
  
  push();
  translate(textRadius * cos(radians(255)), textRadius * sin(radians(255)));
  rotate(radians(255));
  scale(1, -1);
  text(c9, 0, 0);
  pop();
  
  push();
  translate(textRadius * cos(radians(285)), textRadius * sin(radians(285)));
  rotate(radians(285));
  scale(1, -1);
  text(c10, 0, 0);
  pop();
  
  push();
  translate(textRadius * cos(radians(305)), textRadius * sin(radians(305)));
  rotate(radians(305));
  scale(1, -1);
  text(c11, 0, 0);
  pop();
  
  push();
  translate(textRadius * cos(radians(335)), textRadius * sin(radians(335)));
  rotate(radians(335));
  scale(1, -1);
  text(c12, 0, 0);
  pop();
}


