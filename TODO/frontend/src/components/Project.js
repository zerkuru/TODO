import React from 'react'
import {Link} from 'react-router-dom'


const ProjectItem = ({item, deleteProject}) => {
    return (
        <tr>
            <td>{item.project_name}</td>
            <td>{item.reference}</td>
            <td><button onClick={()=>deleteProject(item.id)} type='button'>Delete</button></td>
            <td><button type='button'>Create</button></td>
        </tr>
    )
    };

const ProjectList = ({items}) => {
    return (
    <div>
        <table>
            <tr>
                <th>PROJECT_NAME</th>
                <th>REFERENCE</th>
                <th></th>
            </tr>
        {items.map((item) => <ProjectItem item={item} deleteBook={deleteProject} />)}
        </table>
        <Link to='/projects/create'>Create</Link>
    </div>
)
};
export default ProjectList