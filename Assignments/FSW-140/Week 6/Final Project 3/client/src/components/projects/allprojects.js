import React, { Component } from 'react';

export default class AllUsers extends Component {
  constructor(props) {
      super(props)
      // console.log(props)
      this.state = {
        projects: []
      }
      this.logChange = this.logChange.bind(this);
  }
  componentDidMount() {
    let self = this;
    fetch('/projects')
      .then(res => res.json())
      .then(projects => self.setState({ projects: projects }));
  }
  logChange(e) {
        this.setState({[e.target.name]: e.target.value});  
    }
  render() {
    return (
        <div className="Users container">
          <h1>Projects</h1>
          <table className="table">
          <thead>
            <tr>
              <th>Project Title</th>
              <th>Project Description</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
              {this.state.members.map(project =>
                <tr key={project.id}>
                  <td>{project.title} {project.title}</td>
                  <td>{project.description}</td>
                  <td><button className="btn btn-primary">Edit</button> <button className="btn btn-danger">Delete</button></td>
                </tr>
              )}
          </tbody>
          </table>
        </div>
    );
  }
}