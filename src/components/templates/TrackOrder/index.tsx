import React from 'react'
import Box from '~/components/atoms/Box'
import Button from '~/components/atoms/Button'
import Heading from '~/components/atoms/Heading'
import Icon from '~/components/atoms/Icon'
import Paper from '~/components/atoms/Paper'
import Paragraph from '~/components/atoms/Paragraph'
import PageLoader from '~/components/organisms/PageLoader'
import getString from '~/i18n/getString'
import App from '../App'
import TimelineItem from './TimelineItem'

function TrackOrder({ order, isLoading }) {
  return (
    <>
      {isLoading && <PageLoader />}
      <App title="Acompanhe">
        <Box alignItems="center" padding="15px 0">
          <Paper maxWidth="400px">
            <Box
              as="header"
              flexDirection="row"
              alignItems="center"
              justifyContent="space-between"
              margin="0 0 40px 0"
            >
              <Heading fontSize="1.125rem">Rastrear pedido</Heading>
              <Paragraph fontWeight="600" fontSize="1.125rem">
                #{order.id.slice(0, 6)}
              </Paragraph>
            </Box>
            <Box margin="0 0 40px 0">
              <Box
                color="rgba(0, 0, 0, 0.3)"
                alignItems="center"
                margin="0 0 10px 0"
              >
                {getString('estimatedTime')}
              </Box>
              <Box
                justifyContent="center"
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
            <Button margin="0 0 10px 0">Ver pedido</Button>
            <Button variant="primary">Enviar mensagem</Button>
          </Paper>
        </Box>
      </App>
    </>
  )
}

export default TrackOrder
