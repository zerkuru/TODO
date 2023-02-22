import React from 'react';
import logo from './logo.svg';
import './App.css';
import UserList from './components/User.js';
import ProjectList from './components/Project.js'
import ToDoList from './components/ToDo.js'
import {HashRouter, Route, Link, Switch} from 'react-router-dom'
import axios from 'axios';

const NotFound404 = ({ location }) => {
return (
<div>
<h1>Страница по адресу '{location.pathname}' не найдена</h1>
</div>
)
}


class App extends React.Component {
constructor(props) {
super(props)
this.state = {
'users': [],
'projects': [],
'todos': []
}
}
load_data() {
axios.get('http://127.0.0.1:8000/api/users/')
.then(response => {
this.setState({users: response.data})
}).catch(error => console.log(error))
axios.get('http://127.0.0.1:8000/api/projects/')
.then(response => {
this.setState({projects: response.data})
}).catch(error => console.log(error))
}
axios.get('http://127.0.0.1:8000/api/todos/')
.then(response => {
this.setState({todos: response.data})
}).catch(error => console.log(error))
}

componentDidMount() {
this.load_data()
}
render() {
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
<Switch>
<Route exact path='/' component={() => <UserList
items={this.state.users} />} />
<Route exact path='/projects' component={() => <ProjectList
items={this.state.projects} />} />
<Route exact path='/todos' component={() => <ToDoList
items={this.state.todos} />} />
<Route path="/user/:id">
<UserProjectList items={this.state.projects} />
</Route>
<Route path="/user/:id/todos">
<UserProjectList items={this.state.todos} />
</Route>
<Redirect from='/users' to='/' />
<Route component={NotFound404} />
</Switch>
</BrowserRouter>
</div>
)
}
}
export default App;




export default App;