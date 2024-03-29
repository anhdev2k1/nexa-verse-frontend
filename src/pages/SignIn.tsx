import { Link } from 'react-router-dom'
import UserAuthForm from '~/components/UserAuthForm'
import { buttonVariants } from '~/components/ui/button'
import { cn } from '~/lib/utils'

const SignIn = () => {
  
  return (
    <>
      <div className='container relative hidden h-[100vh] flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0'>
        <Link
          to='/examples/authentication'
          className={cn(buttonVariants({ variant: 'ghost' }), 'absolute right-4 top-4 md:right-8 md:top-8')}
        >
          Login
        </Link>
        <div className='relative hidden h-full flex-col bg-muted p-10 text-white lg:flex dark:border-r'>
          <div className='absolute inset-0 bg-bg-login bg-cover bg-no-repeat top-[0] left-[-30%]' />
          <div className='relative z-20 mt-auto'>
            <blockquote className='space-y-2'>
              <p className='text-lg'>
                &ldquo;Welcome to Nexa Verse, the next-generation platform for fostering interactive community
                groups.&rdquo;
              </p>
              <footer className='text-sm'>@anhdev</footer>
            </blockquote>
          </div>
        </div>
        <div className='lg:p-8'>
          <div className='mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]'>
            <div className='flex flex-col space-y-2 text-center'>
              <h1 className='text-2xl font-semibold tracking-tight'>Create an account</h1>
              <p className='text-sm text-muted-foreground'>Enter your email below to create your account</p>
            </div>
            <UserAuthForm />
            <p className='px-8 text-center text-sm text-muted-foreground'>
              By clicking continue, you agree to our{' '}
              <Link to='/terms' className='underline underline-offset-4 hover:text-primary'>
                Terms of Service
              </Link>{' '}
              and{' '}
              <Link to='/privacy' className='underline underline-offset-4 hover:text-primary'>
                Privacy Policy
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default SignIn
