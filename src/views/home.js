import React from 'react'

class Home extends React.Component{
    render(){
        return(
<div>



<div class="container">
			<div id="list-home" class="row">
				<div class="col-4">
					<div class="list-group" id="list-tab" role="tablist">
						<a class="list-group-item list-group-item-action active"
							id="list-spring-boot-list" data-toggle="list" href="#spring-boot"
							role="tab" aria-controls="spring-boot">O que é</a> <a
							class="list-group-item list-group-item-action" id="list-sts-list"
							data-toggle="list" href="#sts" role="tab" aria-controls="sts">Como funciona</a> <a class="list-group-item list-group-item-action"
							id="list-thymeleaf-list" data-toggle="list" href="#thymeleaf"
							role="tab" aria-controls="thymeleaf">O que são séries?</a> <a
							class="list-group-item list-group-item-action"
							id="list-webjars-list" data-toggle="list" href="#webjars"
							role="tab" aria-controls="webjars">O que é volume total?</a> <a
							class="list-group-item list-group-item-action"
							id="list-hibernate-list" data-toggle="list" href="#hibernate"
							role="tab" aria-controls="hibernate">Interval training</a> 
	
					</div>
				</div>
				<div class="col-8">
					<div class="tab-content" id="nav-tabContent">
						<div class="tab-pane fade show active" id="spring-boot"
							role="tabpanel" aria-labelledby="list-spring-boot-list">
							
							Diário de treinamento é um app desenvolvido para treinadores de atletas de alta performance. Sua função é registrar as sessões de treino desses atletas e arquivar esses dados, dando maior precisão e agilidade na preparação para as competições.
						</div>
						<div class="tab-pane fade" id="sts" role="tabpanel"
							aria-labelledby="list-sts-list">
							
							O menu de funções do app se encontra na barra lateral do site.
						 Na função <b>cadastrar</b> o treinador poderá salvar os dados da sessão
						  de treino do dia. Completando os campos com a descrição dos exercícios,
						   carga utilizada, séries e repetições. Há ainda um espaço para anotações
						    gerais e observações que serão feitas pelo técnico. Na página <b>consultar</b>
						     o treinador terá acesso à uma sessão específica, ao digitar a data no primeiro campo
						      e clicar no botão "consultar", uma lista de sessões realizadas em um 
						      determinado período de tempo ao digitar duas datas, ou poderá simplesmente 
						      acessar a lista de sessões em ordem cronológica de cadastro. 
						</div>
						<div class="tab-pane fade" id="thymeleaf" role="tabpanel"
							aria-labelledby="list-thymeleaf-list">
							As séries são definidas como “um grupo de repetições de um exercício desenvolvido sem interrupção”. A repetição, em geral, consiste em duas fases: o levantamento de carga (ação concêntrica do músculo) e o retorno da carga à posição inicial (ação excêntrica do músculo).
						</div>
						<div class="tab-pane fade" id="webjars" role="tabpanel"
							aria-labelledby="list-webjars-list">
							Volume é a quantidade de estímulos de treinamento em um determinado período, e tem vários componentes. Em musculação, os mais importantes componentes do volume são o número de exercícios, o número de séries, e a frequência semanal. O número de exercícios e o número de séries determinam a duração das sessões.
						</div>
						<div class="tab-pane fade" id="hibernate" role="tabpanel"
							aria-labelledby="list-hibernate-list">
						O treinamento intervalado, ou "interval training", é o meio de preparação física que compreende alternâncias entre períodos de trabalho e recuperação (esforço e contra-esforço), com intensidades e durações controladas, ao mesmo tempo em que exige uma orientação das variáveis de treinamento nos objetivos propostos. A melhor utilização desse método de treinamento ocorre quando se objetiva a resistência anaeróbica, já que esse tipo de treino é o principal meio para a melhoria dessa valência física. O treinamento intervalado, na busca da resistência anaeróbica, provoca situações de débito de O2 com uma ação adequada sobre a intensidade dos estímulos ou sobre os intervalos entre eles.
						</div>
					
					</div>
				</div>
			</div>
		</div>
		


</div>
        )
    
}
}
export default Home