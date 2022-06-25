import { gql, useMutation } from "@apollo/client";
import { useState, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { Logo } from "../components/Logo";

const CREATE_SUBSCRIBER_MUTATION = gql`
  mutation CreateSubscriber ($name: String!, $email: String!) {
    createSubscriber(data: {name: $name, email: $email}) {
      id
    }
  }
`

export function Subscribe() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate();
  const [createSubscriber, { loading }] = useMutation(CREATE_SUBSCRIBER_MUTATION)

  async function handleSubscribe(event: FormEvent) {

    event.preventDefault();
    if(!name || !email) return

    await createSubscriber({
      variables: {
        name,
        email
      }
    })

    navigate('/event')
  }
  
  return (
    <div className="min-h-screen bg-blur bg-cover bg-no-repeat flex flex-col items-center">
      
      <div className="w-full flex-1 max-w-[1100px] flex justify-between mt-1 pt-20 mx-auto bg-react bg-cover bg-no-repeat bg-center">
        <div className="max-w-[640px]">
          <Logo />

          <h1 className="mt-8 text-[2.5rem] leading-tight">
            Construa uma <strong className="text-blue-400">aplicação completa </strong>, dor zero, com <strong className="text-blue-400">React</strong>
          </h1>

          <p className="mt-4 text-gray-200 leading-relaxed">
            Em apenas uma semana você vai dominar na prática uma das tecnologias mais utilizadas e com alta demanda para acessar as melhores oportunidades do mercado.
          </p>
        </div>

        <div className="p-8 bg-gray-700 border border-gray-500 rounded">
          <strong className="text-2xl mb-6 block">Inscreva-se gratuitamente</strong>

          <form onSubmit={handleSubscribe} className="flex flex-col gap-2 w-full">
            <input
              className="bg-gray-900 rounded px px-5 h-14"
              type="text" 
              placeholder="Seu nome completo"
              onChange={event => setName(event.target.value)}
            />
            <input
              className="bg-gray-900 rounded px px-5 h-14"
              type="email" 
              placeholder="Digite seu e-mail"
              onChange={event => setEmail(event.target.value)}
            />
            <button disabled={loading} type="submit" className="mt-4 bg-green-500 uppercase py-4 rounded font-bold text-sm hover:bg-green-700 transition-colors disabled:opacity-50">
              Garantir minha vaga
            </button>
          </form>
        </div>
      </div>
      
      <img src="/src/assets/group7735.png" className="mt-10" alt="" />
    </div>
  )
}


  // diferente do que fizemos com a query, queremos executar a mutation apenas
  // quando o form submit for realizado
  // com isso, nossa mutation retorna um array, onde a primeira posição é
  // inserida a função que queremos que chame a mutation
  // e como segundo parâmetro, temos um objeto com o retorno da nossa
  // função