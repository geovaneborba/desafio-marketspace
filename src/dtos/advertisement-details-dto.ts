export type AdvertisementDetailDTO = {
  accept_trade: boolean
  description: string
  id: string
  is_active: boolean
  is_new: boolean
  name: string
  payment_methods: { key: string; name: string }[]
  price: number
  product_images: { id: string; path: string }[]
  user_id: string
  user: {
    avatar: string
    name: string
    tel: string
  }
  updated_at: string
  created_at: string
}
