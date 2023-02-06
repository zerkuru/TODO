import React from 'react'
const ToDoItem = ({item}) => {
return (
<tr>
<td>{item.project}</td>
<td>{item.text}</td>
<td>{item.creator.name}</td>
<td>{item.creation_date}</td>
<td>{item.update}</td>
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
</tr>
{items.map((item) => <ToDoItem item={item} />)}
</table>
)
}
export default ToDoList