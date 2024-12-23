import { useNavigation } from '@react-navigation/native'
import { Controller, FormProvider, useForm } from 'react-hook-form'
import { useMutation } from '@tanstack/react-query'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import Toast from 'react-native-toast-message'
import validator from 'validator'

import * as S from '@/screens/sign-up/styles'

import { Header } from '@/screens/sign-up/components/header'
import { Avatar } from '@/screens/sign-up/components/avatar'
import { Footer } from '@/screens/sign-up/components/footer'
import { Input, InputPassword } from '@/components/input'
import { Button } from '@/components/button/button'
import { InputErrorMessage } from '@/components/input-error-message'

import { api } from '@/lib/axios'
import { AuthRoutesNavigatorProps } from '@/routes/auth.routes'
import {
  formatPhoneNumber,
  cleanPhoneNumber,
} from '@/utils/format-phone-number'
import { AxiosError } from 'axios'
import { Loading } from '@/components/loading'

const SignUpFormSchema = z
  .object({
    avatar: z.object(
      {
        name: z.string(),
        uri: z.string(),
        type: z.string(),
      },
      {
        message: 'Por favor, selecione uma imagem de perfil',
      },
    ),
    name: z
      .string({ message: 'Campo obrigatório' })
      .min(1, 'Por favor, insira um nome válido.'),
    email: z
      .string({ message: 'Campo obrigatório' })
      .email('Por favor, insira um email válido.'),
    tel: z
      .string({ message: 'Campo obrigatório' })
      .refine((value) => validator.isMobilePhone(value, 'pt-BR'), {
        message: 'Por favor, insira um número válido.',
      }),
    password: z
      .string({ message: 'Campo obrigatório' })
      .min(6, 'A senha deve ter pelo menos 6 caracteres.')
      .max(50, 'A senha não pode ter mais de 50 caracteres.'),
    password_confirmation: z
      .string({ message: 'Campo obrigatório' })
      .min(6, 'A senha deve ter pelo menos 6 caracteres.')
      .max(50, 'A senha não pode ter mais de 50 caracteres.'),
  })
  .refine(
    (values) => {
      return values.password === values.password_confirmation
    },
    {
      message: 'A confirmação da senha não coincide com a senha fornecida.',
      path: ['password_confirmation'],
    },
  )

export type SignUpFormData = z.infer<typeof SignUpFormSchema>

export default function SignUp() {
  const navigation = useNavigation<AuthRoutesNavigatorProps>()

  const methods = useForm<SignUpFormData>({
    resolver: zodResolver(SignUpFormSchema),
    defaultValues: {
      avatar: undefined,
      name: '',
      email: '',
      tel: '',
      password: '',
      password_confirmation: '',
    },
  })

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = methods

  const mutation = useMutation({
    mutationFn: async (data: SignUpFormData) => {
      const userForm = new FormData()

      const formattedPhoneNumber = `55${data.tel}`

      userForm.append('avatar', data.avatar as any)
      userForm.append('name', data.name)
      userForm.append('email', data.email)
      userForm.append('tel', formattedPhoneNumber)
      userForm.append('password', data.password)

      const response = await api.post('/users', userForm, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })

      return response.data
    },
    onSuccess(data) {
      Toast.show({
        type: 'success',
        text1: 'Sucesso',
        text2: 'Sua conta foi criada com sucesso!',
        onHide: () => navigation.navigate('signIn'),
        visibilityTime: 2000,
      })
    },
    onError(error) {
      Toast.show({
        type: 'error',
        text1: 'Erro',
        text2: error.message,
      })

      if (error instanceof AxiosError) {
        Toast.show({
          type: 'error',
          text1: 'Erro',
          text2:
            'Ocorreu um erro ao criar a conta. Por favor, tente novamente mais tarde.',
          visibilityTime: 2000,
        })
      }

      reset()
    },
  })

  const handleSignUp = async (data: SignUpFormData) => {
    await mutation.mutateAsync(data)
  }

  return (
    <S.Container>
      <Header />

      <FormProvider {...methods}>
        <S.Form>
          <>
            <Avatar />
            {errors.avatar && (
              <InputErrorMessage
                style={{ textAlign: 'center' }}
                errorMessage={errors.avatar.message}
              />
            )}
          </>

          <Controller
            name="name"
            control={control}
            render={({ field }) => {
              return (
                <>
                  <Input
                    isError={!!errors.name}
                    placeholder="Nome"
                    value={field.value}
                    onChangeText={field.onChange}
                  />
                  {errors.name && (
                    <InputErrorMessage errorMessage={errors.name.message} />
                  )}
                </>
              )
            }}
          />

          <Controller
            name="email"
            control={control}
            render={({ field }) => {
              return (
                <>
                  <Input
                    isError={!!errors.email}
                    keyboardType="email-address"
                    placeholder="E-mail"
                    autoCapitalize={'none'}
                    value={field.value}
                    onChangeText={field.onChange}
                  />

                  {errors.email && (
                    <InputErrorMessage errorMessage={errors.email.message} />
                  )}
                </>
              )
            }}
          />

          <Controller
            name="tel"
            control={control}
            render={({ field }) => {
              return (
                <>
                  <Input
                    isError={!!errors.tel}
                    keyboardType="phone-pad"
                    placeholder="Telefone"
                    onChangeText={(value) => {
                      const textNumberTel = cleanPhoneNumber(value)

                      field.onChange(textNumberTel)
                    }}
                    value={formatPhoneNumber(field.value)}
                  />

                  {errors.tel && (
                    <InputErrorMessage errorMessage={errors.tel.message} />
                  )}
                </>
              )
            }}
          />

          <Controller
            name="password"
            control={control}
            render={({ field }) => {
              return (
                <>
                  <InputPassword
                    isError={!!errors.password}
                    placeholder="Senha"
                    value={field.value}
                    onChangeText={field.onChange}
                  />

                  {errors.password && (
                    <InputErrorMessage errorMessage={errors.password.message} />
                  )}
                </>
              )
            }}
          />

          <Controller
            name="password_confirmation"
            control={control}
            render={({ field }) => {
              return (
                <>
                  <InputPassword
                    isError={!!errors.password_confirmation}
                    placeholder="Confirmar senha"
                    value={field.value}
                    onChangeText={field.onChange}
                  />
                  {errors.password_confirmation && (
                    <InputErrorMessage
                      errorMessage={errors.password_confirmation.message}
                    />
                  )}
                </>
              )
            }}
          />

          <Button
            variant="gray-1"
            style={{ marginTop: 16, opacity: mutation.isPending ? 0.5 : 1 }}
            onPress={handleSubmit(handleSignUp)}
            disabled={mutation.isPending}
          >
            {mutation.isPending ? (
              <Loading />
            ) : (
              <Button.Text variant="gray-7">Criar</Button.Text>
            )}
          </Button>
        </S.Form>
      </FormProvider>

      <Footer />
    </S.Container>
  )
}
