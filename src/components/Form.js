import React from "react";

class Form extends React.Component {
  constructor(props) {
    super();
  }
  clickearBoton = e => {
    e.preventDefault();
    const nombre = e.target.children[1].children[1].value;
    const descripcion = e.target.children[2].children[1].value;

    const task = {
      name: nombre,
      description: descripcion
    };

    this.props.onAddTask(task);
    e.target.reset();
  };
  render() {
    return (
      <form onSubmit={this.clickearBoton}>
        <h1> Envia tus tareas </h1>
        <div className="form-group">
          <label htmlFor="formGroupExampleInput">Nombre de la tarea</label>
          <input
            type="text"
            className="form-control"
            id="formGroupExampleInput"
            placeholder="Tarea nueva"
            defaultValue=""
          />
        </div>
        <div className="form-group">
          <label htmlFor="formGroupExampleInput2">
            Descripcion de la tarea
          </label>
          <input
            type="text"
            className="form-control"
            id="formGroupExampleInput2"
            placeholder="Descripcion nueva"
            defaultValue=""
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Enviar
        </button>
      </form>
    );
  }
}
export default Form;
