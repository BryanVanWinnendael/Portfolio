"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { formSchema } from "@/lib/schema"

const sendmail = async (values: z.infer<typeof formSchema>) => {
  try {
    const response = await fetch("/api/sendmail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    })

    if (!response.ok) {
      throw new Error("Network error.")
    }

    return true
  } catch (error) {
    console.error(error)
    return false
  }
}

const ContactForm = () => {
  const [loading, setLoading] = useState(false)
  const [statusMessage, setStatusMessage] = useState("")

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      text: "",
    },
  })

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setLoading(true)
    setStatusMessage("")

    const success = await sendmail(values)

    if (success) {
      form.reset()
      setStatusMessage(
        "Message sent! I'll get back to you as soon as possible.",
      )
    } else {
      setStatusMessage("Message failed to send. Please try again later.")
    }

    setLoading(false)
  }

  return (
    <form
      onSubmit={form.handleSubmit(onSubmit)}
      className="w-full space-y-7 text-sm md:space-y-8"
    >
      <div>
        <label
          htmlFor="email"
          className="mb-2 block text-[10px] uppercase tracking-widest text-white/60 md:text-xs"
        >
          Email
        </label>

        <input
          id="email"
          type="email"
          placeholder="email@email.com"
          {...form.register("email", {
            onChange: () => setStatusMessage(""),
          })}
          className="w-full border-b border-white/30 bg-transparent px-0 py-3 text-sm text-white outline-none transition-colors placeholder:text-white/30 focus:border-white md:text-base"
        />

        {form.formState.errors.email && (
          <p className="mt-2 text-xs text-red-400">
            {form.formState.errors.email.message}
          </p>
        )}
      </div>

      <div>
        <label
          htmlFor="text"
          className="mb-2 block text-[10px] uppercase tracking-widest text-white/60 md:text-xs"
        >
          Message
        </label>

        <textarea
          id="text"
          placeholder="Type here..."
          {...form.register("text", {
            onChange: () => setStatusMessage(""),
          })}
          className="min-h-35 w-full resize-none border-b border-white/30 bg-transparent px-0 py-3 text-sm text-white outline-none transition-colors placeholder:text-white/30 focus:border-white md:min-h-45 md:text-base"
        />

        {form.formState.errors.text && (
          <p className="mt-2 text-xs text-red-400">
            {form.formState.errors.text.message}
          </p>
        )}
      </div>

      <div className="flex flex-col items-start gap-5 md:flex-row md:items-center md:justify-between">
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-accent px-5 py-3 text-xs text-white transition-opacity hover:opacity-80 disabled:cursor-not-allowed disabled:opacity-50 md:w-auto"
        >
          {loading ? "SENDING..." : "SEND MESSAGE"}
        </button>

        {statusMessage && (
          <p
            className={`max-w-full text-xs leading-relaxed md:max-w-xs md:text-right ${
              statusMessage.startsWith("Message sent")
                ? "text-white/60"
                : "text-red-400"
            }`}
          >
            {statusMessage}
          </p>
        )}
      </div>
    </form>
  )
}

export default ContactForm
