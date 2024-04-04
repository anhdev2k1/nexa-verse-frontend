import {
  CalendarIcon,
  EnvelopeClosedIcon,
  FaceIcon,
  GearIcon,
  MoonIcon,
  PersonIcon,
  RocketIcon,
  SunIcon
} from '@radix-ui/react-icons'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut
} from './ui/command'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from './ui/dropdown-menu'
import { useEffect, useState } from 'react'
import { Button } from './ui/button'
import { useTheme } from '~/contexts/theme-provider'
import { Link } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'

const Navbar = () => {
  const [open, setOpen] = useState<boolean>(false)
  const currentUser = useQuery({ queryKey: ['currentUser'], staleTime: 300000 })
  console.log(currentUser.data)

  const { setTheme, theme } = useTheme()
  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'j' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((open) => !open)
      }
    }

    document.addEventListener('keydown', down)
    return () => document.removeEventListener('keydown', down)
  }, [])
  return (
    <div className='w-full h-[60px] pl-5 pr-5 flex-shrink-0 border-b border-border/40 flex items-center justify-between sticky top-0 z-50 bg-background/30 backdrop-blur supports-[backdrop-filter]:bg-background/20'>
      <Link to='/home' className='text-2xl font-bold'>
        nexa.
      </Link>

      <div className='flex items-center gap-5'>
        <>
          <p className='text-sm text-muted-foreground'>
            Press{' '}
            <kbd className='pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border border-input bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100'>
              <span className='text-xs'>⌘</span>J
            </kbd>
          </p>
          {theme === 'light' ? (
            <Button variant='outline' size='icon' onClick={() => setTheme('dark')}>
              <MoonIcon />
            </Button>
          ) : (
            <Button variant='outline' size='icon' onClick={() => setTheme('light')}>
              <SunIcon />
            </Button>
          )}

          <CommandDialog open={open} onOpenChange={setOpen}>
            <CommandInput placeholder='Type a command or search...' />
            <CommandList>
              <CommandEmpty>No results found.</CommandEmpty>
              <CommandGroup heading='Suggestions'>
                <CommandItem>
                  <CalendarIcon className='mr-2 h-4 w-4' />
                  <span>Calendar</span>
                </CommandItem>
                <CommandItem>
                  <FaceIcon className='mr-2 h-4 w-4' />
                  <span>Search Emoji</span>
                </CommandItem>
                <CommandItem>
                  <RocketIcon className='mr-2 h-4 w-4' />
                  <span>Launch</span>
                </CommandItem>
              </CommandGroup>
              <CommandSeparator />
              <CommandGroup heading='Settings'>
                <CommandItem>
                  <PersonIcon className='mr-2 h-4 w-4' />
                  <span>Profile</span>
                  <CommandShortcut>⌘P</CommandShortcut>
                </CommandItem>
                <CommandItem>
                  <EnvelopeClosedIcon className='mr-2 h-4 w-4' />
                  <span>Mail</span>
                  <CommandShortcut>⌘B</CommandShortcut>
                </CommandItem>
                <CommandItem>
                  <GearIcon className='mr-2 h-4 w-4' />
                  <span>Settings</span>
                  <CommandShortcut>⌘S</CommandShortcut>
                </CommandItem>
              </CommandGroup>
            </CommandList>
          </CommandDialog>
        </>
        {currentUser.isLoading ? <p>Loading...</p> : <p>Hello! {currentUser?.data!.getMe.metadata.user.email}</p>}
        <DropdownMenu>
          <DropdownMenuTrigger className='outline-none'>
            <Avatar>
              <AvatarImage src='https://github.com/shadcn.png' alt='@shadcn' />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>
              <Link to='/settings/account'>Settings</Link>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <Link to='/settings/account'>
              <DropdownMenuItem>Account</DropdownMenuItem>
            </Link>
            <Link to='/settings/profile'>
              <DropdownMenuItem>Profile</DropdownMenuItem>
            </Link>
            <DropdownMenuItem
              onClick={() => {
                window.location.replace('/signin')
              }}
            >
              Log out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  )
}

export default Navbar
