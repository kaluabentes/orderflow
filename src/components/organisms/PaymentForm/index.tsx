import Button from '~/components/atoms/Button'
import Box from '~/components/atoms/Box'
import Heading from '~/components/atoms/Heading'
import useIsMobile from '~/utils/useIsMobile'
import getString from '~/i18n/getString'
import Paragraph from '~/components/atoms/Paragraph'
import formatMoney from '~/utils/formatMoney'

function PaymentForm({ selectedMethodId, change, methods, onMethodClick }) {
  const isMobile = useIsMobile()

  return (
    <Box
      padding={isMobile ? '20px' : '30px'}
      background="white"
      width="100%"
      borderRadius="10px"
    >
      <Heading as="h3" fontWeight="500" fontSize="1.375rem" margin="0 0 15px 0">
        Forma de pagamento
      </Heading>
      <Paragraph margin="0 0 20px 0" variant="muted">
        Selecione um dos métodos abaixo para finalizar seu pedido
      </Paragraph>
      <Box
        display="grid"
        gridTemplateColumns="repeat(1, 1fr)"
        gridGap="15px"
        margin="0 0 20px 0"
      >
        {methods.map(m => (
          <Button
            isActive={selectedMethodId === m.id}
            onClick={() => onMethodClick(m)}
            key={m.id}
          >
            {m.name}{' '}
            {change > 0 && m.isMoney && (
              <Box
                margin="5px 0 0 0"
                display="block"
                fontWeight="600"
              >{`Troco para ${formatMoney(Number(change))}`}</Box>
            )}
          </Button>
        ))}
      </Box>
    </Box>
  )
}

export default PaymentForm
