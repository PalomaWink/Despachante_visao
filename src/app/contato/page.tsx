
export default function page() {
  return (
    <div className="h-screen flex justify-center items-center">
      <form className="w-35rem border-laranja-forte border-2 border-solid rounded-md p-2 flex flex-col gap-4">
        <div className="flex flex-col">
          <label htmlFor="nome">Nome</label>
          <input type="text" name="nome" id="nome"/>
        </div>
        <div className="flex flex-col">
          <label htmlFor="email">E-mail</label>
          <input type="email" name="email" id="email" />
        </div>
        <div className="flex flex-col">
          <label htmlFor="mensagem">Mensagem</label>
          <textarea name="mensagem" id="mensagem" />
        </div>
        <div className="flex justify-center items-center mt-10 mb-2">
          <button type="submit" className="bg-laranja-claro rounded-xl w-32 h-8 hover:bg-laranja-forte hover:text-white shadow-lg">Enviar</button>
        </div>
      </form>
    </div>
  )
}