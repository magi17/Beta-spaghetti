const express = require('express');
const app = express();
const port = 3000;

// List of random responses
const responses = [
    "Hello, world!",
    "How can I assist you today?",
    "This is a random response.",
    "Have a great day!",
    "Stay curious!",
    "Keep exploring!",
    "The sky is the limit.",
    "What can I do for you?",
    "Here's a random thought.",
    "Random response number 10."
];

// Endpoint to get a random response
app.get('/random', (req, res) => {
    const randomResponse = responses[Math.floor(Math.random() * responses.length)];
    res.json({ response: randomResponse });
});

app.get('/shoti', (req, res) => {
    // Path to the JSON file
    const filePath = path.join(__dirname, 'shoti.json');

    // Read the JSON file
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            return res.status(500).json({ error: 'Failed to read the responses file.' });
        }

        try {
            // Parse the JSON data
            const responses = JSON.parse(data);

            // Select a random object
            const randomIndex = Math.floor(Math.random() * responses.length);
            const randomItem = responses[randomIndex];

            // Send the random object as JSON
            res.json(randomItem);
        } catch (error) {
            res.status(500).json({ error: 'Invalid JSON format in the file.' });
        }
    });
});


app.get('/', (req, res) => {
  // Send HTML as the response
  res.send(`
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Responsive Centered Buttons</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>

<div class="button-container">
    <a href="/random" target="_blank"><button>random</button></a>
    <a href="/" target="_blank"><button>Home</button></a>
    <a href="/shoti" target="_blank"><button>shoti</button></a>
    <a href="https://www.twitter.com" target="_blank"><button>Twitter</button></a>
    <a href="https://www.instagram.com" target="_blank"><button>Instagram</button></a>
</div>


</body>
</html>
<style>
/* Reset default margins and paddings */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

/* Body Styling */
body {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #f4f4f4;
    margin: 0;
    font-family: Arial, sans-serif;
    padding: 20px;
}

/* Button Container */
.button-container {
    display: flex;
    flex-direction: column;
    gap: 15px;
    width: 100%;
    max-width: 300px; /* Limits width on larger screens */
}

/* Button Styling */
button {
    padding: 12px;
    font-size: 18px;
    border: none;
    background-color: #007bff;
    color: white;
    cursor: pointer;
    border-radius: 5px;
    transition: background 0.3s, transform 0.2s;
    width: 100%;
}

/* Button Hover Effect */
button:hover {
    background-color: #0056b3;
    transform: scale(1.05);
}

/* Responsive Design */
@media (max-width: 600px) {
    button {
        font-size: 16px;
        padding: 10px;
    }
}

@media (max-width: 400px) {
    button {
        font-size: 14px;
        padding: 8px;
    }
}

</style>


  `);
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
