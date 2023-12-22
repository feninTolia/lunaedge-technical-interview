import { Meta, StoryObj } from '@storybook/react';
import InputBase from '../shared/ui/Inputs/InputBase';

const meta: Meta<typeof InputBase> = {
  title: 'App/InputBase',
  component: InputBase,
  tags: ['autodocs'],
};

export default meta;

export const DefaultInputBase: StoryObj<typeof InputBase> = {
  args: { width: '300px' },
};
