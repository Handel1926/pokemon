import { Injectable } from '@nestjs/common';
import { PokemonClient } from 'pokenode-ts';

const P = new PokemonClient();

@Injectable()
export class PokemonService {
  async findAll(start: number, stop: number) {
    const allPoke = await P.listPokemonSpecies(start, stop).then(
      (data) => data.results,
    );
    return allPoke;
  }
  async findOne(id: number) {
    const pokemon = await P.getPokemonById(id).then((data) => data);
    return pokemon;
  }
}
