class choice{
  consturctor(textRad, choice, choiceAng){
    this.textRad = textRad;
    this.choice = choice;
    this.choiceAng = choiceAng;
  }
  
  display(){
    push();
    translate(this.textRad * cos(this.choiceAng), 
              this.textRad * sin(this.choiceAng));
    rotate(this.choiceAng);
    scale(1, -1);
    text(this.choice, 0, 0);
    pop();
  }
  
  
}