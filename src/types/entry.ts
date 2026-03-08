export interface Entry {
  id: number
  name: string
  email: string
  phone: string
  createdAt: Date
}

export interface EntryForm {
  name: string
  email: string
  phone: string
}