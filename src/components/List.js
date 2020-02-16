import React from "react";
import Task from "./Task";

class List extends React.Component {
  pendingTasks = () => this.props.tasksList.filter(task => !task.done);

  render() {
    return (
      <>
        {this.pendingTasks().map((task, key) => (
          <Task
            task={task}
            onChangeState={() => this.props.onChangeTaskStatus(task)}
            onEnviarId={() => this.props.enviarIdAPadre(key, task)}
            key={key}
          />
        ))}
      </>
    );
  }
}

export default List;
