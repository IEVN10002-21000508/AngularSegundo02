export class Distancia {
  x1: number = 0;
  y1: number = 0;
  x2: number = 0;
  y2: number = 0;
  distancia: number = 0;

  calcularDistancia(): number {
    let ejeX = this.x2 - this.x1;
    let ejeY = this.y2 - this.y1;
    let distancia = Math.sqrt(Math.pow(ejeX, 2) + Math.pow(ejeY, 2));
    return distancia;
  }
}
