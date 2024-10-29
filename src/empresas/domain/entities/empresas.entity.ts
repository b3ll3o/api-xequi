import { EntidadeNotificavelRastreavel } from '@/shared/objetos/classes/entidades/entidade.notificavel.rastreavel';
import { Usuario } from '@/usuarios/domain/entities/usuario.entity';
import { Column, Entity, ManyToMany } from 'typeorm';

@Entity('empresas')
export class Empresa extends EntidadeNotificavelRastreavel<Empresa> {
  @Column()
  nome: string;
  @ManyToMany(() => Usuario)
  funcionarios: Usuario[];
}
