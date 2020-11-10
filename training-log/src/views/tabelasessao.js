import React from  'react'
import 'bootstrap/dist/js/bootstrap.bundle.min';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Button from 'react-bootstrap/Button'
import Popover from 'react-bootstrap/Popover'


export default props =>{
    const rows = props.sessoes.map(sessao =>{
      
        const popoverObs = (
            <Popover id="popover-trigger-hover" >
              {sessao.observacoes}
            </Popover>
          );

        const popoverExercicio = (
            <Popover id="popover-trigger-hover-focus" >
              {sessao.exercicio.map(exercicio =>{
                    
                    return (
                        <div className="table text-dark table-bordered">
                        <tr>
                            <th>Descricao</th>
                            <th>Carga</th>
                            <th>Repetições</th>
                            <th>Séries</th>
                        </tr>
                        <tr key={exercicio.id} >
                            <td>{exercicio.descricao}</td>
                            <td>{exercicio.carga}</td>
                            <td>{exercicio.repeticoes}</td>
                            <td>{exercicio.series}</td>
                        </tr>
                        </div>
                       )
                    
                })}
            </Popover>
          );

        return(
            
            <tr key={sessao.id}>
                <td>{sessao.id}</td>
                <td>Charles Morgantti</td>
            <td>{sessao.dataInicial}</td>
            <td >
            <OverlayTrigger
      trigger={['hover', 'focus']}
      placement="top"
      overlay={popoverObs}
    >
      <Button className="btn-secondary">ver observações</Button>
    </OverlayTrigger>
            </td>
       <td>
       <OverlayTrigger
      trigger={['hover', 'focus']}
      placement="top"
      overlay={popoverExercicio}
    >
      <Button className="btn-secondary">ver exercícios</Button>
    </OverlayTrigger>
       </td>
           
            <td >
                <button type="button" className="btn btn-primary" onClick={e => props.editAction(sessao.id)}>&nbsp;&nbsp;Editar&nbsp;&nbsp;</button>
                </td>
                <td>
                <button type="button" className="btn btn-danger" onClick={e => props.deleteAction(sessao)}>&nbsp;&nbsp;Excluir&nbsp;&nbsp;</button>
            </td>
         
            </tr>
        )
    }

    )

  

    return(
        <table className="table table-striped table-hover">
            <thead class="thead-dark">
                <tr>
                    <th >Sessão</th>
                    <th >Atleta</th>
                <th >Data</th>
                <th >Obs</th>
                <th >exercicio</th>
                <th colspan="2">Ação</th>
                </tr>
            </thead>

            <tbody>
                {rows}
            </tbody>
        </table>
    )

  
    }
