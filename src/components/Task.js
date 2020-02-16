import React from "react";

class Task extends React.Component {
  changeStatus = () => {
    this.props.onChangeState(this.props.task);
  };
  editInformation = () => {
    this.props.onEnviarId(this.props.task.id);
  };
  render() {
    const { name, description } = this.props.task;
    return (
      <>
        <div className="card mb-3">
          <div className="card-header">Tarea</div>
          <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <p className="card-text">{description}</p>
            <button
              className="btn btn-primary mr-3"
              onClick={this.changeStatus}
            >
              Completada
            </button>

            <button className="btn btn-primary" onClick={this.editInformation}>
              Editame
            </button>
          </div>
        </div>
      </>
    );
  }
}

export default Task;
