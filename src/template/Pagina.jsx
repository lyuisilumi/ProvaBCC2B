import Cabecalho from "./Cabecalho";
import Rodape from "./Rodape";
import Menu from "./menu";

export default function Pagina(props) {
    return (
        <>
            <Cabecalho conteudo='Chat dos amigos' />
            <Menu />
            <div>
                {
                }
                {props.children} 
            </div>
            <Rodape conteudo="Conversar sobre atividades, etc"/>
        </>
    )
}