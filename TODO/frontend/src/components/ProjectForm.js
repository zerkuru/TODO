import React from 'react'

class ProjectForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {project_name: '', reference: ''}
    }
    handleChange(event)
    {
        this.setState(
            {
                [event.target.project_name]: event.target.value
            }
        );
    }
    handleSubmit(event) {
this.props.createProject(this.state.project_name, this.state.reference)
event.preventDefault()
}
};


render() {
    return (
        <form onSubmit={(event)=> this.handleSubmit(event)}>
            <div className="form-group">
                <label for="project_name">project_name</label>
                <input type="text" className="form-control" name="project_name"
                    value={this.state.project_name} onChange={(event)=>this.handleChange(event)} />
            </div>
            <div className="form-group">

                <label for="reference">reference</label>
                <input type="text" className="form-control" name="reference"
                value={this.state.reference} onChange={(event)=>this.handleChange(event)} />
            </div>
                <input type="submit" className="btn btn-primary" value="Save" />
        </form>
);

};
export default BookForm