import { useContext, useEffect, useState } from 'react';
import PrimaryButton from './buttons/PrimaryButton';
import { XMarkIcon } from '@heroicons/react/24/solid';
import { SelectedOptionsContext } from '../context';
import { useFetchPokemons } from '../service/hooks/useFetchPokemons';
import { IFullPokemon, IModalDialog } from '../types';

const ModalDialog = ({
  title,
  setIsModalOpen,
  isOpen,
  ...attr
}: IModalDialog) => {
  const [pokemons, setPokemons] = useState<IFullPokemon[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const context = useContext(SelectedOptionsContext);
  const { fetchPokemonByUrl } = useFetchPokemons();

  if (!context) return <p>Something went wrong</p>;
  const { selectedOptions } = context;

  const handlePokemonsByUrl = async () => {
    try {
      setIsLoading(true);
      const pokemonPromises = selectedOptions.map(
        async (option) => await fetchPokemonByUrl(option.url)
      );

      const pokemonsArray = await Promise.all(pokemonPromises);
      setPokemons(pokemonsArray);
    } catch (error) {
      console.error('Error fetching Pokémon:', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    handlePokemonsByUrl();
  }, []);

  return (
    <>
      {isOpen && (
        <>
          <div
            className={`absolute top-20 right-1/2 translate-x-1/2 z-50 bg-white px-6 py-5  shadow-xl rounded-sm w-96 flex flex-col gap-5 `}
            {...attr}
          >
            <div className="flex justify-between">
              <h2 className="font-bold text-2xl">{title}</h2>
              <button onClick={() => setIsModalOpen(false)}>
                <XMarkIcon className="w-6 h-6" />
              </button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {isLoading && <p>Loading...</p>}
              {pokemons.map((pokemon) => (
                <img
                  className=" w-full"
                  key={pokemon.name}
                  alt={pokemon.name}
                  src={pokemon.sprites.front_default}
                />
              ))}
            </div>
            <div className=" self-end flex gap-4">
              <button
                onClick={() => setIsModalOpen(false)}
                className="font-medium"
              >
                Cancel
              </button>
              <PrimaryButton>Save</PrimaryButton>
            </div>
          </div>
          <div
            onClick={() => setIsModalOpen(false)}
            className=" absolute top-0 bottom-0 right-0  z-40 left-0 bg-blue brightness-50"
          />
        </>
      )}
    </>
  );
};

export default ModalDialog;
