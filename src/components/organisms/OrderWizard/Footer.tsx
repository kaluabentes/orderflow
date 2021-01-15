import React from 'react'
import Amount from '~/components/atoms/Amount'
import Button from '~/components/atoms/Button'
import Box from '~/components/atoms/Box'
import formatMoney from '~/utils/formatters/formatMoney'

function Footer({ totalPrice, quantity, onQuantityChange }) {
  function handleQuantityChange(value) {
    onQuantityChange(value < 2 ? 1 : value)
  }

  return (
    <Box
      position="fixed"
      bottom="0px"
      left="0px"
      width="100%"
      flexDirection="row"
      justifyContent="space-between"
      alignItems="center"
      background="white"
      padding="10px"
      zIndex="10"
    >
      <Box flex="1 auto">
        <Amount
          isLeftDisabled={quantity === 1}
          onChange={handleQuantityChange}
          value={quantity}
        />
      </Box>
      <Button margin="0 0 0 10px" variant="primary">
        Adicionar {totalPrice ? formatMoney(totalPrice) : ''}
      </Button>
    </Box>
  )
}

export default Footer
