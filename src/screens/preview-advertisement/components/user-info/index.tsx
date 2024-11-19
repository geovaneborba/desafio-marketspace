import * as S from './styles'
type UserInfoProps = {
  avatarUrl: string
  name: string
}
export function UserInfo({
  name,
  avatarUrl = 'https://github.com/geovaneborba.png',
}: UserInfoProps) {
  return (
    <S.Container>
      <S.Avatar source={{ uri: avatarUrl }} />
      <S.Name>{name}</S.Name>
    </S.Container>
  )
}
