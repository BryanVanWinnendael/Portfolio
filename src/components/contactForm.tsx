"use client"

import { useForm } from "react-hook-form"
import * as z from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useState } from "react"
import { formSchema } from "@/lib/schema"

const sendmail = async (values: z.infer<typeof formSchema>) => {
  try {
    const data = await fetch("/api/sendmail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    })

    if (!data.ok) {
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
    const res = await sendmail(values)
    if (res) {
      form.reset()
      setStatusMessage(
        "Message sent! I'll get back to you as soon as possible."
      )
    } else {
      setStatusMessage("Message failed to send. Please try again later.")
    }
    setLoading(false)
  }

  const inputStyle = {
    display: "block",
    width: "100%",
    marginBottom: "8px",
    padding: "8px",
    border: "1px solid white",
    backgroundColor: "transparent",
    color: "white",
  }

  return (
    <form className="w-full font-normal" onSubmit={form.handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="email" style={{ color: "white" }}>
          Email
        </label>
        <input
          id="email"
          type="email"
          {...form.register("email")}
          placeholder="email@email.com"
          style={inputStyle}
          onChange={(e) => {
            form.setValue("email", e.target.value)
            setStatusMessage("")
          }}
        />
        {form.formState.errors.email && (
          <p style={{ color: "red" }}>{form.formState.errors.email.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="text" style={{ color: "white" }}>
          Message
        </label>
        <textarea
          id="text"
          {...form.register("text")}
          placeholder="Type here..."
          style={{ ...inputStyle, height: "200px" }}
          onChange={(e) => {
            form.setValue("text", e.target.value)
            setStatusMessage("")
          }}
        />
        {form.formState.errors.text && (
          <p style={{ color: "red" }}>{form.formState.errors.text.message}</p>
        )}
      </div>

      <div>
        <button
          className={`${loading ? "" : "cursor-pointer"}`}
          type="submit"
          disabled={loading}
        >
          {loading ? "Please wait..." : "Submit"}
        </button>
      </div>

      {statusMessage && (
        <p style={{ marginTop: "12px", color: loading ? "gray" : "green" }}>
          {statusMessage}
        </p>
      )}
    </form>
  )
}

export default ContactForm
