import { Body, Controller, Post } from '@nestjs/common';
import { NovoUsuarioDto } from '../applicattion/dtos/novo.usuario.dto';
import { UsuarioCadastradoDto } from '../applicattion/dtos/usuario.cadastrado.dto';
import { UsuariosApplicationService } from '../applicattion/services/usuarios.application.service';
import { Public } from '@/auth/application/guards/public.guard';

@Controller('usuarios')
export class UsuariosController {
  constructor(private readonly service: UsuariosApplicationService) {}

  @Public()
  @Post()
  async cadastra(
    @Body() novoUsuarioDto: NovoUsuarioDto,
  ): Promise<UsuarioCadastradoDto> {
    return this.service.cadastra(novoUsuarioDto);
  }
}
