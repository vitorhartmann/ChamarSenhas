import React from 'react'
import { useNavigate } from 'react-router-dom'
import Container from '../../components/Container'
import Button from '../../components/Button'

const Home = () => {
  const navigate = useNavigate()

  const handleNavigate = path => {
    navigate(path)
  }

  return (
    <Container>
       
      <Button onClick={() => handleNavigate('/service')}>
        Chamar senhas
      </Button>
      <Button onClick={() => handleNavigate('/display')}>
        Mostrar senhas
      </Button>
    </Container>
  )
}

export default Home
