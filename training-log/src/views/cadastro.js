import React from 'react'
import axios from 'axios'
import {withRouter} from 'react-router-dom'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class Cadastro extends React.Component{
	state={
		id:null,
        dataInicial:'',
        exercicio:[{
			descricao: '',
			carga:null,
			repeticoes:null,
			series:null
        }],
		observacoes:'',
		atualizando:false
	}

	onChange = (e, i) => {
        const newExercicio = this.state.exercicios;
        newExercicio[i] = {[e.target.descricao]: e.target.value, ...newExercicio[i]}
        this.setState({exercicios: newExercicio})
    }
    handleChange = (e, index) => {
        const { name, value } = e.target;
    
        this.setState(prevState => {
          const exercicio = [...prevState.exercicio];
          exercicio[index] = { ...exercicio[index], [name]: value };
          return { exercicio };
        });
      };
	
	atualizar = ()=>{
		var id = this.state.id
		axios.post(`http://localhost:8080/atualizar/${id}`,
		{	
			id:this.state.id,
			dataInicial:this.state.dataInicial,
            observacoes:this.state.observacoes,
            exercicio:this.state.exercicio
		}
		).then(
			response=>{
			this.props.history.push('/lista')
			if (response.status === 200){
				toast.success('Sessão atualizada com sucesso!')
			}
		}).catch(erro=>{
			console.log(erro.response)
		}
		)
	}
	
	cadastrar =()=>{
	 if(!this.state.dataInicial){
		alert("É obrigatório informar a data da sessão de treinamento!")
		return false
	 }
		axios.post('http://localhost:8080/salvar1',
		{	
			dataInicial:this.state.dataInicial,
            observacoes:this.state.observacoes,
            exercicio:this.state.exercicio
		}

		).then(
			response=>{
			this.props.history.push('/lista')
			if (response.status === 200){
				toast.success('Sessão cadastrada com sucesso!')
			}
		}
		).catch(erro=>{
			console.log(erro.response)
		}
		)
	}
	componentDidMount(){
		const param = this.props.match.params
		if(param.id){
			var id = param.id
			axios.get(`http://localhost:8080/edit/${id}`).then(response =>{
				this.setState({...response.data, atualizando:true})
			}

			)
	}

		}

    onAddChild = () => {
        this.setState(prevState => {
          return {
            exercicio: [
              ...prevState.exercicio,
              {
				descricao: '',
				carga:null,
				repeticoes:null,
			series:null
              }
            ]
          };
        });
      };
    render(){
	
        return(
        <div>
			<div align="center">
<h1 className="mt-5 mb-5">Cadastro de Sessão</h1>
			</div>

<div className="container justify-content-md-center col-md-8" id="cadastro">
            
<div className="form-row ">
<div className="form-group col-md-6">
<label htmlFor="">Data da sessão:</label>
<input className="form-control mr-sm-2" type="date" aria-label="Search"
name="dataInicial" id="dataInicial" value={this.state.dataInicial}
onChange={e =>this.setState({dataInicial:e.target.value})}/> </div>

		</div>
	                
                    
                     {this.state.exercicio.map((m, i) => (
  <div className="form-row">
  <div className="form-group col-md-6 ">
      <label htmlFor="">Exercício:</label>
      <input type="text" className="form-control"  placeholder="Descrição:"
             autofocus="autofocus" name="descricao"
             value={m.descricao}
             onChange={e => this.handleChange(e, i)}/>
  </div>
  <div className="form-group col-md-2 ">
      <label htmlFor="">carga:</label>
      <input type="text" className="form-control"  placeholder="Carga:"
             autofocus="autofocus" name="carga"
             value={m.carga}
             onChange={e => this.handleChange(e, i)}/>
  </div>
  <div className="form-group col-md-2 ">
      <label htmlFor="">Repetições:</label>
      <input type="text" className="form-control"  placeholder="repeticoes:"
             autofocus="autofocus" name="repeticoes"
             value={m.repeticoes}
             onChange={e => this.handleChange(e, i)}/>
  </div>
  <div className="form-group col-md-2 ">
      <label htmlFor="">Séries:</label>
      <input type="text" className="form-control"  placeholder="Séries:"
             autofocus="autofocus" name="series"
             value={m.series}
             onChange={e => this.handleChange(e, i)}/>
  </div>

</div>
                        ))}
						<div className="form-row">
                         <div align="right" className="form-group col-md-12">
          <button onClick={this.onAddChild}><img src={require('./add-43.png')}alt="" className="addIcon" /></button>
        </div></div>


	                <div className="form-row">
	                    <div className="form-group col-md-12" align="center">
						<label htmlFor="observacoes">Observações:</label>
	                        <textarea id="observacoes" name="observacoes" rows="5" className="form-control" 
							 value={this.state.observacoes}
							 onChange={e =>this.setState({observacoes:e.target.value})}>
	            			</textarea>
	                    </div>

	                </div>
	                
	                <div className="form-row mt-3">
	                    <div className="form-group col-md-12" align="center">
	                <div align="center">
						{this.state.atualizando?
							(
								<button type="submit" className="btn btn-primary btn-md"
								onClick={this.atualizar}>&nbsp;Editar&nbsp;&nbsp;</button>) : (
									<button type="submit" className="btn btn-primary btn-md"
									onClick={this.cadastrar}>&nbsp;Salvar&nbsp;&nbsp;</button>
								)
						}
	                <input type="hidden" id="id" name="id" value=""/>
	               
				
					<button className="btn btn-danger btn-md"
					onClick={e => this.props.history.push('/lista')}>Cancelar</button>
	                </div>
					</div>
					</div>

	           
	        </div>
	   	
			<div>
	
      </div>



    </div>
        )}

}
export default withRouter (Cadastro)