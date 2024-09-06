import { EntidadeNotificavelRastreavel } from '@/shared/objetos/classes/entidades/entidade.notificavel.rastreavel';
import { CampoJaCadastradoErro } from '@/shared/objetos/classes/erros/campo.ja.cadastrado.erro';
import { Column, Entity } from 'typeorm';

@Entity('usuarios')
export class Usuario extends EntidadeNotificavelRastreavel<Usuario> {
  @Column()
  email: string;
  @Column()
  senha: string;

  podeSerCadastrado(usuario: Usuario): boolean {
    if (!usuario) {
      return true;
    }
    this._notificacaoErro.adicionaErros([new CampoJaCadastradoErro('email')]);
    return false;
  }
}
