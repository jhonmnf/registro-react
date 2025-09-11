 function Titulo(props){
    
    return(
        <div>
    <h1 style={{ color : "#f8f"}}>{props.nome}</h1>
    <p>{props.idade}</p>
    <h2>{props.animal}</h2>
    <p>{props.tel}</p>
    <h1 style={{color : "#f00a0aff"}}>{props.Cor}</h1>
    </div>
    )
}

export default function Layout () { 
    return (
        <div>
            <Titulo nome = "Ana bananas" idade = {14} cor= "#f8f/" animal = "cat"  tel = {40028922} Cor = "Vermelho" cor1 = "#f00a0aff"/>
            <Titulo2 nome = "junin" cor = "rgba(30, 188, 135, 1)" idade = {67}>active={false} </Titulo2> 
        </div>
    )
}

function Titulo2({ nome, cor, idade,active }) {
    return ( 
        <div>
            <h1 style={{ color: cor }}>{nome}  {active ? "Ativo" : nome}</h1>
           
            <p>{idade}</p>
        </div>
    )
}
