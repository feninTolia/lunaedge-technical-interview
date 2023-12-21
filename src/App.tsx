import { useEffect, useState } from 'react';
import Input from './shared/ui/Inputs/Input';
import MultipleSelect from './shared/ui/MultipleSelect';
import { pokemonService } from './shared/service/pokemon.service';
import { EnvelopeIcon } from '@heroicons/react/24/solid';
import PrimaryButton from './shared/ui/buttons/PrimaryButton';

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
      <Input
        label="Label"
        helperText="This is a help text"
        placeholder="Type to filter"
        type="password"
        InputIcon={<EnvelopeIcon />}
        TopRightSlot={<span className="text-grayDark">Optional info</span>}
      />
      <PrimaryButton onClick={() => console.log('Open')}>
        Add modal
      </PrimaryButton>
    </div>
  );
}

export default App;
