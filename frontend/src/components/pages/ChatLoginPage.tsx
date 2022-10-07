import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { NameInputArea } from '../organisms/NameInputArea'

const ChatLoginPage = () => {
  // 名前
  const [name, setName] = useState("");
  const navigate = useNavigate()

  // 名前エリアの文字が変更された時の処理
  const onChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  }

  const onClickJoin = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    navigate("/chat_room", { state: { name: name } })
  }

  return (
    <NameInputArea onChange={onChangeName} onClick={onClickJoin} value={name} />
  )
}

export default ChatLoginPage
