import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get("/servicios")
  nuestrosServicios(): string{
    return "Hola Mundo desde Servicios";
  }

  @Get("/productos")
  productos(): any[]{
    return this.appService.getProductos()
  }

  @Get("/nosotros")
  funNosotros(): any{
    return {
      mensaje: "Acerca de Nosotros"
    };
  }
}
