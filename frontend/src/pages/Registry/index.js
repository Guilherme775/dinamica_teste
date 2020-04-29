import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Layout } from 'react-mdl';
import './styles.css';
import api from '../../services/api';

export default function Registry(){
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail ] = useState('');
    const history = useHistory();

    async function handleRegister(e){
        e.preventDefault();

        try{
            const response = await api.post('consultor', { name, password, email });

            history.push('/consultor');
        }catch(err){
            alert('Falha no registro');
        }
    }
    return(
        <div className="home">
            <Layout style={{background: 'url(https://storage.googleapis.com/gweb-uniblog-publish-prod/images/Background.2e16d0ba.fill-1422x800.jpg) center / cover'}}>
                <form onSubmit={handleRegister}>
                <div className="login-box">
                    <h1>Register</h1>

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

                    <div className="textbox">
                        <i className="fas fa-envelope"></i>
                        <input 
                        type="text" 
                        placeholder="Email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        />
                    </div>

                    <input type="submit" className="btn" value="Register"/>
                    
                    <Link to="/consultor">
                        <input type="button" className="btn" value="Back to login page"/>
                    </Link>
                </div>
                </form>
            </Layout>
        </div>
    );
}