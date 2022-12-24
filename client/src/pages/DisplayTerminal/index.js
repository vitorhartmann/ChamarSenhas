import React, { useState, useEffect } from 'react'
import Container from '../../components/Container'
import io from 'socket.io-client'
import soundFile from './sound.mp3'
import * as S from './style'

const socket = io('192.168.16.100:8080', { transports: ['websocket'] })
socket.on('connect', () => console.log('[SOCKET] [DISPLAY] => New Connection'))

const DisplayTerminal = () => {
  const [password, setPassword] = useState()
  const [audio, setAudio] = useState(new Audio(soundFile))

  useEffect(() => {
    audio.play()
  }, [password])

  socket.on('password.tv.update', data => {
    setPassword(data)
  })

  return (
    <Container>
      <S.Wrapper>
        <S.Title>SENHA ATUAL</S.Title>
        <S.CurrentPassword>{password}</S.CurrentPassword>
      </S.Wrapper>
    </Container>
  )
}

export default DisplayTerminal
