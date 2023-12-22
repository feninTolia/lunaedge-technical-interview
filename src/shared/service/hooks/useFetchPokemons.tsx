import { AxiosError } from 'axios';
import { pokemonService } from '../pokemon.service';

export const useFetchPokemons = () => {
  const fetchPokemons = async (): Promise<
    { name: string; url: string }[] | { message: string }
  > => {
    try {
      const res = await pokemonService.fetchAllPokemons();
      return res.results.map(
        (pokemon: { name: string; url: string }) => pokemon
      );
    } catch (error: any) {
      return { message: 'Fetch error' };
    }
  };

  const fetchPokemonByFullName = async (name: string) => {
    try {
      const res = await pokemonService.fetchPokeByFullName(name);
      return res;
    } catch (error: any) {
      console.log(error.message);
    }
  };

  const fetchPokemonByUrl = async (url: string) => {
    try {
      const res = await pokemonService.fetchPokeByUrl(url);
      return res;
    } catch (error: any) {
      console.log(error.message);
    }
  };

  return { fetchPokemons, fetchPokemonByFullName, fetchPokemonByUrl };
};
