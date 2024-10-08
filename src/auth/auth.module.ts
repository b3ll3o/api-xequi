import { Module } from '@nestjs/common';
import { AuthController } from './controllers/auth.controller';
import { UsuariosModule } from '@/usuarios/usuarios.module';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './application/contantes/constantes';
import { AuthApplicationService } from './application/services/auth.application.service';

@Module({
  imports: [
    UsuariosModule,
    JwtModule.register({
      global: true,
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '7d' },
    }),
  ],
  providers: [AuthApplicationService],
  controllers: [AuthController],
  exports: [AuthApplicationService],
})
export class AuthModule {}
