import { Link } from "react-router-dom"
import { listaProdutos } from "d:/listaCp2/aula-rotas/src/Components/listaProdutos"


export default function Produtos(){

    return(
        <main>
            <h1>Produtos</h1>
            {listaProdutos.map(prod =>(
                <div key={prod.id}>
                    <Link to={`/produtos/editar/${prod.id} `}>
                     Editar o produto: { prod.name}
                    </Link>
                </div>
            ))}
        </main>
    )
}