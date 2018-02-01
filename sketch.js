let scale = 30;
let scaley = 1;
let xas;
let yas;
let x;
let y;
//let undrawed = true;
let h = 10; //size scale markers
let inputa;
let inputb;
let inputc;
let a = 1;
let b = 1;
let c = 1;
let type = 2;
let sel = "kwadraat";
let jan = [];

function setup() {
createCanvas(900,900);
submit();
selector();
stroke(0);
}

function submit() {
  submit = select("#submit");
  inputa = select("#inputa");
  inputb = select("#inputb");
  inputc = select("#inputc");

  submit.mousePressed(update);
}

function selector() {
  sel = createSelect();
  sel.position(10,10);
  sel.option('kwadraat');
  sel.option('sinus');
  sel.option('cosinus');
  sel.option('tangens');
  sel.changed(mySelectEvent);
}

function mySelectEvent() {
x = -width/2/scale;
  var sel = sel.value();
  //text("it's a " + item + '!', 50, 50);
  //Graph(func);
}

function draw() {
background(255);



translate(width/2,height/2);
axes();
Graph();
noLoop();


//}


}

function update() {
  x = -width/2/scale;
  y = 0;
a = inputa.value();
b = inputb.value();
c = inputc.value();
func = sel.value();
background(255);
axes();
Graph(func);
}

function axes() {
  //blauw ruitjespapier
  stroke(0,100,255);
  strokeWeight(1);
    for(xas = -width/2; xas < width/2+10; xas += scale) {
      line (xas,-height/2,xas,height/2);
    }
    for(yas = -height/2; yas < height/2+10; yas += scale) {
     line (-width/2,yas,width/2, yas);
   }
      //xas
      stroke(100);
      strokeWeight(2);
  line(-width/2,0,width/2,0);
//yas
  line(0,-height/2,0,height/2);
//maatstreepjes x-as + waardes.
  for(xas = -width/2; xas < width/2+10; xas += scale) {
strokeWeight(2);
   line (xas,-h/2,xas,h/2);
strokeWeight(1);
   text(xas/scale,xas+3,h+2);
  }
  //text x-as
  text("x-as",width/2-30,-h);

  //maatstreepjes y-as + waardes
  for(yas = -height/2; yas < height/2+10; yas += scale) {
    strokeWeight(2);
   line (-h/2,yas,h/2, yas);
   if(yas!=0) {
     strokeWeight(1);
   text(-yas/scale,5,yas);
 }
}
//text y-as
  text("y-as",5,-height/2+15);

}

function Graph(t) {
push();

noFill();
 beginShape();
 stroke(0);
 strokeWeight(3);
while (x  < width/2/scale) {
if (t =="kwadraat") {
  y = -(a*pow(x,type)+b*pow(x,type-1)+c*pow(x,type-2));
  strokeWeight(1);
  text(a+" x2 + "+b+ " x +"+c,width/2-100,-height/2+100);
  strokeWeight(3);
} else if (t == "sinus") {
  y = -a*sin(b*x)-c;
} else if (t== "cosinus") {
  y = -a*cos(b*x)-c;
} else if (t == "tangens") {
  y = -a*tan(b*x)-c;
}  //y = -(2*pow(x,4)+a*pow(x,3)+b*pow(x,2)+x+c);
//
  //y = -sin(x);
  //y = 1/x;
  //y = 1/x;
  vertex(scale * x,scale * y*scaley);
   x +=0.01;

}
x=0.01;
// while (x  < width/2/30) {
//   //y = -(a*pow(x,2)+b*x+c);
//   //y = -3*sin(4*x);
//   //y = -sin(x);
//   y = 1/x;
//   //y = 1/x;
//   vertex(scale * x,scale * y*scaley);
//    x +=0.01;

//}
endShape();

pop();
}

// Onderstaand gebruik van dropdown, t.b.v. grafiek-selectie.
// var sel;
//
// function setup() {
//   textAlign(CENTER);
//   background(200);
//   sel = createSelect();
//   sel.position(10, 10);
//   sel.option('pear');
//   sel.option('kiwi');
//   sel.option('grape');
//   sel.changed(mySelectEvent);
// }
//
// function mySelectEvent() {
//   var item = sel.value();
//   background(200);
//   text("it's a " + item + '!', 50, 50);
// }
