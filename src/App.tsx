import { useEffect } from 'react';
import Input from './shared/ui/Input';
import MultipleSelect from './shared/ui/MultipleSelect';
import Badge from './shared/ui/Badge';
import { pokemonService } from './shared/service/pokemon.service';

function App() {
  const fetchPoke = async () => {
    await pokemonService.fetchAllPokemons();
  };

  useEffect(() => {
    fetchPoke();
  }, []);

  return (
    <div>
      <p>Welcome to Luna Edge technical interview</p>
      <Input />
      <MultipleSelect />
      <Badge>Badge</Badge>
    </div>
  );
}

export default App;
