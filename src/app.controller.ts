import { Controller, Get } from '@nestjs/common';
import { Res } from '@nestjs/common/decorators';
import { ApiExcludeEndpoint } from '@nestjs/swagger';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor() {}
  
  @ApiExcludeEndpoint()
  @Get()
  async redirect(@Res() resposta: any){
  return resposta.redirect('/swagger')
  }
}
