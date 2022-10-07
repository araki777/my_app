import React, { FC } from "react"
import { InputArea } from "../molecules/InputArea"

type Props = {
  text: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export const MessageInputArea: FC<Props> = (props) => {
  const { text, onChange, onClick } = props;

  return (
    <InputArea value={text} onChange={onChange} onClick={onClick} placeholder="メッセージを入力してください" buttonText="送る" />
  )
}
