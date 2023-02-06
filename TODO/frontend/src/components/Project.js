import React from 'react'

const ProjectItem = ({item}) => {
return (
<tr>
<td>{item.project_name}</td>
<td>{item.reference}</td>
</tr>
)
}
const ProjectList = ({items}) => {
return (
<table>
<tr>
<th>PROJECT_NAME</th>
<th>REFERENCE</th>
</tr>
{items.map((item) => <ProjectItem item={item} />)}
</table>
)
}
export default ProjectList