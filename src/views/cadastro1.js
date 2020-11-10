import React from 'react'
import axios from 'axios'
import {withRouter} from 'react-router-dom'
import SessaoService from '../app/service/sessaoService'
import ApiService from '../app/apiservice'

class Cadastro1 extends React.Component{
	state={
		id:null,
	//	descricao:'',
        dataInicial:'',
        exercicio:[{
         //   id:null,
            descricao: ''
        }],
		observacoes:''
	}
/*	state = {
		exercicios: [{descricao: ''
		}]
		}*/
	constructor(){
		super();
		this.sessaoService = new SessaoService();
		this.apiservice = new ApiService();
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
/*	handleChange= (event)=>{
		const value = event.target.value
		const name = event.target.name
		this.setState({[name]: value})
	}*/

	cadastrar =()=>{
    //    const { descricao } = this.state
     //   const exercicio = {descricao}
	
		axios.post('http://localhost:8080/salvar1',
		{	
			dataInicial:this.state.dataInicial,
            observacoes:this.state.observacoes,
            exercicio:this.state.exercicio
		}
	//	,{headers: {'Access-Control-Allow-Origin': '*'}}
		).then(
			//response => response.json()
			response=>{
		//	this.headers.append('Content-Type','application/http://localhost:5000');
		
			//this.headers.append('Content-Type','application/json');
			console.log(this.state)
			this.props.history.push('/lista')
			console.log(response)
		
			//headers={"content-type": "application/json"}
		}).catch(erro=>{
			console.log(erro.response)
		}
		)
	}

    onAddChild = () => {
        this.setState(prevState => {
          return {
            exercicio: [
              ...prevState.exercicio,
              {
                descricao: ''
              }
            ]
          };
        });
      };
    render(){
        return(
        <div>


<div className="container" id="cadastro" style={{width:'70%'}}>
	            
	     
	                
	


                      
                                               {this.state.exercicio.map((m, i) => (
  <div className="form-row">
  <div className="form-group col-md-6">
      <label htmlFor="">Exercício teste</label>
      <input type="text" className="form-control"  placeholder="Descrição:"
             autofocus="autofocus" name="descricao" id="descricao" 
             value={m.descricao}
             onChange={e => this.handleChange(e, i)}/>
             
     
  </div>
</div>
                        ))}
                         <div>
          <button onClick={this.onAddChild}>Add Dosis</button>
        </div>

<div className="form-row">




    
	            <div className="form-group col-md-4">
	    
	             <span >Data da sessão:</span> </div>
	            <div className="form-group col-md-4">
	            <input className="form-control mr-sm-2" type="date" aria-label="Search"
	            name="dataInicial" id="dataInicial" value={this.state.dataInicial}
				onChange={e =>this.setState({dataInicial:e.target.value})}/> </div>
	         
	           
	
	                    </div>



	                <div className="form-row">
	                    <div className="form-group col-md-6">
	                        <label htmlFor="">Exercício 1</label>
	                        <input type="text" className="form-control"  placeholder="Descrição:"
	                               autofocus="autofocus" name="descricao" 
								   value={this.state.descricao}
								   onChange={this.handleChange}/>
								   
	                       
	                    </div>
	                    <div className="form-group col-md-2">
	                        <label for="">Carga:</label>
	                        <input  className="form-control"  
	                                name="carga" />
	                        <div className="invalid-feedback">
	
	                        </div>
	                    </div>
	                    <div className="form-group col-md-2">
	                        <label for="">Repetições:</label>
	                        <input type="text" class="form-control"
	                               data-mask-reverse="true" name="repeticoes" />
	                        <div className="invalid-feedback">
	
	                        </div>
	                    </div>
	                    <div className="form-group col-md-2">
	                        <label for="">Séries:</label>
	                        <input type="text" class="form-control" 
	                            name="series" id="series"/>
	                        <div className="invalid-feedback">
	
	                        </div>
	                    </div>
	                </div>
	              
	                    <div className="form-row">
	                    <div className="form-group col-md-6">
	                        <label for="">Exercício 2</label>
	                        <input type="text" class="form-control"  placeholder="Descrição:"
	                               autofocus="autofocus" name="descricao1" />
	                        <div className="invalid-feedback">
	
	                        </div>
	                    </div>
	                    <div className="form-group col-md-2">
	                        <label for="">Carga:</label>
	                        <input  className="form-control" 
	                               name="carga1" />
	                        <div className="invalid-feedback">
	
	                        </div>
	                    </div>
	                    <div className="form-group col-md-2">
	                        <label for="">Repetições:</label>
	                        <input type="text" className="form-control"
	                               data-mask-reverse="true" name="repeticoes1" />
	                        <div className="invalid-feedback">
	
	                        </div>
	                    </div>
	                    <div className="form-group col-md-2">
	                        <label for="">Séries:</label>
	                        <input type="text" className="form-control" 
	                               data-mask-reverse="true" name="series1" />
	                        <div className="invalid-feedback">
	
	                        </div>
	                    </div>
	                </div>
	              
	                

	      
	                <div className="form-row">
	                    <div className="form-group col-md-10" align="center">
						<label htmlFor="observacoes">Observacoes</label>
	                        <input id="observacoes" name="observacoes"  className="form-control" 
							 value={this.state.observacoes}
							 onChange={e =>this.setState({observacoes:e.target.value})}/>
	            
	                    </div>

	                </div>
	                
	                <div className="form-row">
	                    <div className="form-group col-md-10" align="center">
	                <div align="center">
	                <input type="hidden" id="id" name="id" value=""/>
	                <button type="submit" className="btn btn-primary btn-md"
					onClick={this.cadastrar}>Salvar</button>
				
	                </div></div></div>
	            
	               
	               
	           
				<button  className="btn btn-primary btn-md"
					onClick={this.teste}>Testar</button>


                    
	        </div>
	   	
		

    </div>
        )}

}
export default withRouter (Cadastro1)