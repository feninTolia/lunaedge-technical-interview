import { Meta, StoryObj } from '@storybook/react';
import MultipleSelect from '../shared/ui/MultipleSelect';
import { withReactContext } from 'storybook-react-context';

const meta: Meta<typeof MultipleSelect> = {
  title: 'App/MultipleSelect',
  decorators: [withReactContext],
  component: MultipleSelect,
  tags: ['autodocs'],
};

export default meta;

export const DefaultMultipleSelect: StoryObj<typeof MultipleSelect> = {
  args: {
    label: 'Select poke team',
    helperText: 'Select 4 pokemons',
    availableOptions: [
      { name: 'one', url: 'url' },
      { name: 'two', url: 'url' },
    ],
    // filterSearchFn: () => {},
  },
};
