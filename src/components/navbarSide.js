import React from 'react'

function NavbarSide(){
    return(
<div>

     
	<div className="layout-main mt-3">	
	
		<aside >
			<nav className="sidebar sidebar-open" >
				<ul className="nav nav-pills ">
					<li className="nav-item" ><a className="nav-link " href="/" > <i
							className="oi oi-home"></i> <span>Home</span>
					</a></li>
				</ul>

				<ul className="nav nav-pills">
					<li className="nav-item"><span className="nav-link active" >Sessão de Treinamento</span></li>
					<li className="nav-item"><a className="nav-link"
						href="#/cadastro"> <i className="oi oi-plus"></i> <span>Cadastrar</span>
					</a></li>
					<li className="nav-item"><a className="nav-link"
						href="#/cadastro1"> <i className="oi oi-plus"></i> <span>Cadastrar1</span>
					</a></li>
					<li className="nav-item"><a className="nav-link"
						href="#/lista"> <i className="oi oi-spreadsheet"></i>
							<span>Consultar </span>
					</a></li>
				</ul>

			</nav>
		</aside>

        </div>
        </div>
    )
}

export default NavbarSide