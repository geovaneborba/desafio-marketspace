import { AdvertisementListDTO } from '@/dtos/advertisement-list-dto'
import { api } from '@/lib/axios'
import {
  useMutation,
  UseMutationResult,
  useQueryClient,
} from '@tanstack/react-query'
import {
  createContext,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from 'react'
import { z } from 'zod'

const searchFormSchema = z.object({
  search: z.string().optional(),
  isNew: z.enum(['new', 'used']).optional(),
  acceptTrade: z.boolean().optional(),
  paymentMethods: z
    .array(
      z.object({
        key: z.string(),
        name: z.string(),
      }),
    )
    .optional()
    .default([]),
})

export type SearchFormData = z.infer<typeof searchFormSchema>

type SearchFormContextData = {
  searchFormData: SearchFormData
  searchMutation: UseMutationResult<
    AdvertisementListDTO[],
    Error,
    SearchFormData,
    unknown
  >
  fetchFilteredProducts: () => Promise<void>
  setSearchFormData: (value: SetStateAction<SearchFormData>) => void
  handleClearFilters: () => void
}

const SearchFormContext = createContext<SearchFormContextData>(
  {} as SearchFormContextData,
)

type SearchFormContextProviderProps = {
  children: ReactNode
}
export function SearchFormProvider({
  children,
}: SearchFormContextProviderProps) {
  const [searchFormData, setSearchFormData] = useState<SearchFormData>({
    search: undefined,
    isNew: undefined,
    acceptTrade: undefined,
    paymentMethods: [],
  })

  const queryClient = useQueryClient()

  const searchMutation = useMutation({
    mutationFn: async (data: SearchFormData) => {
      const { isNew, paymentMethods, acceptTrade, search } = data

      const response = await api.get<AdvertisementListDTO[]>('/products', {
        params: {
          query: search,
          is_new: isNew === 'new' ? true : false,
          accept_trade: acceptTrade,
          payment_methods: paymentMethods?.map((method) => method.key),
        },
      })

      return response.data
    },
    onSuccess: (data) => {
      queryClient.setQueryData(['advertisements'], data)
    },
  })

  const handleClearFilters = () => {
    setSearchFormData({
      search: undefined,
      isNew: undefined,
      acceptTrade: undefined,
      paymentMethods: [],
    })
  }

  const fetchFilteredProducts = async () => {
    const result = await searchFormSchema.safeParseAsync(searchFormData)

    console.log(result.data)

    if (result.success) {
      await searchMutation.mutateAsync(result.data)
    }
  }

  return (
    <SearchFormContext.Provider
      value={{
        searchFormData,
        searchMutation,
        setSearchFormData,
        handleClearFilters,
        fetchFilteredProducts,
      }}
    >
      {children}
    </SearchFormContext.Provider>
  )
}

export function useSearchForm() {
  const context = useContext(SearchFormContext)

  if (!context) {
    throw new Error('useSearchForm must be used within a SearchFormProvider')
  }

  return context
}
