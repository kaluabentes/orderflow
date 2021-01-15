export interface OrderItem {
  id: string | number
  title: string
  options: string
  price: number
  quantity: number
}

export interface Order {
  items: OrderItem[]
  subtotal: number
  deliveryTax: number
  total: number
}
