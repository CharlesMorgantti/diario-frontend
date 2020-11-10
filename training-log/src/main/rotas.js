import React from 'react'
import{Route, Switch, HashRouter} from 'react-router-dom'
import Cadastro from '../views/cadastro'
import Lista from '../views/lista'
import Home from '../views/home'
import Listaum from '../views/listaum'



function Rotas(){

    return(
        <HashRouter>
            <Switch>
               
                <Route path="/cadastro/:id?" component={Cadastro}/>
                <Route path="/listaum/:dataInicial?" component={Listaum}/>
                <Route path="/lista" component={Lista}/>
                <Route path="/" component={Home}/>
            </Switch>
        </HashRouter>

    )


}


export default Rotas