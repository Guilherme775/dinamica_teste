import React from 'react';
import { Link }from 'react-router-dom';
import { Layout } from 'react-mdl';
import './styles.css';

export default function Home(){
    return(
        <div className="home">
            <Layout style={{background: 'url(https://storage.googleapis.com/gweb-uniblog-publish-prod/images/Background.2e16d0ba.fill-1422x800.jpg) center / cover'}}>
                <div className="login-box">
                    <h1>Entrar como:</h1>

                    <Link to="/consultor">
                        <input type="button" className="btn" value="Consultor"/>
                    </Link>
                    
                    <Link to="/user">
                        <input type="button" className="btn" value="Usuário"/>
                    </Link>
                </div>
            </Layout>
        </div>
    );
}