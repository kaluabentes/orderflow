import React, { useEffect, useState } from 'react'

import Box from '~/components/atoms/Box'
import Button from '~/components/atoms/Button'
import Heading from '~/components/atoms/Heading'
import Input from '~/components/atoms/Input'
import Paper from '~/components/atoms/Paper'
import Paragraph from '~/components/atoms/Paragraph'
import formatPhone from '~/utils/formatPhone'
import useIsMobile from '~/utils/useIsMobile'
import App from '../App'

const INITIAL_STATE = {
  mode: 'view',
  data: {
    name: '',
    phone: ''
  }
}

function Profile({ mode = 'view', user, isLoading, onSaveChanges }) {
  const isMobile = useIsMobile()
  const [state, setState] = useState(INITIAL_STATE)

  useEffect(() => {
    if (user.name) {
      setState(prev => ({ ...prev, data: user }))
    }

    if (mode) {
      setState(prev => ({ ...prev, mode }))
    }
  }, [user, mode])

  function handleInputChange(event) {
    setState(prev => ({
      ...prev,
      data: {
        ...prev.data,
        [event.target.name]: event.target.value
      }
    }))
  }

  return (
    <App title="Perfil">
      <Box
        margin={isMobile ? '15px 0 20px 0' : '40px 0 20px 0'}
        display="flex"
        width="100%"
        alignItems="center"
      >
        <Paper maxWidth="500px">
          <Heading
            margin="0 0 30px 0"
            as="h2"
            fontWeight="500"
            fontSize="1.375rem"
          >
            Perfil
          </Heading>
          {state.mode === 'view' ? (
            <>
              <Paragraph fontWeight="600">Nome</Paragraph>
              <Paragraph margin="0 0 20px 0">{user.name}</Paragraph>
              <Paragraph fontWeight="600">Celular</Paragraph>
              <Paragraph margin="0 0 30px 0">
                {user.phone && formatPhone(user.phone)}
              </Paragraph>
            </>
          ) : (
            <>
              <Input
                name="name"
                onChange={handleInputChange}
                margin="0 0 20px 0"
                label="Nome"
                value={state.data.name}
              />
              <Input
                name="phone"
                onChange={handleInputChange}
                margin="0 0 30px 0"
                label="Celular"
                value={state.data.phone}
              />
            </>
          )}
          {state.mode === 'view' ? (
            <Button
              onClick={() => setState(prev => ({ ...prev, mode: 'edit' }))}
            >
              Editar informações
            </Button>
          ) : (
            <>
              <Button
                isLoading={isLoading}
                onClick={() => {
                  onSaveChanges(user.id, state.data)
                }}
                margin="0 0 15px 0"
                variant="primary"
              >
                Salvar mudanças
              </Button>
              <Button
                onClick={() => setState(prev => ({ ...prev, mode: 'view' }))}
              >
                Cancelar
              </Button>
            </>
          )}
        </Paper>
      </Box>
    </App>
  )
}

export default Profile
