class TaskRepository {
  async asyncTaskList(key) {
    const apiUrl = key === undefined ? "/api/tasks" : `/api/tasks/${key}`;
    const result = await fetch(apiUrl, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }).catch((err) => {
      console.log(err);
      return [];
    });
    return result.json();
  }

  async ayncAddTask(task) {
    const result = await fetch("/api/task", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(task),
    }).catch((err) => {
      console.log(err)
      return JSON.parse({status: 400});
    });
    return result.json();
  }

  async ayncUpdateTask(task) {
    const result = await fetch(`/api/task/${task.idx}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(task),
    }).catch((err) => {
      console.log(err)
      return JSON.parse({status: 400});
    });
    return result.json();
  }
}

export default TaskRepository;
