class Figura {
  //CONSTRUCTOR
    constructor(x, y, altura, base) {
    this.posicion = createVector(x,y);
    this.altura = altura;
    this.base = base;
    this.fillred = 0;
    this.fillgreen = 0;
    this.fillblue = 57; 
  }
       
  
}



class Rectangulo extends Figura
{
  constructor(x, y, altura, base) 
  {
     super(x, y, altura, base)
  }
  
  draw()
  {    
   fill(this.fillred,this.fillgreen,this.fillblue); 
    rect(this.posicion.x,this.posicion.y,this.altura,this.base);
    
  }
}
class Triangulo extends Figura
{
  constructor(x, y, altura, base) 
  {
     super(x, y, altura, base)
  }
  
  draw()
  {    
   fill(this.fillred,this.fillgreen,this.fillblue); 
    triangle(this.posicion.x,this.posicion.y,this.altura,this.base);
    
  }
}

class Elipse extends Figura 
{
  constructor(x, y, altura, base) 
  {
     super(x, y, altura, base)
  }
  
  draw()
  {
   fill(this.fillred,this.fillgreen,this.fillblue); 
    ellipse(this.posicion.x,this.posicion.y,this.altura,this.base);
  }
}



var figuras =[];
var dibujando = 'circulo'
var btnCirculo =  null;
var btnRectangulo = null;
var btnTriangulo=null;

function setup() {
  createCanvas(400, 400);
  //BOTON CIRCULO
  btnCirculo  = createButton ('Circulo')
  btnCirculo .position(0,0);
  btnCirculo .mousePressed(changeCirculo);
  //BOTON  RECTANGULO
  btnRectangulo = createButton ('Rectangulo')
  btnRectangulo.position(75,0);
  btnRectangulo.mousePressed(changeRectangulo);
  //BOTON TRIANGULO
  btnTriangulo = createButton ('Linea')
  btnTriangulo.position(175,0);
  btnTriangulo.mousePressed(changeTriangulo);
  
  
  figuras.push(new Rectangulo (0,0,20,20));
  figuras.push(new Elipse (0,0,50,50));
  figuras.push(new Triangulo(0,0,20,20))
}

//SOMBREADO DE CIRCULO
function changeCirculo ()
{
  btnCirculo.style('backgroud-color','#cccccc');
  btnRectangulo.style('backgroud-color','#f0f0f0');
    btnTriangulo.style('backgroud-color','#f0f0f0');
  dibujando = 'circulo';
}
//SOBREADO DE RECTANGULO
function changeRectangulo ()
{
   btnRectangulo.style('backgroud-color','#cccccc');
  btnCirculo.style('backgroud-color','#f0f0f0');
    btnTriangulo.style('backgroud-color','#f0f0f0');

  dibujando = 'rectangulo';
}
function changeTriangulo ()
{
   btnTriangulo.style('backgroud-color','#cccccc');
  btnCirculo.style('backgroud-color','#f0f0f0');
  btnRectangulo.style('backgroud-color','#f0f0f0');
  dibujando = 'triangulo';
}

function draw() {
  background(220);
 
  figuras.forEach(function(value, index, array) {
  value.draw();

    
    
 
});

}


function mouseClicked() {
  // SE DIBUJA LA FIGURA SELECCIONADA
  if(mouseY > 25)
    {
      //SE DIBUJA UN CIRCULO
        if(dibujando == 'circulo') 
    figuras.push(new Elipse (mouseX,mouseY,20,20,3,1));
  //SE DIBUJA UN RECTANGULO(CUADRADO)
 else if (dibujando == 'rectangulo') 
  figuras.push(new Rectangulo (mouseX,mouseY,20,20,2,1));
      //SE DIBUJA UN TRIANGULO
      else if(dibujando=="triangulo")
        figuras.push(new Triangulo(mouseX,mouseY,mouseY,mouseX,mouseX,mouseY));
   
    }


  return false;
 
}

