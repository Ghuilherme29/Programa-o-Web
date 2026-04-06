import { useState } from "react"
import "./style.css"

export default function AdicionarUsuario() {
    const [nome, setnome] = useState("")
    const [email, setemail] = useState("")
    const [listaDeUsuario, setlistaDeUsuario] = useState([])

    const handlerAdicionarUsuario = (event) => {
        event.preventDefault()

        // Só adiciona se nome e email estiverem preenchidos
        if (nome && email) {
            setlistaDeUsuario([...listaDeUsuario, { nome, email }])
            
            // Limpa os campos após adicionar
            setnome("")
            setemail("")
        }
    }
    
    return (
        <div className="formulario">
            <h2>Adicionar Usuário</h2>
            <form onSubmit={handlerAdicionarUsuario}>
                <input
                    type="text"
                    placeholder="Nome" 
                    value={nome}
                    onChange={(e) => setnome(e.target.value)}
                />

                {/* Novo input de email adicionado aqui 👇 */}
                <input
                    type="email"
                    placeholder="Email" 
                    value={email}
                    onChange={(e) => setemail(e.target.value)}
                />

                <button type="submit">Adicionar</button>
            </form>

            <hr />

            <h2>Usuários Adicionados</h2>
            <ul>
                {listaDeUsuario.map((usuario, index) => (
                    <li key={index}>
                        {usuario.nome} - {usuario.email}
                    </li>
                ))}
            </ul>
        </div>    
    )
}