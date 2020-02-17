import React from "react";

class Form extends React.Component {
  constructor(props) {
    super();
  }

  render() {
    const { onChange, onSendForm, clickearBoton } = this.props;

    return (
      <form onSubmit={clickearBoton}>
        <h1> Envia tus tareas </h1>
        <div className="form-group">
          <label htmlFor="formGroupExampleInput">Nombre de la tarea</label>
          <input
            type="text"
            className="form-control"
            id="formGroupExampleInput"
            placeholder="Tarea nueva"
            value={onSendForm.name}
            name="name"
            onChange={onChange}
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
            value={onSendForm.description}
            name="description"
            onChange={onChange}
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
