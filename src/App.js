import React from "react";
import List from "./components/List";
import Form from "./components/Form";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      tasks: [
        {
          id: 1,
          name: "Actualizar GitHub",
          description: "Subir repos terminados",
          done: false
        },
        {
          id: 2,
          name: "Estudiar Node.js",
          description: "Generar un proyecto para aprender node.js",
          done: false
        }
      ],
      form: { name: "", description: "" }
    };
  }
  onChangeForm = e => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value
      }
    });
  };
  clickearBoton = e => {
    e.preventDefault();

    const nombre = e.target.children[1].children[1].value;
    const descripcion = e.target.children[2].children[1].value;

    const task = {
      name: nombre,
      description: descripcion
    };

    this.addTask(task);
    this.setState({
      form: { name: "", description: "" }
    });
    e.target.reset();
  };
  addTask = task => {
    const taskPushed = this.state.tasks;

    if (task.id) {
      if (task.name !== "Editando") {
        const newTask = {
          id: task.id,
          name: "Editando",
          description: "Envia los nuevos datos desde el formulario",
          done: false
        };

        taskPushed.splice(task.id - 1, 1, newTask);

        this.setState({
          tasks: taskPushed,
          form: { name: task.name, description: task.description }
        });
      }
    } else {
      const editable = taskPushed.find(element => element.name === "Editando");
      if (editable) {
        const newTask = {
          id: editable.id,
          name: task.name,
          description: task.description,
          done: false
        };
        taskPushed.splice(editable.id - 1, 1, newTask);

        this.setState({
          tasks: taskPushed
        });
      } else {
        const id = taskPushed[taskPushed.length - 1].id + 1;
        const newTask = {
          id: id,
          name: task.name,
          description: task.description,
          done: false
        };
        taskPushed.push(newTask);
      }
      this.setState({
        tasks: taskPushed
      });
    }
  };
  changeTaskStatus = task => {
    const taskUpdated = this.state.tasks.map(taskEl => {
      if (taskEl.id === task.id) taskEl.done = !taskEl.done;
      return taskEl;
    });
    this.setState({
      tasks: taskUpdated
    });
  };
  recibirIdDelHijo = key => {
    const taskList = this.state.tasks;
    const taskEdit = taskList[key];

    this.addTask(taskEdit);
  };

  render() {
    return (
      <div className="container">
        <div className="row mt-3">
          <div className="col mb-3">
            <Form
              onAddTask={this.addTask}
              onChange={this.onChangeForm}
              onSendForm={this.state.form}
              clickearBoton={this.clickearBoton}
            />
          </div>
          <div className="col">
            <List
              tasksList={this.state.tasks}
              onChangeTaskStatus={this.changeTaskStatus}
              enviarIdAPadre={this.recibirIdDelHijo}
            />
          </div>
        </div>
      </div>
    );
  }
}
export default App;
