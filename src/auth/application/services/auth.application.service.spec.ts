import { JwtService } from '@nestjs/jwt';
import { AuthApplicationService } from './auth.application.service';
import { UsuariosApplicationService } from '@/usuarios/applicattion/services/usuarios.application.service';
import { UsuarioAutenticavelDtoStub } from '@/auth/test/stubs/dtos/usuario.autenticavel.dto.stub';
import { UsuarioStub } from '@/usuarios/tests/stubs/domain/entities/usuario.entity.stub';

describe('AuthApplicationService', () => {
  let usuarioApplicationService: UsuariosApplicationService;
  let jwtService: JwtService;
  let service: AuthApplicationService;

  beforeEach(() => {
    usuarioApplicationService = new UsuariosApplicationService(null);
    jwtService = new JwtService();
    service = new AuthApplicationService(usuarioApplicationService, jwtService);
  });

  describe('login', () => {
    it('deve jogar um erro quando usuario não for autenticado', async () => {
      jest
        .spyOn(usuarioApplicationService, 'autentica')
        .mockImplementation(() => Promise.resolve(undefined));
      await expect(
        service.login(UsuarioAutenticavelDtoStub.novo()),
      ).rejects.toThrow();
    });

    it('deve retorna um access_token quando usuario estiver autenticado', async () => {
      jest
        .spyOn(usuarioApplicationService, 'autentica')
        .mockImplementation(() => Promise.resolve(UsuarioStub.cadastrado()));
      jest
        .spyOn(jwtService, 'signAsync')
        .mockImplementation(() => Promise.resolve(''));
      const token = await service.login(UsuarioAutenticavelDtoStub.novo());
      expect(token.access_token).toBe('');
    });
  });
});
