import { useForm } from "react-hook-form"
import * as z from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { formSchema } from "@/lib/schema"
import { Textarea } from "./ui/textarea"
import { sendContactForm } from "@/lib/api"
import { useToast } from "./ui/use-toast"
import { useState } from "react"
import { Loader2 } from "lucide-react"

const ContactForm = () => {
  const { toast } = useToast()
  const [loading, setLoading] = useState(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      text: "",
    },
  })

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setLoading(true)
    const res = await sendContactForm(values)
    console.log(res)
    if (res) {
      form.reset()
      toast({
        variant: "default",
        title: "Message sent!",
        description: "I'll get back to you as soon as possible!",
      })
    } else {
      toast({
        variant: "destructive",
        title: "Message failed to send!",
        description: "Please try again later.",
      })
    }
    setLoading(false)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input
                  className="bg-secondary border-primary border-opacity-20"
                  placeholder="email@email.com"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="text"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Text</FormLabel>
              <FormControl>
                <Textarea
                  className="min-h-52 bg-secondary border-primary border-opacity-20"
                  placeholder="Message"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {loading ? (
          <Button disabled variant="secondary" className="w-full">
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Please wait
          </Button>
        ) : (
          <Button variant="default" type="submit" className="w-full">
            Submit
          </Button>
        )}
      </form>
    </Form>
  )
}

export default ContactForm
