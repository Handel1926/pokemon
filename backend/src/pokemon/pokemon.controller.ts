import { Controller, Get, Param, Query } from '@nestjs/common';
import { PokemonService } from './pokemon.service';
import { start } from 'repl';

@Controller('pokemon')
export class PokemonController {
  constructor(private readonly pokemonSerrvice: PokemonService) {}
  @Get()
  findAll(@Query('start') start: string, @Query('stop') stop: string) {
    return this.pokemonSerrvice.findAll(+start, +stop);
  }
}
