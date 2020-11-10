import React from 'react'
import axios from 'axios'
import Tabelasessao from './tabelasessao'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';

class Listaum extends React.Component{

	state={
		dataInicial:'',
		exercicio:[],
		observacoes:'',
		sessoes:[],
		sessaoDeletada:{},
		showConfirmDialog:false
	}

	componentDidMount(){
        const param = this.props.match.params
        var dataInicial = param.dataInicial
        console.log(dataInicial)
		axios.get(`http://localhost:8080/buscar/${dataInicial}`
		).then(response=>{
            this.setState({sessoes: response.data})
		}).catch(erro=>{
			console.log(erro.response)
		}
        )
	}
	editar = (id)=>{
		this.props.history.push(`/cadastro/${id}`)
	}
	confirmDelete = (sessao) =>{
		this.setState({showConfirmDialog:true, sessaoDeletada: sessao})
	}
	cancelDelete = () =>{
		this.setState({showConfirmDialog:false, sessaoDeletada: {}})
	}
	
	deletar =()=>{
		var id = this.state.sessaoDeletada.id
		axios.get(`http://localhost:8080/deletar/${id}`)
		.then(response =>{
			const listagem = this.state.sessoes; 
			const index = listagem.indexOf(this.state.sessaoDeletada)
			listagem.splice(index, 1)
			this.setState({sessoes: listagem, showConfirmDialog:false})
			if (response.status === 200){
				toast.warning('Sessão excluída com sucesso!')
			}
		})
		
	}

    render(){
		const showConfirmDialogFooter = (
			<div>
				<Button label="Confirmar" icon="pi pi-check" onClick={this.deletar} />
				<Button label="Cancelar" icon="pi pi-times" onClick={this.cancelDelete} 
				className="p-button-secondary"/>
			</div>
		);
        const haRegistro = this.state.sessoes.length
      
		return(
           
			
        <div>

<div align="center">
<h1 className="mt-5 mb-5">Consulta por Sessão</h1>
			</div>

            

	<div className="row justify-content-md-center" >
				<div className="col-md-11" >
					<div className="">

						{haRegistro ?<Tabelasessao sessoes= {this.state.sessoes}
						editAction={this.editar}
						deleteAction={this.confirmDelete}
                        />:<div align="center" className="mt-5"><h1>
                            Nenhuma sessão foi encontrada na data pesquisada</h1></div>}
				
				</div>
				</div>
			</div>



			<div>
<Dialog header="Confirmação" visible={this.state.showConfirmDialog} style={{ width: '50vw' }}
footer={showConfirmDialogFooter}onHide={() => this.setState({showConfirmDialog:false})}>
    <p>Confirmar exclusão da sessão?</p>
</Dialog>
			</div>
            </div>

        )}
}

export default Listaum