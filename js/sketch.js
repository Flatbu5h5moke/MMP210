function setup() {
    createCanvas(800, 800);
    background(148, 251,255);
//    noStroke();s
    //hair
    fill('black');
    arc(200, 140, 240, 200, PI, 0);
    //ears
    fill('#634606');
    ellipse(75, 170, 25, 70);
    ellipse(325, 170, 25, 70);
    // face
    ellipse(200, 200, 250, 320);
    // nose
    triangle(200, 190, 175, 240, 225, 240);
     //hair
    noStroke();
    fill('black');
    arc(200, 130, 230, 178, PI, 0);
     fill('#634606');
    rect(105, 90, 190, 40);
    rect(90, 130, 220, 40);
    stroke(1);
    // eyes
    fill('white');
    ellipse(150, 170, 50, 30);
    ellipse(250, 170, 50, 30);
    fill(0, 0, 0);
    ellipse(150, 170, 30, 30);
    ellipse(250, 170, 30, 30);
    // mouth
    fill(255, 0, 0);
    ellipse(200, 290, 75, 50);
    fill('white');
    ellipse(200, 290, 65, 30);
    line(168, 290, 232, 290);
    // eyebrows
    fill('black');
    quad(105, 140, 120, 120, 180, 140, 165, 150);
    quad(295, 140, 280, 120, 220, 140, 235, 150);
    
    
    
    
}
    

    

