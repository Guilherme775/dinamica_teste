import React, { useState } from 'react';
import { Link, useHistory }  from 'react-router-dom';
import { Layout } from 'react-mdl';
import './styles.css';
import api from '../../services/api';

export default function Login(){
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();

    async function handleLogin(e){
        e.preventDefault();

        try{
            const response = await api.post('login', { name, password });

            history.push('/consulta');
        }catch(err){
            alert('Falha no login');
        }
    }
    return(
        <div className="home">
            <Layout style={{background: 'url(https://storage.googleapis.com/gweb-uniblog-publish-prod/images/Background.2e16d0ba.fill-1422x800.jpg) center / cover'}}>
                <form onSubmit={handleLogin}>
                <div className="login-box">
                    <h1>Login</h1>

                    <div className="textbox">
                        <i className="fas fa-user"></i>
                        <input 
                        type="text" 
                        placeholder="Username"
                        value={name}
                        onChange={e => setName(e.target.value)}
                        />
                    </div>

                    <div className="textbox">
                        <i className="fas fa-lock"></i>
                        <input 
                        type="password" 
                        placeholder="Password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        />
                    </div>

                    <input type="submit" className="btn" value="Sign in"/>
                    
                    <Link to="/registry">
                        <input type="button" className="btn" value="Sign up"/>
                    </Link>
                </div>
                </form>
            </Layout>
        </div>
    );
}