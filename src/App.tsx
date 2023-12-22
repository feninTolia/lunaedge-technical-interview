import { useState } from 'react';
import PrimaryButton from './shared/ui/buttons/PrimaryButton';
import ModalDialog from './shared/ui/ModalDialog';
import RegistrationForm from './scenes/RegistrationForm';
import PokemonTeamSelector from './scenes/PokemonTeamSelector';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="flex flex-col items-center mt-10 gap-5">
      <h1 className="text-xl font-bold mb-5">
        Hello inside Luna Edge technical interview
      </h1>

      <RegistrationForm />
      <PokemonTeamSelector />

      <PrimaryButton onClick={() => setIsModalOpen(true)}>
        Add modal
      </PrimaryButton>
      <ModalDialog
        title="Modal title"
        isOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
      />
    </div>
  );
}

export default App;
