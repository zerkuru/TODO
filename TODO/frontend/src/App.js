import React from 'react';
import logo from './logo.svg';
import './App.css';
import UserList from './components/User.js';
import ProjectList from './components/Project.js';
import ToDoList from './components/ToDo.js';
import {BrowserRouter, Route, Routes, Navigate, Link} from 'react-router-dom';
import axios from 'axios';

const NotFound404 = ({ location }) => {
    return (
    <div>
        <h1>Страница по адресу '{location.pathname}' не найдена</h1>
    </div>
    )
    };

createToDo(text, project, creator); {
    const headers = this.get_headers()
    const data = {text: text, creator: creator, project: project}
    axios.post(`http://127.0.0.1:8000/api/todos/`, data, {headers, headers})
    .then(response => {
    let new_todo = response.data
    const todo = this.state.todos.filter((item) => item.id ===
        new_todo.text)[0]
    new_todo.creator = creator
this.setState({todos: [...this.state.todos, new_todo]})
}).catch(error => console.log(error))
};

createProject(project_name, reference); {
    const headers = this.get_headers()
    const data = {project_name: project_name, reference: reference}
    axios.post(`http://127.0.0.1:8000/api/projects/`, data, {headers, headers})
    .then(response => {
    let new_project = response.data
    const project = this.state.projects.filter((item) => item.id ===
    new_project.project_name)[0]
    new_project.project_name = project_name
    this.setState({projects: [...this.state.projects, new_project]})
    }).catch(error => console.log(error))
};

class App extends React.Component {
    constructor(props) {
        super(props)
            this.state = {
                'users': [],
                'projects': [],
                'todos': []
            }
        };
    load_data() {
        axios.get('http://127.0.0.1:8000/api/users/')
            .then(response => {
                this.setState({users: response.data})
            }).catch(error => console.log(error))
        axios.get('http://127.0.0.1:8000/api/projects/')
            .then(response => {
                this.setState({projects: response.data})
            }).catch(error => console.log(error))
        axios.get('http://127.0.0.1:8000/api/todos/')
            .then(response => {
                this.setState({todos: response.data})
            }).catch(error => console.log(error))
    };

    deleteProject(id) {
        const headers = this.get_headers()
        axios.delete(`http://127.0.0.1:8000/api/projects/${id}`, {headers, headers})
            .then(response => {
            this.setState({books: this.state.projects.filter((item)=>item.id !==
            id)})
            }).catch(error => console.log(error))
        };

    deleteToDo(id) {
        const headers = this.get_headers()
        axios.delete(`http://127.0.0.1:8000/api/todos/${id}`, {headers, headers})
            .then(response => {
            this.setState({books: this.state.todos.filter((item)=>item.id !==
            id)})
            }).catch(error => console.log(error))
        };

    componentDidMount() {
    this.load_data()
    };

    render () {
    return (
        <div className="App">
            <BrowserRouter>
            <nav>
               <ul>
                   <li>
                    <Link to='/'>Users</Link>
                    </li>
                   <li>
                    <Link to='/projects'>Projects</Link>
                   </li>
                   <li>
                    <Link to='/todos'>ToDos</Link>
                   </li>
               </ul>
            </nav>
            <Routes>
                <Route exact path='/' component={() => <UserList items={this.state.users} />} />
                <Route exact path='/projects' component={() => <ProjectList items={this.state.projects} deleteProject={(id)=>this.deleteProject(id)}/>} />
                <Route exact path='/projects/create' component={() => <ProjectForm createProject={(project_name, reference) => this.createProject(project_name, reference)}/>} />
                <Route exact path='/todos' component={() => <ToDoList items={this.state.todos} deleteToDo={(id)=>this.deleteToDo(id)} />} />
                <Route exact path='/todos/create' component={() => <TodoForm createToDo={(text, project, creator) => this.createToDo(text, project, creator)}/>} />
                <Route path="/user/:id">
                    <UserProjectList items={this.state.projects} />
                </Route>
                <Route path="/user/:id/todos">
                    <UserToDoList items={this.state.todos} />
                </Route>
                <Navigate from='/users' to='/' />
                <Route component={NotFound404} />
            </Routes>
        </BrowserRouter>
    </div>)
}
};
export default App;
