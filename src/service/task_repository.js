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
    });
    return result.json();
  }
}

export default TaskRepository;
