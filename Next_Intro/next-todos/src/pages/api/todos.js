let todos = [
  { id: 1, task: "Trening" },
  { id: 2, task: "Handle dagligvarer" }
];

export default function handler(req, res) {
  if (req.method === 'GET') {
    return res.status(200).json(todos);
  }
  
  if (req.method === 'POST') {
    const { task, id } = req.body;
    // Må legge til id og task 
    if (!id || !task || task.trim() === '') {
        return res.status(400).json({ error: 'Both id and task are required.' });
    }

    let newId = Number(id);
    const newTodo = {
        id: newId,
        task: task.trim() 
    };
    todos.push(newTodo);
    return res.status(201).json(newTodo);
}

  if (req.method === 'DELETE') {
    const { id } = req.body;

    // Må legge til en id for å slette en todo ellers får vi en bad request
    if(!id) {
      return res.status(400).json({ error: 'An id is required to delete' });
    }
    const initialLenght = todos.length;

    todos = todos.filter(todo => todo.id !== Number(id));

    // Må gi en id som finnes ellers får vi en bad request
    if(initialLenght === todos.length){
      return res.status(404).json({ error: 'Todo task not found'});
    } else {
      return res.status(200).json({ success: true});
    }
  }

  res.status(405).end();
}
