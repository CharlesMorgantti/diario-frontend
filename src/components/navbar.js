import React from 'react'

function Navbar(){
    return(
<div>

        <header>
		<nav className="navbar navbar-inverse navbar navbar-dark bg-light"
		>
			<div className="container-fluid" >
				<div className="navbar-header">
					
					<div className="row">
						<div className="col-2"   >
					<a className="navbar-brand" href="/"> </a>LOGO </div>
						<div align="center" className="col-9" 
						><h2 className="mt-4" >App Diário de Treinamento</h2>

					</div>
					</div>
				</div>
			</div>
		</nav>
	</header>


        </div>
    )
}

export default Navbar