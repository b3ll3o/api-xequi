import { Body, Controller, Post } from '@nestjs/common';
import { NovoUsuarioDto } from '../applicattion/dtos/novo.usuario.dto';
import { UsuarioCadastradoDto } from '../applicattion/dtos/usuario.cadastrado.dto';
import { UsuariosApplicationService } from '../applicattion/services/usuarios.application.service';

@Controller('usuarios')
export class UsuariosController {
  constructor(private readonly service: UsuariosApplicationService) {}

  @Post()
  async cadastra(
    @Body() novoUsuarioDto: NovoUsuarioDto,
  ): Promise<UsuarioCadastradoDto> {
    return this.service.cadastra(novoUsuarioDto);
  }
}
