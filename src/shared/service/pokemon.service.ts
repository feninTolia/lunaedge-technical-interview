import axios, { AxiosResponse } from 'axios';

class PokemonService {
  private apiUrl = 'https://pokeapi.co/api/v2/pokemon/';

  private handleError(error: any): void {
    console.log('API Error:', error.message);
    throw error;
  }

  private async fetchData(url: string): Promise<any> {
    try {
      const response: AxiosResponse = await axios.get(url);
      return response.data;
    } catch (error) {
      this.handleError(error);
    }
  }

  fetchAllPokemons = async (limit = 20): Promise<any> => {
    const url = `${this.apiUrl}?limit=${limit}`;
    return this.fetchData(url);
  };

  fetchPokeByFullName = async (fullName: string): Promise<any> => {
    const url = `${this.apiUrl}${fullName}`;
    return this.fetchData(url);
  };
}

export const pokemonService = new PokemonService();
