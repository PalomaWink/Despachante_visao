
export default function page() {
  return (
    <div className="flex justify-center items-center m-10">
      <form className="w-35rem h-auto border-laranja-forte border-2 border-solid rounded-md p-2">
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
        <button type="submit">Enviar</button>
      </form>
    </div>
  )
}