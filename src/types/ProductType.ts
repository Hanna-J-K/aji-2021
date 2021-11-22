import { Category } from './CategoryType'

export interface Product {
   id: number
   name: string
   description: string
   unitPrice: number
   unitWeight: number
   categories: Category[]
}
