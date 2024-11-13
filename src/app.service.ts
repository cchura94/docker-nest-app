import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getProductos(): any[]{
    return [
      { nombre: "TECLADO", precio: 286.98, cantidad: 5, imagen: "tec.jpeg" },
      { nombre: "MONITOR", precio: 2286.98, cantidad: 3, imagen: "mon.jpeg" },
      { nombre: "MOUSE", precio: 86.98, cantidad: 25, imagen: "mouse.jpeg" },
      { nombre: "MICROFONO", precio: 686.98, cantidad: 15, imagen: "mic.jpeg" }
    ]
  }
}
