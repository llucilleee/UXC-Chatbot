const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static('.')); // Serve your test.html

// Example chatbot endpoint
app.post('/api/chat', (req, res) => {
    const { message } = req.body;
    // Add your chatbot logic here
    res.json({ reply: `You said: ${message}` });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});