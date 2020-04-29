import React, { Component } from 'react';
import './styles.css';
import api from '../services/api';
import ReactTable from 'react-table';
import 'react-table/react-table.css';

export default class Table extends Component{
    constructor(props){
        super(props);

        this.state = {
            messages: []
        }
    }

    componentDidMount(){
        this.loadMessages();
    }

    loadMessages = async () => {
        const response = await api.get('messages');

        const messages = response.data;

        this.setState({messages: messages});
    }

    render(){
        const columns = [
                {
                    Header: "User",
                    accessor: "name"
                },
                {
                    Header: "Message",
                    accessor: "message",
                    sortable: false,
                    filterable: false
                },
                {
                    Header: "Date",
                    accessor: "createdAt",
                    sortable: false,
                    filterable: false
                },
            ]
        return(
            <ReactTable
                columns={columns}
                data={this.state.messages}
                filterable
                noDataText={"Não há mensagens cadastradas"}
                defaultPageSize={10}
            >

            </ReactTable>
        );
    }
}