import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation } from '@tanstack/react-query'
import { Controller, useForm } from 'react-hook-form'
import { z } from 'zod'
import { AxiosError } from 'axios'
import Toast from 'react-native-toast-message'

import { useAuth } from '@/contexts/auth-context'

import { InputErrorMessage } from '@/components/input-error-message'
import { Input, InputPassword } from '@/components/input'
import { Button } from '@/components/button/button'
import { Header } from '@/screens/sign-in/components/header'
import { Footer } from '@/screens/sign-in/components/footer'
import { Loading } from '@/components/loading'

import * as S from '@/screens/sign-in/styles'

const SignInFormSchema = z.object({
  email: z
    .string({ message: 'Campo obrigatório' })
    .email('Por favor, insira um email válido.'),
  password: z
    .string({ message: 'Campo obrigatório' })
    .min(6, 'A senha deve ter pelo menos 6 caracteres.')
    .max(50, 'A senha não pode ter mais de 50 caracteres.'),
})

type SignInFormData = z.infer<typeof SignInFormSchema>

export default function SignIn() {
  const { signIn } = useAuth()

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<SignInFormData>({
    resolver: zodResolver(SignInFormSchema),
  })

  const mutation = useMutation({
    mutationFn: ({ email, password }: SignInFormData) =>
      signIn(email, password),
    onError: (error) => {
      Toast.show({
        type: 'error',
        text1: 'Erro',
        text2: error.message,
        visibilityTime: 2000,
      })

      if (error instanceof AxiosError) {
        Toast.show({
          type: 'error',
          text1: 'Erro',
          text2:
            'Ocorreu um erro ao fazer login. Por favor, tente novamente mais tarde.',
          visibilityTime: 2000,
        })
      }

      reset()
    },
  })

  const handleSignIn = async (data: SignInFormData) => {
    await mutation.mutateAsync(data)
  }

  return (
    <S.Container>
      <S.Content>
        <Header />

        <S.Form>
          <S.FormTitle>Acesse sua conta</S.FormTitle>

          <Controller
            name="email"
            control={control}
            render={({ field }) => {
              return (
                <>
                  <Input
                    autoCapitalize="none"
                    placeholder="E-mail"
                    keyboardType="email-address"
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
            name="password"
            control={control}
            render={({ field }) => {
              return (
                <>
                  <InputPassword
                    placeholder="Senha"
                    value={field.value}
                    onChangeText={field.onChange}
                    autoCapitalize={'none'}
                  />
                  {errors.password && (
                    <InputErrorMessage errorMessage={errors.password.message} />
                  )}
                </>
              )
            }}
          />

          <Button
            variant="blue-light"
            style={{ marginTop: 16, opacity: mutation.isPending ? 0.5 : 1 }}
            onPress={handleSubmit(handleSignIn)}
            disabled={mutation.isPending}
          >
            {mutation.isPending ? (
              <Loading variant="gray-7" />
            ) : (
              <Button.Text variant="gray-7">Entrar</Button.Text>
            )}
          </Button>
        </S.Form>
      </S.Content>

      <Footer />
    </S.Container>
  )
}
