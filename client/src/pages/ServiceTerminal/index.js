import React, { useState } from 'react'
import Container from '../../components/Container/index'
import Button from '../../components/Button/index'
import io from 'socket.io-client'
import { v4 as uuid } from 'uuid'

import * as S from './styles'

const socket = io('192.168.16.100:8080', { transports: ['websocket'] })
socket.on('connect', () => console.log('[SOCKET] [SERVICE] => New Connection'))

const ServiceTerminal = () => {
  const id = uuid()

  const [password, setPassword] = useState()

  socket.on(`password.tv.${id}`, data => {
    setPassword(data)
  })

  const handleNextPassword = () => {
    socket.emit('password.next', id)
  }

  return (
    <Container>
      <S.Wrapper>
      <audio id="audio" src="https://assets.mixkit.co/sfx/preview/mixkit-bell-notification-933.mp3"></audio>
        <h1>Senha da Vez</h1>
        <S.CurrentPassword>{password}</S.CurrentPassword>
        <p>Clique abaixo para chamar o próximo</p>
        <Button onClick={() => {
  document.getElementById('audio').play();
  handleNextPassword();
}}>
  Proxima Senha
</Button>
<br></br>
<Button onClick={() => {
  document.getElementById('audio').play();
}}>
  Chamar novamente
</Button>


      </S.Wrapper>
    </Container>
  )
}

export default ServiceTerminal
