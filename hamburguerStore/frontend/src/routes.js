import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Logon from './pages/Logon';
import Register from './pages/Register';
import Profile from './pages/Profile';
import CadastrarLanches from './pages/CadastrarLanches';
import EnderecoEntrega from './pages/EnderecoEntrega';
import Menu from './pages/MainMenu';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Logon} />
                <Route path="/register" component={Register} />
                
                <Route path="/profile" component={Profile} />

                <Route path="/menu" component={Menu} />

                <Route path="/lanches/cadastrar" component={CadastrarLanches} />
                <Route path="/endereco" component={EnderecoEntrega}/>
            </Switch>
        </BrowserRouter>
    );
}