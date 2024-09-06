import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { Repository } from 'typeorm';
import { Usuario } from '../entities/usuario.entity';

@Injectable()
export class UsuariosService {
  constructor(private readonly repository: Repository<Usuario>) {}

  async cadastraNovoUsuario(novoUsuario: Usuario): Promise<Usuario> {
    const usuarioEncontrado = await this._buscaUsuarioPorEmail(
      novoUsuario.email,
    );
    if (!novoUsuario.podeSerCadastrado(usuarioEncontrado)) {
      return this._formataCampos(novoUsuario);
    }
    novoUsuario.senha = await this._hashSenha(novoUsuario.senha);
    const usuario = await this.repository.save(novoUsuario);
    return this._formataCampos(usuario);
  }

  private _formataCampos(usuario: Usuario): Usuario {
    usuario.senha = undefined;
    return usuario;
  }

  private async _buscaUsuarioPorEmail(email: string): Promise<Usuario | null> {
    return this.repository.findOne({ where: { email } });
  }

  private async _hashSenha(senha: string) {
    const salt = await bcrypt.genSalt();
    return await bcrypt.hash(senha, salt);
  }
}
