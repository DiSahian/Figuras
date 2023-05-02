//Crear clase Canasta para poder construir la figura rectangular que representa mi canasta

class Canasta {
  constructor() {
    this.ancho = 75;
    this.alto = 50;
    this.x = width / 2 - this.ancho / 2;
    this.y = height - this.alto - 10;
    this.velocidad = 30;
  }
//Método para mostrar mi canasta
  mostrar() {
    fill(255, 174, 174);
    noStroke();
    rect(this.x, this.y, this.ancho, this.alto);
  }

//Método para mover mi canasta en el eje x con el eje x del mouse
  mover() {
    this.x = mouseX - this.ancho / 2;

    if (this.x < 0) {
      this.x = 0;
    } else if (this.x + this.ancho > width) {
      this.x = width - this.ancho;
    }
  }
}

//Clase comida de la cual van a heredar el pastel y las frutas
class Comida {
  constructor() {
    this.lado = 40;
    this.x = random(width - this.lado);
    this.y = -this.lado;
    this.velocidad = random(2, 5);
  }

  caer() {
    this.y += this.velocidad;
  }

  mostrar() {}
  
  colision(canasta) {
    if (
      this.y + this.lado > canasta.y &&
      this.y + this.lado < canasta.y + canasta.alto &&
      this.x + this.lado > canasta.x &&
      this.x < canasta.x + canasta.ancho
    ) {
      return true;
    } else {
      return false;
    }
  }
}

//Clase Fruta que hereda de comida
class Fruta extends Comida {
  mostrar() {
    fill(184, 174, 255);
    rect(this.x, this.y, this.lado, this.lado);
  }
}


//Clase pastel hereda de comida
class Pastel extends Comida {
  mostrar() {
    fill(175, 255, 171);
    rect(this.x, this.y, this.lado, this.lado);
  }
}


let canasta;
let pcomida = [];
let score = 0;
let gameover = false;

  
function setup() {
  createCanvas(400, 400);
  canasta = new Canasta();
}

function draw() {
  background(174, 220,255);
  canasta.mostrar();
  canasta.mover(mouseX);
  
  
  //If para que cada 25 frames haga una comida nueva, ya sea 50% prob. de fruta y 50% de pastel
    if (frameCount % 25 === 0) {
    let comida = random() < 0.5 ? new Fruta() : new Pastel();
    pcomida.push(comida);
  }
  
  for (let i = pcomida.length - 1; i >= 0; i--) {
    pcomida[i].mostrar();
    pcomida[i].caer();

    if (pcomida[i].colision(canasta)) {
      if (pcomida[i] instanceof Pastel) {
        gameover = true;
      } else {
        pcomida.splice(i, 1);
        score += 1;
      }
    } else if (pcomida[i].y > height) {
      pcomida.splice(i, 1);
    }
  }
  
  //texto de score
  fill(31, 0, 255);
  textSize(20);
  text(`Score: ${score}`, 10, 30);

  if (gameover) {
    fill(255, 0, 0);
    textSize(50);
    text("GAME OVER", width/2 - 150, height/2);
    noLoop();
  }
  
}
