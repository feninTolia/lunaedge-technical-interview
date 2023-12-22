import { useContext, useEffect, useState } from 'react';
import MultipleSelect from '../shared/ui/MultipleSelect';
import { useFetchPokemons } from '../shared/service/hooks/useFetchPokemons';
import { ISelectedOption } from '../shared/types';
import PrimaryButton from '../shared/ui/buttons/PrimaryButton';
import { ModalContext, SelectedOptionsContext } from '../shared/context';

const PokemonTeamSelector = () => {
  const [availableOptions, setAvailableOptions] = useState<ISelectedOption[]>(
    []
  );
  const { fetchPokemons, fetchPokemonByFullName } = useFetchPokemons();
  const contextModal = useContext(ModalContext);
  const contextOptions = useContext(SelectedOptionsContext);
  if (!contextOptions) return <p>Error</p>;
  const { selectedOptions } = contextOptions;

  const fetchFirstPokemons = async () => {
    const res = await fetchPokemons();
    if ('message' in res) return;
    const pokemonsNames = res.map((pokemon) => ({
      name: pokemon.name,
      url: pokemon.url,
    }));
    setAvailableOptions(pokemonsNames);
  };

  const handleFetchPokemonByName = async (name: string) => {
    if (!name) return;
    const res = await fetchPokemonByFullName(name);
    if (res) {
      updateAvailableOptions(res);
    }
  };

  const updateAvailableOptions = (newPokemon: { name: string; id: string }) => {
    setAvailableOptions((prev) => {
      if (prev.some((item) => item.name === newPokemon.name)) {
        return [...prev];
      }

      return [
        {
          name: newPokemon.name,
          url: `https://pokeapi.co/api/v2/pokemon/${newPokemon.id}`,
        },
        ...prev,
      ];
    });
  };

  useEffect(() => {
    fetchFirstPokemons();
  }, []);

  return (
    <>
      <MultipleSelect
        label="Select poke team"
        helperText="Select 4 pokemons"
        availableOptions={availableOptions}
        TopRightSlot={<span className="text-grayDark">Optional</span>}
        filterSearchFn={handleFetchPokemonByName}
      />
      {selectedOptions.length === 4 && (
        <PrimaryButton onClick={() => contextModal?.setIsModalOpen(true)}>
          Open modal
        </PrimaryButton>
      )}
    </>
  );
};

export default PokemonTeamSelector;
