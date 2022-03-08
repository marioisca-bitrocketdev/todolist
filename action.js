const taskList = [
  {
    id: 123,
    nomeTask: "Andare al ristorante 'Apud Jatum'",
    assegnato: "Mario",
    priorita: "Alta",
    completato: false,
  },
];

const obj = {
  id: 123,
  nomeTask: "Andare al ristorante 'Apud Jatum'",
  assegnato: "Mario",
  priorita: "Alta",
  completato: false,
};

const addTask = (arrayTaskList, taskDaAggiungere) => {
  const newArray = [...arrayTaskList, taskDaAggiungere];
  return newArray;
};

const deleteTask = (arrayTaskList, idTask) => {
  const newArray = arrayTaskList.filter((task) => task.id !== idTask);
  return newArray;
};

const modifyTask = (arrayTaskList, idTask, nuovoValore) => {
  const newArray = arrayTaskList.map((task) => {
    if (task.id === idTask) {
      task.nomeTask = nuovoValore;
    }
  });
  return newArray;
};
