export interface Order {
   id: string
   orderPlaceDate: string
   orderConfirmedDate: string | null | undefined
   username: string
   email: string
   phone: string
   status: string
   orderProducts: OrderedProduct[]
}

export interface OrderedProduct {
   product_id: number
   quantity: number
}
