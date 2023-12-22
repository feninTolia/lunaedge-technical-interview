import { Meta, StoryObj } from '@storybook/react';
import Input from '../shared/ui/Inputs/Input';

const meta: Meta<typeof Input> = {
  title: 'App/Input',
  component: Input,
  tags: ['autodocs'],
};

export default meta;

export const DefaultInput: StoryObj<typeof Input> = {
  args: { label: 'Label' },
};
