import React from 'react'


function Navbar(){
    return(
<div>

<header>
        <nav class="navbar navbar-expand-sm navbar-toggleable-sm navbar-dark bg-dark border-bottom box-shadow ">
            
			<a className="navbar-brand" href="/"> <img src={require('./str_icon.png')}alt="" className="logo" /></a> 
              <a class=" text-light pt-4 navItem1" href="/">Home</a>
                
                    <ul class="navbar-nav flex-grow-1 ml-auto justify-content-end ">
                        <li class="nav-item">
                             <a class="nav-link text-light mr-3 navItem pt-5"  href="#/lista">Consulta</a>
                        </li>
                    <li class="nav-item">
                             <a class="nav-link text-light navItem pt-5 mr-3" href="#/cadastro" >Cadastro</a>
                        </li>
   
                    </ul>
                
         
        </nav>
    </header>
	   
					


        </div>
    )
}

export default Navbar