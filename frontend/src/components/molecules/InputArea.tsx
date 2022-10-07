import { Input, Group } from '@mantine/core'
import React, { FC } from "react"
import { PrimaryButton } from "../atoms/PrimaryButton"

type Props = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  buttonText: string;
}

export const InputArea: FC<Props> = (props) => {
  const { value, onChange, placeholder, onClick, buttonText } = props;

  return (
    <Group align="center" spacing="xs">
      <Input placeholder={placeholder} value={value} onChange={onChange} />
      <PrimaryButton onClick={onClick} disabled={!value}>
        {buttonText}
      </PrimaryButton>
    </Group>
  )
}
