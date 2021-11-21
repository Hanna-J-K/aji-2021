import { Category } from './CategoryType'

export interface Product {
   name: string
   description: string
   unitPrice: number
   unitWeight: number
   categories: Category[]
}
