import { Injectable } from '@nestjs/common';
import { PokemonClient } from 'pokenode-ts';

const P = new PokemonClient();

@Injectable()
export class PokemonService {
  async findAll(start: number, stop: number) {
    const allPoke = await P.listPokemons(start, stop).then(
      (data) => data.results,
    );
    return allPoke;
  }
}
