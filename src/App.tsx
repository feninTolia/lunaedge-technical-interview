import { useContext, useState } from 'react';
import ModalDialog from './shared/ui/ModalDialog';
import RegistrationForm from './scenes/RegistrationForm';
import PokemonTeamSelector from './scenes/PokemonTeamSelector';
import { ModalContext } from './shared/context';

function App() {
  const [isRegistered, setIsRegistered] = useState(false);
  const context = useContext(ModalContext);

  return (
    <div className="flex flex-col items-center mt-10 gap-5">
      <h1 className="text-xl font-bold mb-5">
        Hello inside Luna Edge technical interview
      </h1>

      <RegistrationForm onSuccess={setIsRegistered} />

      {isRegistered && <PokemonTeamSelector />}

      {context?.isModalOpen && <ModalDialog title="Your Team" />}
    </div>
  );
}

export default App;
