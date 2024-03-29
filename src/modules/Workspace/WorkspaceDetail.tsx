import { useParams } from 'react-router-dom'
import {
  faChevronDown,
  faCircleQuestion,
  faFaceSmile,
  faGear,
  faHashtag,
  faHeadset,
  faMicrophone,
  faPaperPlane,
  faPaperclip,
  faShareNodes,
  faThumbtack
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button } from '~/components/ui/button'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '~/components/ui/dialog'
import { Label } from '~/components/ui/label'
import { Input } from '~/components/ui/input'
import { CopyIcon } from '@radix-ui/react-icons'
import { Avatar, AvatarFallback, AvatarImage } from '~/components/ui/avatar'
import { Form, FormControl, FormField, FormItem, FormMessage } from '~/components/ui/form'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '~/components/ui/accordion'
const WorkspaceDetail = () => {
  const { workspace_id } = useParams()

  const formSchema = z.object({
    content: z.string()
  })

  const form = useForm<z.infer<typeof formSchema>>({
    defaultValues: {
      content: ''
    }
  })

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    console.log(values)
  }
  return (
    <div className='w-full h-full flex gap-2'>
      <div className='w-[200px] flex-shrink-0 h-full relative p-2'>
        <div className='h-[90px] bg-cover-workspace bg-cover bg-no-repeat rounded-lg relative'>
          <div className='absolute top-0 left-0 w-full h-max bg-background/30 backdrop-blur supports-[backdrop-filter]:bg-background/20 '>
            <Button
              variant={'secondary'}
              className='text-sm w-full bg-transparent text-white flex items-center justify-between rounded-none rounded-bl-lg rounded-br-lg'
            >
              <span>Workspace {workspace_id} </span>
              <FontAwesomeIcon icon={faChevronDown} />
            </Button>
          </div>
        </div>
        <div className='w-full flex-1'>
          {/*---Room */}
          <Accordion type='multiple'>
            <AccordionItem value='item-1'>
              <AccordionTrigger>
                <span>Resource</span>
              </AccordionTrigger>
              <div className='flex flex-col gap-3'>
                <AccordionContent className='h-[35px] hover:bg-accent rounded-lg flex gap-1 items-center pl-3 cursor-pointer font-medium'>
                  <FontAwesomeIcon icon={faHashtag} />
                  <span>Welcome</span>
                </AccordionContent>
                <AccordionContent className='h-[35px] hover:bg-accent rounded-lg flex gap-1 items-center pl-3 cursor-pointer font-medium'>
                  <FontAwesomeIcon icon={faHashtag} />
                  <span>Roles community</span>
                </AccordionContent>
              </div>
            </AccordionItem>

            <AccordionItem value='item-2'>
              <AccordionTrigger>
                <span>Social</span>
              </AccordionTrigger>
              <div className='flex flex-col gap-3'>
                <AccordionContent className='h-[35px] hover:bg-accent rounded-lg flex gap-1 items-center pl-3 cursor-pointer font-medium'>
                  <FontAwesomeIcon icon={faHashtag} />
                  <span>Welcome</span>
                </AccordionContent>
                <AccordionContent className='h-[35px] hover:bg-accent rounded-lg flex gap-1 items-center pl-3 cursor-pointer font-medium'>
                  <FontAwesomeIcon icon={faHashtag} />
                  <span>Roles community</span>
                </AccordionContent>
              </div>
            </AccordionItem>
          </Accordion>
          {/*---Room */}
        </div>
        {/*---Bottom bar */}
        <div className='w-full h-[40px] absolute bottom-0 left-0 mt-2 mb-2 flex items-center justify-between pr-2 pl-2'>
          <div className='flex items-center gap-1'>
            <div className='relative'>
              <Avatar className='w-[30px] h-[30px]'>
                <AvatarImage src='https://github.com/shadcn.png' alt='@shadcn' />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div className='w-[10px] h-[10px] rounded-[50%] bg-green-500 absolute bottom-[-2px] right-0 z-10 border border-input'></div>
            </div>
            <div className='flex flex-col'>
              <span className='text-[13px]'>Dyno</span>
              <span className='text-[10px]'>@anhdev</span>
            </div>
          </div>
          <div className='flex items-center gap-3'>
            <FontAwesomeIcon icon={faMicrophone} width={13} className='cursor-pointer' />
            <FontAwesomeIcon icon={faHeadset} width={13} className='cursor-pointer' />
            <FontAwesomeIcon icon={faGear} width={13} className='cursor-pointer' />
          </div>
        </div>
        {/*---Bottom bar */}
      </div>
      <div className='w-full h-full flex flex-col gap-1 '>
        {/*---Header Workspace */}
        <div className='w-full h-max bg-accent rounded-lg'>
          <div className='w-full h-full flex items-center justify-between p-1 '>
            <div className='flex flex-col gap-1'>
              <p className='text-base text-primary flex items-center gap-1 font-semibold'>
                <FontAwesomeIcon icon={faHashtag} /> <span className='text-sm'>Roles of the wars</span>
              </p>
            </div>
            <div className='flex items-center gap-2'>
              <Button variant={'outline'} size={'icon'}>
                <FontAwesomeIcon icon={faThumbtack} />
              </Button>
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant='outline' size={'icon'}>
                    <FontAwesomeIcon icon={faShareNodes} />
                  </Button>
                </DialogTrigger>
                <DialogContent className='sm:max-w-md'>
                  <DialogHeader>
                    <DialogTitle>Share link</DialogTitle>
                    <DialogDescription>Anyone who has this link will be able to view this.</DialogDescription>
                  </DialogHeader>
                  <div className='flex items-center space-x-2'>
                    <div className='grid flex-1 gap-2'>
                      <Label htmlFor='link' className='sr-only'>
                        Link
                      </Label>
                      <Input
                        id='link'
                        defaultValue='https://nexa-verse.com/workspace/invite/tl30gkfl3j3ldje4'
                        readOnly
                      />
                    </div>
                    <Button type='submit' size='sm' className='px-3'>
                      <span className='sr-only'>Copy</span>
                      <CopyIcon className='h-4 w-4' />
                    </Button>
                  </div>
                  <DialogFooter className='sm:justify-start'>
                    <DialogClose asChild>
                      <Button type='button' variant='secondary'>
                        Close
                      </Button>
                    </DialogClose>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
              <Button variant={'outline'} size={'icon'}>
                <FontAwesomeIcon icon={faCircleQuestion} />
              </Button>
              <Button variant={'outline'} size={'icon'}>
                <FontAwesomeIcon icon={faGear} />
              </Button>
            </div>
          </div>
        </div>
        {/*---Header Workspace */}
        <div className='w-full flex-1 relative flex flex-col justify-between'>
          <div className='w-full flex-1 rounded-lg'>red</div>
          <div className='w-full h-[50px] flex items-center gap-2'>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className='w-full flex items-center gap-2'>
                <FormField
                  control={form.control}
                  name='content'
                  render={({ field }) => (
                    <FormItem className='flex-1'>
                      <FormControl>
                        <Input placeholder='Type Message...' {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button variant={'default'} type='submit' className='w-[90px] flex items-center gap-1'>
                  <FontAwesomeIcon icon={faPaperPlane} /> <span>Send</span>
                </Button>
              </form>
            </Form>
            <Button variant={'outline'} size={'icon'} className='flex-shrink-0'>
              <FontAwesomeIcon icon={faFaceSmile} />
            </Button>
            <Button variant={'outline'} size={'icon'} className='flex-shrink-0'>
              <FontAwesomeIcon icon={faPaperclip} />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WorkspaceDetail
