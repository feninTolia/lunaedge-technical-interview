import { useEffect, useState } from 'react';
import Input from './shared/ui/Input';
import MultipleSelect from './shared/ui/MultipleSelect';
import Badge from './shared/ui/Badge';
import { pokemonService } from './shared/service/pokemon.service';

function App() {
  const [availableOptions, setAvailableOptions] = useState<string[]>([]);
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [filteredOption, setFilteredOption] = useState('');

  const fetchPokemons = async () => {
    return await pokemonService.fetchAllPokemons();
  };

  useEffect(() => {
    const fetchFirstPokemons = async () => {
      const res = await fetchPokemons();
      let pokemons: string[] = [];
      res.results.forEach((pokemon: { name: string }) => {
        pokemons.push(pokemon.name);
      });
      setAvailableOptions(pokemons);
    };

    fetchFirstPokemons();
  }, []);

  return (
    <div className="flex flex-col items-center mt-10 gap-5">
      <p>Welcome to Luna Edge technical interview</p>
      <MultipleSelect
        label="Label"
        helperText="This is a help text"
        availableOptions={availableOptions}
        selectedOptions={selectedOptions}
        setSelectedOptions={setSelectedOptions}
        filteredOption={filteredOption}
        setFilteredOption={setFilteredOption}
        isDropdownOpen={isDropdownOpen}
        setIsDropdownOpen={setIsDropdownOpen}
        TopRightSlot={<span className="text-grayDark">Optional</span>}
      />
      <Input />
    </div>
  );
}

export default App;
