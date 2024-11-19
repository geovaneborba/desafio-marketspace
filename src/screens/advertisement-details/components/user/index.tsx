import { api } from '@/lib/axios'
import * as S from './styles'

type UserProps = {
  user?: {
    avatar: string
    name: string
  }
}

export function User({ user }: UserProps) {
  const userAvatar = `${api.defaults.baseURL}/images/${user?.avatar}`

  return (
    <S.User>
      <S.Avatar source={{ uri: userAvatar }} />
      <S.Name>{user?.name}</S.Name>
    </S.User>
  )
}
