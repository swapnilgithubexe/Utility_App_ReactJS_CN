
const todos = [
    {
        "text": "Go to Gym at 9", "completed": false
    },
    {
        "text": "Go to Office at 10", "completed": false
    },
    {
        "text": "Meeting at 11", "completed": false
    }
]

module.exports.get = (req, res) => {
    return res.end(JSON.stringify(todos));
}

module.exports.create = (req, res) => {
    const { text, completed } = req.body;
    if (!text) return res.status(400).json({ error: "Text is required" })
    const newTodo = { text, completed };
    todos.push(newTodo);
    return res.status(201).json(newTodo);
}