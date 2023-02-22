import React from 'react'

class ToDoForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {project: 0, creator: 0, text:''}
    }
    handleChange(event)
    {
        this.setState(
            {
                [event.target.text]: event.target.value
            }
        );
    }
    handleSubmit(event) {
      this.props.createToDo(this.state.text, this.state.project, this.state.creator)
event.preventDefault()
}};


render() {
    return (
        <form onSubmit={(event)=> this.handleSubmit(event)}>
            <div className="form-group">
                <label for="login">text</label>
                <input type="text" className="form-control" name="text"
                    value={this.state.text} onChange={(event)=>this.handleChange(event)} />
            </div>
            <div className="form-group">

                <label for="creator">creator</label>
                <input type="number" className="form-control" name="creator"
                value={this.state.creator} onChange={(event)=>this.handleChange(event)} />
            </div>
            <div className="form-group">

                <label for="project">project</label>
                <input type="number" className="form-control" name="project"
                value={this.state.project} onChange={(event)=>this.handleChange(event)} />
            </div>
                <input type="submit" className="btn btn-primary" value="Save" />
        </form>
);

};
export default ToDoForm