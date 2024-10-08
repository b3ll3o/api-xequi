import { UsuarioCadastradoDto } from '@/usuarios/applicattion/dtos/usuario.cadastrado.dto';
import { UsuarioCadastradoDtoStub } from '@/usuarios/tests/stubs/domain/entities/application/dtos/usuario.cadastrado.dto.stub';

export class PayloadDtoStub {
  static novo(
    usuario: UsuarioCadastradoDto = UsuarioCadastradoDtoStub.cadastrado(),
  ): { sub: number; id: number; email: string } {
    const { id, email } = usuario;
    return {
      sub: id,
      id,
      email,
    };
  }
}
