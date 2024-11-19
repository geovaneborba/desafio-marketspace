import { useSearchForm } from '@/contexts/search-form'
import * as S from './styles'

export function Switch() {
  const { searchFormData, setSearchFormData } = useSearchForm()

  return (
    <S.Switch
      value={searchFormData.acceptTrade}
      onValueChange={(value) => {
        setSearchFormData((prevState) => ({
          ...prevState,
          acceptTrade: value,
        }))
      }}
    />
  )
}
