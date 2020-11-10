import React from 'react'
import axios from 'axios'
import Tabelasessao from './tabelasessao'
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


class Lista extends React.Component{

	state={
		dataInicial:'',
		exercicio:[],
		observacoes:'',
		sessoes:[],
		sessaoDeletada:{},
		showConfirmDialog:false
	}

	componentDidMount(){
		axios.get('http://localhost:8080/sessoes'
			).then(response=>{
				this.setState({sessoes: response.data})
			}).catch(erro=>{
				console.log(erro.response)
			}
			)
		}

	buscar = (dataInicial)=>{
		this.props.history.push(`/listaum/${dataInicial}`)
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
<h1 className="mt-5 mb-5">Lista de Sessões</h1>
			</div>

			{haRegistro ?<div className="form-row justify-content-md-center ">
		<div className=" col-md-4">
		<label htmlFor="">Buscar por data:</label>
		<input className="form-control" type="date" aria-label="Search"
		name="dataInicial" id="dataInicial" value={this.state.dataInicial}
		onChange={e =>this.setState({dataInicial:e.target.value})}/> 
			
		</div>
		<div className="col-md-1 mt-4" align="right">	<button type="submit" className="btn btn-primary  btn-lg"
				onClick={e => this.buscar(this.state.dataInicial)}>&nbsp;&nbsp;Buscar&nbsp;&nbsp;</button></div>
		
		</div>:<div align="center" className="mt-5"><h3>
                            Não há sessões cadastradas</h3></div>}



			<div className="row justify-content-md-center mt-4" >
				<div className="col-md-11" >
				<div className="">
	
			{haRegistro ?<Tabelasessao sessoes= {this.state.sessoes}
						editAction={this.editar}
						deleteAction={this.confirmDelete}
                        />:<div align="center" className="mt-5"><h3>
                            Por favor cadastre uma sessão</h3></div>}
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


		 ) }

}

export default Lista