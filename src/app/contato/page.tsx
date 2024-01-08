'use client'

// Biblotecas
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import emailjs from '@emailjs/browser'

// Tipagem
import { Contato } from "../type"

// Componente
import { useState } from "react"
import Link from "next/link"
import Instagram from "../components/botoes/Instagram"
import Whatsapp from "../components/botoes/Whatsapp"

const validacaoDeContatoSchema = z.object({
  nome: z.string().min(3, 'O campo do nome é obrigatorio').max(255).transform(name => {
    return name.trim().split(' ').map(word => {
      return word[0].toLocaleUpperCase().concat(word.substring(1))
    }).join(' ')
  }),
  email: z.string().email("Email inválido").min(10, "O campo do email é obrigatório").max(255).toLowerCase(),
  mensagem: z.string().min(3, 'O campo da mensagem é obrigatorio').max(255),
})
export default function Page() {
  const { 
    register, 
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<Contato>({
    resolver: zodResolver(validacaoDeContatoSchema)
  })

  function onSubmitEmail(data: Contato) {
    const templateParams = {
      from_name: data.nome,
      from_email: data.email,
      message: data.mensagem,
    }
    emailjs.send("service_hj1qzof", "template_pxo1wuc", templateParams, "AqLuZzCqpb48hDAPj")
    .then((response) => {
      console.log('SUCCESS!', response.status, response.text);
      reset()
    }, (err) => {
      console.log('FAILED...', err);
    })
  }

  return (
    <div className="h-screen flex justify-center items-center">
      <form
        onSubmit={handleSubmit(onSubmitEmail)}
        className="w-full max-w-xl border-laranja-forte border-2 border-solid rounded-md p-2 flex flex-col gap-4"
      >
        <div className="flex flex-col">
          <label htmlFor="nome">Nome</label>
          <input 
            type="text"
            id="nome"
            className="border border-solid border-zinc-200 rounded shadow-sm h-10 px-3"
            {...register("nome")} 
          />
          {errors.nome && <span className="text-vermelho text-sm">{errors.nome.message}</span>}
        </div>
        <div className="flex flex-col">
          <label htmlFor="email">E-mail</label>
          <input 
            type="email" 
            id="email"
            className="border border-solid border-zinc-200 rounded shadow-sm h-10 px-3"
            {...register("email")} 
          />
          {errors.email && <span className="text-vermelho text-sm">{errors.email.message}</span>}
        </div>
        <div className="flex flex-col">
          <label htmlFor="mensagem">Mensagem</label>
          <textarea 
            id="mensagem"
            className="border border-solid border-zinc-200 rounded shadow-sm h-20 px-3 py-2"
            {...register("mensagem")} 
          />
          {errors.mensagem && <span className="text-vermelho text-sm">{errors.mensagem.message}</span>}
        </div>
        <div className="flex justify-center items-center mt-10 mb-2">
          <button 
            type="submit" 
            className="bg-verde rounded-xl w-44 h-10 hover:bg-verde-escuro hover:text-white shadow-lg"
          >
            Enviar
          </button>
        </div>
      </form>
      <nav className="bottom-0 flex justify-center items-center bg-cinza-claro p-4 shadow-xl top-shadow"> 
        <Link href="/" className="text-2xl sm:text-xl mx-2">
          <Instagram />
        </Link>
        <a href="https://wa.me/5551996739085" className="text-2xl sm:text-xl mx-2">
          <Whatsapp />
        </a>
    </nav>
    </div>
  )
}