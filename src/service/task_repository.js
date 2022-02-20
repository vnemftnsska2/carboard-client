class TaskRepository {
  constructor(API_SERVER) {
    this.SERVER = API_SERVER;
  }

  async asyncTaskList(key) {
    const result = await fetch(`${this.SERVER}/api/tasks/t/${key}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }).catch((err) => {
      console.log(err);
    });
    return result.json();
  }

  async asyncTaskById(key) {
    const result = await fetch(`${this.SERVER}/api/tasks/${key}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }).catch((err) => {
      console.log(err);
      return JSON.parse({ status: 400 });
    });
    return result.json();
  }

  async ayncAddTask(task) {
    const result = await fetch(`${this.SERVER}/api/task`, {
      method: "POST",
      body: task,
    }).catch((err) => {
      console.log(err);
      return JSON.parse({ status: 400 });
    });
    return result.json();
  }

  async ayncUpdateTask(task) {
    const result = await fetch(`${this.SERVER}/api/task/${task.idx}`, {
      method: "POST",
      body: task,
    }).catch((err) => {
      console.log(err);
      return JSON.parse({ status: 400 });
    });
    return result.json();
  }

  async ayncDeleteTask(task) {
    const result = await fetch(`${this.SERVER}/api/task/${task.idx}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(task),
    }).catch((err) => {
      console.log(err);
      return JSON.parse({ status: 400 });
    });
    return result.json();
  }

  async ayncDeleteReleaseImg(idx) {
    const result = await fetch(`${this.SERVER}/api/task/image/${idx}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ idx }),
    }).catch((err) => {
      console.log(err);
      return JSON.parse({ status: 400 });
    });
    return result.json();
  }
}

export default TaskRepository;
