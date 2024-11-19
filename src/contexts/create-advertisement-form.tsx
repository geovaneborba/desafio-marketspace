import { zodResolver } from '@hookform/resolvers/zod'
import { createContext, ReactNode, useContext } from 'react'
import { useForm, UseFormReturn } from 'react-hook-form'
import { z } from 'zod'

const createAdvertisementFormSchema = z.object({
  productImages: z
    .array(
      z.object({
        name: z.string(),
        uri: z.string(),
        type: z.string(),
      }),
    )
    .min(1, 'Selecione pelo menos uma imagem.')
    .max(3, 'Selecione no máximo 3 imagens.')
    .optional(),
  name: z
    .string({ message: 'Campo obrigatório' })
    .min(1, 'Por favor, informe o título do produto'),
  description: z
    .string({ message: 'Campo obrigatório' })
    .min(1, 'Por favor, informe a descrição do produto'),
  isNew: z.boolean().default(false),
  price: z
    .number({ message: 'Campo obrigatório' })
    .positive('Por favor, informe um preço válido'),
  acceptTrade: z.boolean({ message: 'Campo obrigatório' }).default(false),
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

export type CreateAdvertisementFormData = z.infer<
  typeof createAdvertisementFormSchema
>

type CreateAdvertisementFormContextType = {
  methods: UseFormReturn<CreateAdvertisementFormData>
}

const CreateAdvertisementForm =
  createContext<CreateAdvertisementFormContextType>(
    {} as CreateAdvertisementFormContextType,
  )

type CreateAdvertisementFormProviderProps = {
  children: ReactNode
}

export function CreateAdvertisementFormProvider({
  children,
}: CreateAdvertisementFormProviderProps) {
  const methods = useForm<CreateAdvertisementFormData>({
    resolver: zodResolver(createAdvertisementFormSchema),
    defaultValues: {
      paymentMethods: [],
      productImages: [],
      isNew: false,
      price: 0,
    },
  })

  return (
    <CreateAdvertisementForm.Provider
      value={{
        methods,
      }}
    >
      {children}
    </CreateAdvertisementForm.Provider>
  )
}

export function useCreateAdvertisementForm() {
  const context = useContext(CreateAdvertisementForm)
  if (!context) {
    throw new Error(
      'useCreateAdvertisementForm must be used within CreateAdvertisementFormProvider',
    )
  }
  return context
}
