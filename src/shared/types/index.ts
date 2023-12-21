import { PropsWithChildren } from 'react';

export interface IBadgeProps extends PropsWithChildren {
  onClose?: () => void;
}
