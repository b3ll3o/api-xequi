import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Usuario } from './domain/entities/usuario.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Usuario])],
})
export class UsuariosModule {}
