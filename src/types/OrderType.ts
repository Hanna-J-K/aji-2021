export interface Order {
   id: string
   orderPlaceDate: Date
   orderConfirmedDate: Date
   username: string
   email: string
   phone: string
   status: string
   orderProducts: Array<string>
}

export interface OrderedProduct {
   product_id: number
   quantity: number
}
