import { zodResolver } from '@hookform/resolvers/zod'
import { createContext, ReactNode, useContext } from 'react'
import { useForm, UseFormReturn } from 'react-hook-form'
import { z } from 'zod'

const advertisementFormSchema = z.object({
  productImagesToRemove: z.array(z.string()).default([]),
  productImages: z
    .array(
      z.object({
        name: z.string(),
        type: z.string(),
        uri: z.string(),
      }),
    )
    .default([])
    .refine(
      (value) => value.length > 0,
      'Por favor, selecione pelo menos uma imagem',
    ),
  name: z
    .string({ message: 'Campo obrigatório' })
    .min(1, 'Por favor, informe o título do produto'),
  description: z
    .string({ message: 'Campo obrigatório' })
    .min(1, 'Por favor, informe a descrição do produto'),
  isNew: z.boolean(),
  price: z
    .number({ message: 'Campo obrigatório' })
    .positive('Por favor, informe um preço válido'),
  acceptTrade: z.boolean({ message: 'Campo obrigatório' }),
  paymentMethods: z
    .array(
      z.object({
        key: z.string(),
        name: z.string(),
      }),
    )
    .refine((value) => value.length > 0, {
      message: 'Selecione pelo menos um método de pagamento',
    }),
})

export type AdvertisementFormData = z.infer<typeof advertisementFormSchema>

type AdvertisementFormContextType = {
  methods: UseFormReturn<AdvertisementFormData>
}

const AdvertisementForm = createContext<AdvertisementFormContextType>(
  {} as AdvertisementFormContextType,
)

type AdvertisementFormProviderProps = {
  children: ReactNode
}

export function AdvertisementFormProvider({
  children,
}: AdvertisementFormProviderProps) {
  const methods = useForm<AdvertisementFormData>({
    resolver: zodResolver(advertisementFormSchema),
  })

  return (
    <AdvertisementForm.Provider
      value={{
        methods,
      }}
    >
      {children}
    </AdvertisementForm.Provider>
  )
}

export function useAdvertisementForm() {
  const context = useContext(AdvertisementForm)
  if (!context) {
    throw new Error(
      'useAdvertisementForm must be used within AdvertisementFormProvider',
    )
  }
  return context
}
