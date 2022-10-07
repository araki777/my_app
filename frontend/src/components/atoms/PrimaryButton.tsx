import { Button } from '@mantine/core';
import React, { memo, ReactNode, FC } from 'react';

type Props = {
  children: ReactNode;
  onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  disabled?: boolean;
  loading?: boolean;
  color?: string;
};

export const PrimaryButton: FC<Props> = memo((props) => {
  const { children, onClick, disabled = false, loading = false, color = "orange" } = props
  return (
    <Button
      ml={2}
      color={color}
      onClick={onClick}
      loading={loading}
      disabled={disabled}
      styles={(_theme) => ({
        root: {
          '&:hover': {
            opacity: "0.7"
          }
        }
      })}>{children}</Button>
  )
})
