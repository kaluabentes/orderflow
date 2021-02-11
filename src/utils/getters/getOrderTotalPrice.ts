function getOrderTotalPrice(cart, deliveryTax = undefined) {
  const total = cart.reduce(
    (prev, curr) => prev + curr.price * curr.quantity,
    0
  )

  if (deliveryTax) {
    return total + deliveryTax
  }

  return total
}

export default getOrderTotalPrice
