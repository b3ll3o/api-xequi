import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PayloadDto } from '../dtos/payload.dto';
import { UsuarioAutenticavelDto } from '../dtos/usuario.autenticavel.dto';
import { UsuariosApplicationService } from '@/usuarios/applicattion/services/usuarios.application.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthApplicationService {
  constructor(
    private readonly _usuarioApplicationService: UsuariosApplicationService,
    private readonly _jwtService: JwtService,
  ) {}

  async login(usuarioAutenticavelDto: UsuarioAutenticavelDto): Promise<any> {
    const usuario = await this._usuarioApplicationService.autentica(
      usuarioAutenticavelDto,
    );
    if (!usuario) {
      throw new UnauthorizedException();
    }
    const payload = new PayloadDto(usuario);
    return {
      access_token: await this._jwtService.signAsync(
        Object.assign({}, payload),
      ),
    };
  }
}
