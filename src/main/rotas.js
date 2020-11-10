import React from 'react'
import{Route, Switch, HashRouter} from 'react-router-dom'
import Cadastro from '../views/cadastro'
import Cadastro1 from '../views/cadastro1'
import Lista from '../views/lista'
import Home from '../views/home'


function Rotas(){

    return(
        <HashRouter>
            <Switch>
                <Route path="/cadastro" component={Cadastro}/>
                <Route path="/cadastro1" component={Cadastro1}/>
                <Route path="/lista" component={Lista}/>
                <Route path="/" component={Home}/>
            </Switch>
        </HashRouter>

    )


}


export default Rotas