import React from  'react'


export default props =>{
    const rows = props.sessoes.map(sessao =>{
        return(
            <tr key={sessao.id}>
                <td>{sessao.id}</td>
            <td>{sessao.dataInicial}</td>
            <td>{sessao.observacoes}</td>
            <td>{sessao.exercicio.map(exercicio =>{
                return(exercicio.descricao)
            })}</td>
            </tr>
        )
    }

    )

    return(
        <table className="table">
            <thead>
                <tr>
                    <th>Id</th>
                <th>Data</th>
                <th>Obs</th>
                <th>exercicio</th>
                </tr>
            </thead>

            <tbody>
                {rows}
            </tbody>
        </table>
    )





}