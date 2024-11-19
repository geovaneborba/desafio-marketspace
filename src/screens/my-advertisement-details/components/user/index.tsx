import { AdvertisementDetailDTO } from '@/dtos/advertisement-details-dto'

import { api } from '@/lib/axios'

import * as S from './styles'

type UserProps = {
  advertisement?: AdvertisementDetailDTO
}

export function User({ advertisement }: UserProps) {
  const userAvatar = `${api.defaults.baseURL}/images/${advertisement?.user.avatar}`
  return (
    <S.Container>
      <S.Avatar
        source={{
          uri: userAvatar,
        }}
      />
      <S.Name>{advertisement?.user.name}</S.Name>
    </S.Container>
  )
}
