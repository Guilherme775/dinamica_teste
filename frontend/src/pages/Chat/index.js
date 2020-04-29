import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import './styles.css';
import api from '../../services/api';

export default function Chat(){
    const[messages, setMessages] = useState([]);
    const[message, setMessage] = useState('');
    const history = useHistory();
    const name = localStorage.getItem('name');

    useEffect(() => {
        api.get('messages').then(response => {
            setMessages(response.data);
        })
    });

    async function handleMessage(e){
        e.preventDefault();

        try{
            const response = await api.post('messages', { message, name });
            history.push('/chat');
        }catch(err){
            alert('Falha no envio da mensagem');
        }
    }

    return(
        <div className="chat">
            <div className="container">
                <div className="msg-header">
                    <div className="msg-header-img">
                        <img src="https://www.w3schools.com/howto/img_avatar.png"/>
                    </div>
                    <div className="active">
                        <h4>{name}</h4>
                        <h6>Online</h6>
                    </div>
                    <div className="header-icons">
                        <i className="fas fa-phone"></i>
                        <i className="fas fa-video"></i>
                        <i className="fas fa-info-circle"></i>
                    </div>
                </div>
                <div className="chat-page">
                    <div className="msg-inbox">
                        <div className="chats">
                            <div className="msg-page">
                                <div className="received-chats">
                                    <div className="received-msg">
                                        <div className="received-msg-inbox">
                                            {messages.map(message => (
                                                <div>
                                                <img src="https://www.w3schools.com/howto/img_avatar.png"/>
                                                <p>{message.message}</p>
                                                <span className="time">{(new Intl.DateTimeFormat('pt-BR').format(message.cratedAt))}, {message.name}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <form onSubmit={handleMessage}>
                        <input 
                        type="text" 
                        className="form-control" 
                        placeholder="Write a message..."
                        value={message}
                        onChange={e => setMessage(e.target.value)}/>

                        <input type="submit" className="btn" value="Send"/>
                    </form>
                </div>
            </div>
        </div>
    );
}