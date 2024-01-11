'use client'

// Biblotecas
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import emailjs from '@emailjs/browser'
import { BsEnvelopeAt, BsTelephone } from "react-icons/bs";
import { FcPhoneAndroid } from "react-icons/fc";

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
export default function Contato() {
  const { 
    register, 
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<Contato>({
    resolver: zodResolver(validacaoDeContatoSchema)
  })

  function onSubmitEmail(data: Contato) {
    /* const templateParams = {
      from_name: data.nome,
      from_email: data.email,
      message: data.mensagem,
    }
    emailjs.send("service_um90tbr", "template_pxo1wuc", templateParams, "AqLuZzCqpb48hDAPj")
    .then((response) => {
      console.log('SUCCESS!', response.status, response.text);
      reset()
    }, (err) => {
      console.log('FAILED...', err);
    }) */
  }

  return (
    <div id="contato" className="h-screen flex flex-col justify-center items-center">
      <h1 className="text-4xl mb-10 text-laranja-claro font-bold text-center">Entre em contato conosco!</h1>
      <div className="flex justify-center items-center">
        <div className="grid grid-cols-4 w-full">
          <div className="col-span-2 flex flex-col justify-center items-end mr-9">
            <span className="flex justify-center items-center w-96 mt-5">
              <div className="mr-2">
                <BsTelephone/>
              </div>
              (51) 3056-4808 <b className="ml-2">Escriório</b>
            </span>
            <span className="flex justify-center items-center w-96 mt-5">
              <div className="mr-2">
                <FcPhoneAndroid />
              </div>
              (51) 9 9673-9085 <b className="ml-2">Escriório</b>
            </span>
            <span className="flex justify-center items-center w-96 mt-5">
              <div className="mr-2">
                <FcPhoneAndroid />
              </div>
              (51) 9 9676-0159 <b className="ml-2">Guilherme</b>
            </span>
            <span className="flex justify-center items-center w-96 mt-5">
              <div className="mr-2">
                <FcPhoneAndroid />
              </div>
              (51) 9 9673-9209 <b className="ml-2">Francisco</b>
            </span>
            <span className="flex justify-center items-center w-96 mt-5 mb-5">
              <div className="mr-2">
                <BsEnvelopeAt />
              </div>
              despachantechico@hotmail.com
            </span>
            <nav className="flex flex-col justify-center items-center gap-4  w-96"> 
              <Link href="/" className="text-2xl sm:text-xl mx-2">
                <Instagram />
              </Link>
              <a href="https://wa.me/5551996739085" className="text-2xl sm:text-xl mx-2">
                <Whatsapp />
              </a>
            </nav>
          </div>
          <form
            onSubmit={handleSubmit(onSubmitEmail)}
            className="col-span-2 w-full max-w-xl border-laranja-forte border-2 border-solid rounded-md p-2 flex flex-col gap-4"
          >
            <div className="flex flex-col">
              <label htmlFor="nome">Nome</label>
              <input 
                type="text"
                id="nome"
                className="border border-solid border-zinc-200 rounded shadow-sm h-10 px-3 focus:border-laranja-forte"
                {...register("nome")} 
              />
              {errors.nome && <span className="text-red-600 text-sm">{errors.nome.message}</span>}
            </div>
            <div className="flex flex-col">
              <label htmlFor="email">E-mail</label>
              <input 
                type="email" 
                id="email"
                className="border border-solid border-zinc-200 rounded shadow-sm h-10 px-3 focus:border-laranja-forte"
                {...register("email")} 
              />
              {errors.email && <span className="text-red-600 text-sm">{errors.email.message}</span>}
            </div>
            <div className="flex flex-col">
              <label htmlFor="mensagem">Mensagem</label>
              <textarea 
                id="mensagem"
                className="border border-solid border-zinc-200 rounded shadow-sm h-20 px-3 py-2 focus:border-laranja-forte"
                {...register("mensagem")} 
              />
              {errors.mensagem && <span className="text-red-600 text-sm">{errors.mensagem.message}</span>}
            </div>
            <div className="flex justify-center items-center mt-10 mb-2">
              <button 
                type="submit" 
                className="bg-verde text-white rounded-xl w-44 h-10 hover:bg-verde-escuro shadow-lg"
              >
                Enviar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}