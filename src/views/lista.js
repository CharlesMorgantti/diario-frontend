import React from 'react'
import axios from 'axios'
import SessaoService from '../app/service/sessaoService'
import Tabelasessao from './tabelasessao'

class Lista extends React.Component{

	state={
		dataInicial:'',
		exercicio:[],
		observacoes:'',
		sessoes:[]
	}
	constructor(){
		super();
		this.sessaoService = new SessaoService();

		
	}
	componentDidMount(){
		axios.get('http://localhost:8080/sessoes'
	//	,{
	//		dataInicial:this.state.dataInicial,
		//	observacoes:this.state.observacoes
		//}
		).then(response=>{
			this.setState({sessoes: response.data})
			console.log(this.state)
		}).catch(erro=>{
			console.log(erro.response)
		}
		)
	}
/*componentDidMount('http://localhost:5000/Sessao/Listagem'){
	axios.get('http://localhost:5000/Sessao/Listagem').then(response =>{
//	this.setState({descricao0:response.data})
this.state({Observacoes:response.data})
	}).catch(error =>{
		console.error(error.response)
	})

	
}*/

    render(){
		return(
			
        <div>



	



			<div className="row wlis">
				<div className="col-md-12">
					<div className="bs-component">
						<Tabelasessao sessoes= {this.state.sessoes}/>
				
				</div>
				</div>
			</div>

</div>
			

		 ) }

}

export default Lista