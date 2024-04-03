import { HTMLAttributes } from 'react'
import { cn } from '~/lib/utils'
import { Input } from './ui/input'
import { GoogleLogin } from '@react-oauth/google'
import { Button } from './ui/button'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from './ui/form'
import { EnvelopeClosedIcon, LockClosedIcon, PersonIcon } from '@radix-ui/react-icons'
import { toast } from 'sonner'
import { useMutation } from '@tanstack/react-query'
import useSignUp from '~/hooks/useSignUp'
import { useNavigate } from 'react-router-dom'
interface UserAuthFormProps extends HTMLAttributes<HTMLDivElement> {}
const UserAuthForm = ({ className, ...props }: UserAuthFormProps) => {
  const navigate = useNavigate()
  const signUpFn = useSignUp()
  //@Validate form
  const formSchema = z.object({
    full_name: z.string().min(6, {
      message: 'Username must be at least 6 characters.'
    }),
    email: z.string().min(1, { message: 'This field has to be filled.' }).email('This is not a valid email.'),
    password: z.string().min(8, {
      message: 'Password must be at least 6 characters.'
    })
  })

  //@Defind form
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      full_name: '',
      email: '',
      password: ''
    }
  })

  const signupMn = useMutation({
    mutationFn: signUpFn,

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    onSuccess: (data: any) => {
      const { access_token, refresh_token } = data.signUp.metadata
      localStorage.setItem('nexa-access-token', access_token)
      localStorage.setItem('nexa-refresh-token', refresh_token)

      toast.success('Sign up was successfully!', {
        description: 'Sunday, December 0F3, 2023 at 9:00 AM',
        action: {
          label: 'Undo',
          onClick: () => console.log('Undo')
        }
      })
      navigate('/home')
    },

    onError(error) {
      const errorParse = JSON.parse(JSON.stringify(error)).response.errors[0].message
      toast.error(errorParse, {
        description: 'Sunday, December 0F3, 2023 at 9:00 AM',
        action: {
          label: 'Undo',
          onClick: () => console.log('Undo')
        }
      })
    }
  })

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    signupMn.mutate(values)
  }

  return (
    <div className={cn('grid gap-6', className)} {...props}>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-5'>
          <FormField
            control={form.control}
            name='full_name'
            render={({ field }) => (
              <FormItem>
                <FormLabel className='flex items-center gap-2'>
                  <PersonIcon /> <span>Username</span>
                </FormLabel>
                <FormControl>
                  <Input placeholder='Dyno' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='email'
            render={({ field }) => (
              <FormItem>
                <FormLabel className='flex items-center gap-2'>
                  <EnvelopeClosedIcon /> <span>Email</span>
                </FormLabel>
                <FormControl>
                  <Input placeholder='dyno@example.com' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='password'
            render={({ field }) => (
              <FormItem>
                <FormLabel className='flex items-center gap-2'>
                  <LockClosedIcon /> <span>Password</span>
                </FormLabel>
                <FormControl>
                  <Input placeholder='Password' {...field} type='password' />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type='submit' variant={'default'} className='w-full'>
            {signupMn.isPending ? 'Đang xử lý...' : 'Sign Up'}
          </Button>
        </form>
      </Form>

      <div className='relative'>
        <div className='absolute inset-0 flex items-center'>
          <span className='w-full border-t' />
        </div>
        <div className='relative flex justify-center text-xs uppercase'>
          <span className='bg-background px-2 text-muted-foreground'>Or continue with</span>
        </div>
      </div>
      <GoogleLogin
        onSuccess={(credentialResponse) => {
          console.log(credentialResponse)
        }}
        onError={() => {
          console.log('Login Failed')
        }}
        width='500px'
      />
    </div>
  )
}

export default UserAuthForm
