import { UsuarioCadastradoDto } from '@/usuarios/applicattion/dtos/usuario.cadastrado.dto';
import { UsuarioStub } from '../../usuario.entity.stub';

export class UsuarioCadastradoDtoStub {
  static cadastrado(): UsuarioCadastradoDto {
    return new UsuarioCadastradoDto(UsuarioStub.cadastrado());
  }
}
