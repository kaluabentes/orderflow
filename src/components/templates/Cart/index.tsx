import Box from '~/components/atoms/Box'
import InnerHeader from '~/components/organisms/InnerHeader'
import OrderSummary from '~/components/organisms/OrderSummary'
import Cart from '~/containers/Cart'
import App from '../App'

function CartTemplate({ onConfirm, onEdit, onRemove, onBack }) {
  const cart = Cart.useContainer()

  return (
    <App title="Pedido">
      <Box alignItems="center" padding="20px 0">
        <OrderSummary
          items={cart.data}
          subtotal={12.9}
          deliveryTax={12.49}
          total={25.39}
          onConfirm={onConfirm}
          onEdit={onEdit}
          onRemove={onRemove}
        />
      </Box>
    </App>
  )
}

export default CartTemplate
