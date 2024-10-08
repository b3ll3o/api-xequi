import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsuariosApplicationService } from './applicattion/services/usuarios.application.service';
import { UsuariosController } from './controller/usuarios.controller';
import { Usuario } from './domain/entities/usuario.entity';
import { UsuariosService } from './domain/services/usuarios.service';

@Module({
  imports: [TypeOrmModule.forFeature([Usuario])],
  providers: [UsuariosApplicationService, UsuariosService],
  controllers: [UsuariosController],
  exports: [UsuariosApplicationService],
})
export class UsuariosModule {}
