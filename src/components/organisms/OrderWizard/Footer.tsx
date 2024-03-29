import React, { useEffect, useState } from 'react'
import Amount from '~/components/atoms/Amount'
import Button from '~/components/atoms/Button'
import Box from '~/components/atoms/Box'
import formatMoney from '~/utils/formatMoney'
import getString from '~/i18n/getString'
import useIsMobile from '~/utils/useIsMobile'

function Footer({ mode, totalPrice, quantity, onQuantityChange, onConfirm }) {
  const isMobile = useIsMobile()

  useEffect(() => {}, [])

  function handleQuantityChange(value) {
    onQuantityChange(value < 2 ? 1 : value)
  }

  return (
    <Box
      display="flex"
      position="fixed"
      bottom="0px"
      left="0px"
      width="100%"
      flexDirection="row"
      justifyContent="space-between"
      alignItems="center"
      background="white"
      padding="15px"
      zIndex="10"
    >
      <Box display="flex" flex="1 auto">
        <Amount
          isLeftDisabled={quantity === 1}
          onChange={handleQuantityChange}
          value={quantity}
        />
      </Box>
      <Button onClick={onConfirm} margin="0 0 0 10px" variant="primary">
        {mode === 'add' ? getString('add') : getString('confirm')}{' '}
        {totalPrice ? formatMoney(totalPrice) : ''}
      </Button>
    </Box>
  )
}

export default Footer
