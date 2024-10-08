import { BadRequestCustomException } from '@/shared/exceptions/bad.request.custom.exception';
import { Usuario } from '@/usuarios/domain/entities/usuario.entity';
import { UsuariosService } from '@/usuarios/domain/services/usuarios.service';
import { Injectable } from '@nestjs/common';
import { NovoUsuarioDto } from '../dtos/novo.usuario.dto';
import { UsuarioCadastradoDto } from '../dtos/usuario.cadastrado.dto';
import { UsuarioAutenticavelDto } from '@/auth/application/dtos/usuario.autenticavel.dto';

@Injectable()
export class UsuariosApplicationService {
  constructor(private readonly service: UsuariosService) {}

  async cadastra(
    novoUsuarioDto: NovoUsuarioDto,
  ): Promise<UsuarioCadastradoDto> {
    const { email, senha } = novoUsuarioDto;
    const usuario = await this.service.cadastra(new Usuario({ email, senha }));
    if (usuario.invalido()) {
      throw new BadRequestCustomException(usuario.erros);
    }
    return new UsuarioCadastradoDto(usuario);
  }

  async autentica(
    usuarioAutenticavel: UsuarioAutenticavelDto,
  ): Promise<UsuarioCadastradoDto | undefined> {
    const { email, senha } = usuarioAutenticavel;
    const usuario = await this.service.autentica(new Usuario({ email, senha }));
    if (usuario.invalido()) {
      return undefined;
    }
    return new UsuarioCadastradoDto(usuario);
  }
}
