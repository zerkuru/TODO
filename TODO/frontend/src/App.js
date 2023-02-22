import React from 'react';
import logo from './logo.svg';
import './App.css';
import UserList from './components/User.js';
import ProjectList from './components/Project.js'
import ToDoList from './components/ToDo.js'
import {HashRouter, Route, Link, Switch} from 'react-router-dom'
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
        axios.get('http://127.0.0.1:8000/api/todos')
        .then(response => {
            const todos = response.data
            this.setState(
                {
                     'todos': todos
                }
            )
        }).catch(error => console.log(error))
    }

    componentDidMount() {
        axios.get('http://127.0.0.1:8000/api/projects')
        .then(response => {
            const projects = response.data
            this.setState(
                {
                     'projects': projects
                }
            )
        }).catch(error => console.log(error))
    }

    const NotFound404 = ({ location }) => {
    return (
<div>
<h1>Страница по адресу '{location.pathname}' не найдена</h1>
</div>
)
}


    render () {
        return (
            <div>
                <UserList users={this.state.users} />
            </div>
            <div>
                <ProjectList projects={this.state.projects} />
            </div>
            <div>
                <ToDoList todos={this.state.todos} />
            </div>


<div className="App">
<HashRouter>
<nav>
<ul>
<li>
<Link to='/'>ToDoApp</Link>
</li>
<li>
<Link to='/users'>Users</Link>
</li>
<li>
<Link to='/projects'>Projects</Link>
</li>
<li>
<Link to='/todos'>ToDo lists</Link>
</li>
</ul>
</nav>
<Route exact path='/' component={() => <UserList
items={this.state.users} />} />
<Route exact path='/users' component={() => <UserList
items={this.state.books} />} />
<Route exact path='/projects' component={() => <ProjectList
items={this.state.books} />} />
<Route exact path='/todos' component={() => <ToDoList
items={this.state.books} />} />
<Switch>
<Route exact path='/' component={() => <AuthorList
items={this.state.authors} />} />
<Route exact path='/books' component={() => <BookList
items={this.state.books} />} />
<Route component={NotFound404} />
</Switch>

</HashRouter>
</div>
        )
    }


}

};


export default App;