import { useState } from 'react';
import Input from './shared/ui/Input';
import MultipleSelect from './shared/ui/MultipleSelect';
import Badge from './shared/ui/Badge';

function App() {
  return (
    <div>
      <p>Welcome to Luna Edge technical interview</p>
      <Input />
      <MultipleSelect />
      <Badge>Badge</Badge>
      <Badge>Badge asasas asdasd asdasd</Badge>
    </div>
  );
}

export default App;
