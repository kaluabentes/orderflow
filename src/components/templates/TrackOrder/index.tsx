import React from 'react'
import Box from '~/components/atoms/Box'
import Button from '~/components/atoms/Button'
import Heading from '~/components/atoms/Heading'
import Icon from '~/components/atoms/Icon'
import Paper from '~/components/atoms/Paper'
import Paragraph from '~/components/atoms/Paragraph'
import { Flasher } from '~/components/organisms/OrderAlert/styles'
import PageLoader from '~/components/organisms/PageLoader'
import getString from '~/i18n/getString'
import useIsMobile from '~/utils/useIsMobile'
import App from '../App'
import TimelineItem from './TimelineItem'

function TrackOrder({ order, isLoading, onBack, onOrderClick }) {
  const isMobile = useIsMobile()

  return (
    <>
      {isLoading ? (
        <PageLoader />
      ) : (
        <App title="Acompanhe" onBack={onBack}>
          <Box alignItems="center" padding={isMobile ? '15px 0' : '60px 0'}>
            <Paper maxWidth="400px">
              <Box
                as="header"
                flexDirection="row"
                alignItems="center"
                justifyContent="space-between"
                margin="0 0 20px 0"
              >
                <Heading
                  display="flex"
                  alignItems="center"
                  flexDirection="row"
                  as="h3"
                  fontWeight="500"
                  fontSize="1.375rem"
                >
                  <Flasher height="10px" margin="0 7px 0 0" /> Rastrear pedido
                </Heading>
                <Paragraph
                  textTransform="uppercase"
                  fontWeight="600"
                  fontSize="1.375rem"
                >
                  #{order.id.slice(0, 6)}
                </Paragraph>
              </Box>
              <Box margin="0 0 40px 0">
                <Box
                  color="rgba(0, 0, 0, 0.3)"
                  alignItems="left"
                  margin="0 0 10px 0"
                >
                  {getString('estimatedTime')}
                </Box>
                <Box
                  justifyContent="flex-start"
                  flexDirection="row"
                  alignItems="center"
                >
                  <Icon margin="0 5px 0 0" fontWeight="bold" name="schedule" />
                  <Box fontSize="20px" fontWeight="600">
                    {order.estimatedTime}
                  </Box>
                </Box>
              </Box>
              <Box position="relative">
                {order.activities.length &&
                  order.activities.map(activity => (
                    <TimelineItem
                      key={activity.id}
                      isActive={activity.isActive}
                      status={activity.status}
                      createdAt={activity.createdAt}
                    />
                  ))}
                <Box
                  position="absolute"
                  height="80%"
                  width="2px"
                  background="transparent"
                  left="9px"
                  top="0"
                  zIndex="1"
                  borderLeft={`2px dashed rgba(0, 0, 0, 0.05)`}
                />
              </Box>
              <Button onClick={onOrderClick} margin="0 0 10px 0">
                Ver pedido
              </Button>
              <Button
                variant="primary"
                href="https://api.whatsapp.com/send?phone=5548996288801&text=Em%20que%20podemos%20ajudar%3F"
                target="_blank"
              >
                Enviar mensagem
              </Button>
            </Paper>
          </Box>
        </App>
      )}
    </>
  )
}

export default TrackOrder
