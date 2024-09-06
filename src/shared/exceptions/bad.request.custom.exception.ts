import { BadRequestException } from '@nestjs/common';
import { ErroDto } from '../objetos/classes/dtos/erro.dto';
import { Erro } from '../objetos/classes/erro';

export class BadRequestCustomException extends BadRequestException {
  constructor(erros: Erro[]) {
    super({ erros: [...erros.map((e) => new ErroDto(e))] });
  }
}
