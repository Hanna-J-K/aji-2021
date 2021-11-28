export interface Order {
   id: string
   orderPlaceDate: Date
   username: string
   email: string
   phone: string
   status: string
   orderProducts: Array<string>
}
