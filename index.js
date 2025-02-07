const express = require('express');
const app = express();
const port = 5000;

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

app.get('/user', (req, res) => {
	const fetchRandomVideo = async () => {
  const apiUrl = "https://random-use-api-production.up.railway.app/shoti";

  try {
    const response = await fetch(apiUrl); // Fetch the data
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const re = await response.json(); // Parse the JSON
    const dats = re.url
   // const rvids = re.count
    //const puke = re.data
    //console.log(rvids); // Use the fetched data
    console.log(dats);
    console.log("success")

  } catch (error) {
    console.error("Error fetching data:", error); // Handle errors
  }
};

fetchRandomVideo();
});

/*
app.get('/shoti2', (req, res) => {
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
*/


const data = [
  {
    "name": "damon",
    "description": "💋",
    "url": "https://tikcdn.io/ssstik/7461384205109398790"
  },
  {
    
    "name": "dàmon",
    "description": "",
    "url": "https://tikcdn.io/ssstik/7438207933537586450"
  },
  {
    "name": "MIKHA LIM.",
    "decscription": "Sorry for the messy hair shhdhjs pls tag dc🫶🏻 #BINI #BINIPH #binimikha",
    "url": "https://tikcdn.io/ssstik/7455231006887529735"
  },
  {
  "name": "dàmon",
  "description": "",
  "url": "https://tikcdn.io/ssstik/7428537043879267591"
},
{
  "name": "zang",
  "description": "",
  "url": "https://tikcdn.io/ssstik/7441226770315054356"
},
{
  "name": "sanji",
  "description": "",
  "url": "https://tikcdn.io/ssstik/7450356992557862151"
},
{
  "name": "rhedbustamante01",
  "description": "",
  "url": "https://tikcdn.io/ssstik/7440044797865266448"
},
{
  "name": "tojift2",
  "description": "elevate🔥 #fyp #zyxbca #cbaxyz #tojift2",
  "url": "https://tikcdn.io/ssstik/7451208970238168327"
},
{
  "name": "IG:yujinT_T",
  "description": "#fyp",
  "url": "https://tikcdn.io/ssstik/7448460726731017492"
},
{
  "name": "totorooor",
  "description": "last na",
  "url": "https://tikcdn.io/ssstik/7447098941411265800"
},
{
  "name": "brea",
  "description": "THANKU FOR 100k I love you all rahhhh \u003E0\u003C #fypagee #fyppppppppppppppppppppppp #fypシ゚ #fyp",
  "url": "https://tikcdn.io/ssstik/7460290336695340296"
},
{
  "name": "rhedbustamante01",
  "description": "Happy new year mga bading",
  "url": "https://tikcdn.io/ssstik/7454535513354128647"
},
{
  "name": "noncakeith🇵🇭🇯🇵",
  "description": "#noncakeith",
  "url": "https://tikcdn.io/ssstik/7447900531995036935"
},
{
  "name": "ig: awe.nica_",
  "description": "",
  "url": "https://tikcdn.io/ssstik/7432703839498751240"
},
{
  "name": "noncakeith",
  "description": "#noncakeith",
  "url": "https://tikcdn.io/ssstik/7434485468542078216"
},
{
  "name": "noncakeith🇵🇭🇯🇵",
  "description": "#noncakeith #latina",
  "url": "https://tikcdn.io/ssstik/7456534357235223816"
},
{

"name": "J.SAZ",
"description": "LUPAYPAY #JSAZ",
"url": "https://tikcdn.io/ssstik/7461609351082429697"

},
{

"name": "J.SAZ",
"description": "CUTIE NG RIBBON #JSAZ",
"url": "https://tikcdn.io/ssstik/7461582929454566672"

},
{

"name": "ge",
"description": "",
"url": "https://tikcdn.io/ssstik/7440182775593930005"

},
{

"name": "L",
"description": "",
"url": "https://tikcdn.io/ssstik/7449957349390847239"

},
{

"name": "J.SAZ",
"description": "Draft lang muna#JSAZ",
"url": "https://tikcdn.io/ssstik/7461051510621867280"

},
{

"name": "Ig: jyrhjane",
"description": "The bilbil is not giving chariz HAHAHAH",
"url": "https://tikcdn.io/ssstik/7434946602755722514"

},
{

"name": "_alyssa1",
"description": "",
"url": "https://tikcdn.io/ssstik/7443856642464025874"

},
{

"name": "Matcha Lover",
"description": "Part 2",
"url": "https://tikcdn.io/ssstik/7443705062771182856"

},
{

"name": "Jeshii Rose",
"description": "Draft",
"url": "https://tikcdn.io/ssstik/7447024123319962888"

},
{

"name": "jewel",
"description": "lahat na lng binabaliw",
"url": "https://tikcdn.io/ssstik/7438541778434706706"

},
{

"name": "iizy",
"description": "delikado mahalin",
"url": "https://tikcdn.io/ssstik/7452684453333257480"

},
{

"name": "jeanniefransdolor",
"description": "",
"url": "https://tikcdn.io/ssstik/7461427853050023175"

},
{

"name": "J.SAZ",
"description": "Kakagising lang hehe #JSAZ",
"url": "https://tikcdn.io/ssstik/7458948403678973200"

},
{

"name": "Jeshii Rose",
"description": "Love chubby girls!❤️❤️❤️",
"url": "https://tikcdn.io/ssstik/7452316220902214930"

},
{

"name": ":mayang",
"description": "ayan nanaman #foryoupage #foryou #twerk",
"url": "https://tikcdn.io/ssstik/7449284712310279431"

},
{

"name": "katytastescandy",
"description": "",
"url": "https://tikcdn.io/ssstik/7455695392915623176"

},
{

"name": "ren",
"description": "",
"url": "https://tikcdn.io/ssstik/7459753596196883730"

},
{

"name": "jink",
"description": "",
"url": "https://tikcdn.io/ssstik/7458676582039784722"

},
{

"name": "เมื่อไหร่จะสอบเสร็จ",
"description": "คนข้างนอกจะเหนมั้ย👁️👁️",
"url": "https://tikcdn.io/ssstik/7443458462228630792"

},
{

"name": "jewel",
"description": "",
"url": "https://tikcdn.io/ssstik/7463321706388622609"

},
{

"name": "ari🍓",
"description": "pagod sha",
"url": "https://ssscdn.io/ssstik/7462733518624279826"

},
{

"name": "Hershey",
"description": "HAHAHAHa bored naman sya HAHaa!",
"url": "https://tikcdn.io/ssstik/7460477799682395399"

},
{

"name": "dirungzi",
"description": "다음년에 해외여행어디가게~~~ #fyp",
"url": "https://tikcdn.io/ssstik/7444496886318337288"

},
{

"name": "เพนเพ่นเพ้นท์",
"description": "",
"url": "https://tikcdn.io/ssstik/7457747307736386834"

}
 ];
 
app.get('/shoti', (req, res) => {
  const randomIndex = Math.floor(Math.random() * data.length);
  res.json(data[randomIndex]);
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
