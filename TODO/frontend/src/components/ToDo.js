import React from 'react'
import {Link} from 'react-router-dom'


const ToDoItem = ({item, deleteToDo}) => {
return (
<tr>
    <td>{item.project}</td>
    <td>{item.text}</td>
    <td>{item.creator.name}</td>
    <td>{item.creation_date}</td>
    <td>{item.update}</td>
    <td><button onClick={()=>deleteToDo(item.id)} type='button'>Delete</button></td>
    <td><button type='button'>Create</button></td>
</tr>
)
}
const ToDoList = ({items}) => {
return (
<table>
<tr>
<th>PROJECT</th>
<th>TEXT</th>
<th>CREATOR.NAME</th>
<th></th>
</tr>
{items.map((item) => <ToDoItem item={item} deleteToDo={deleteToDo} />)}
</table>
<Link to='/todos/create'>Create</Link>
)
}
export default ToDoList