import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  Request,
} from '@nestjs/common';
import { AuthApplicationService } from '../application/services/auth.application.service';
import { Public } from '../application/guards/public.guard';
import { UsuarioAutenticavelDto } from '../application/dtos/usuario.autenticavel.dto';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly _authApplicationService: AuthApplicationService,
  ) {}

  @Public()
  @HttpCode(HttpStatus.OK)
  @Post('login')
  signIn(@Body() usuarioAutenticavelDto: UsuarioAutenticavelDto) {
    return this._authApplicationService.login(usuarioAutenticavelDto);
  }

  @Get('profile')
  getProfile(@Request() req) {
    return req.usuarioLogado;
  }
}
