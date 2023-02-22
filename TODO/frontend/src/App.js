import React from 'react';
import logo from './logo.svg';
import './App.css';
import UserList from './components/User.js';
import ProjectList from './components/Project.js'
import ToDoList from './components/ToDo.js'
import {HashRouter, Route} from 'react-router-dom'
import axios from 'axios';


class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            'users': []
        }
    }
    componentDidMount() {
        axios.get('http://127.0.0.1:8000/api/user')
        .then(response => {
            const users = response.data
            this.setState(
                {
                     'users': users
                }
            )
        }).catch(error => console.log(error))
    }

    componentDidMount() {
        axios.get('http://127.0.0.1:8000/api/user')
        .then(response => {
            const users = response.data
            this.setState(
                {
                     'users': users
                }
            )
        }).catch(error => console.log(error))
    }


    render () {
        return (
            <div>
                <UserList users={this.state.users} />
            </div>
        )
    }
};


export default App;