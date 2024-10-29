import { EntidadeNotificavelRastreavel } from '@/shared/objetos/classes/entidades/entidade.notificavel.rastreavel';
import { Column, Entity } from 'typeorm';

@Entity('cargos')
export class Cargo extends EntidadeNotificavelRastreavel<Cargo> {
  @Column()
  nome: string;
}
