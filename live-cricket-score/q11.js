// const express = require('express');
// const request = require('request');

// const app = express();
// const port = process.env.PORT || 8080;

// // Replace 'YOUR_CRIC_API_KEY' with your CricAPI key
// const cricApiKey = 'fd33ef5c-7e32-4e74-9b06-9168d0e366cb';

// // Route to fetch live cricket score
// app.get('~/score', (req, res) => {
//   const apiUrl = `https://cricapi.com/api/cricketScore?apikey=${cricApiKey}`;

//   request(apiUrl, (error, response, body) => {
//     if (!error && response.statusCode === 200) {
//       const scoreData = JSON.parse(body);
//       res.send(`
//         <html>
//           <head>
//             <title>Live Cricket Score</title>
//           </head>
//           <body>
//             <h1>Live Cricket Score</h1>
//             <p>${scoreData.score}</p>
//           </body>
//         </html>
//       `);
//     } else {
//       res.status(500).send('<p>Error fetching live score.</p>');
//     }
//   });
// });

// // Start the server
// app.listen(port, () => {
//   console.log(`Server is running on http://localhost:${port}`);
// });


async function fetchFromOffset(offset) {
    return await fetch("https://api.cricapi.com/v1/countries?apikey=fd33ef5c-7e32-4e74-9b06-9168d0e366cb&offset=" + offset)
        .then(data => data.json())
        .then(data => {
            if (data.status != "success") { alert("Failed"); return; }
            let datarray = data.data;
            if (!datarray)
                return [];
            else if (offset >= data.info.totalRows)
                return datarray;
            else
                return fetchFromOffset(offset + 25)
                    .then(function (data) {
                        return datarray.concat(data);
                    });
        })
        .catch(e => console.log);
}
fetchFromOffset(0)
    .then(function (data) {
        console.log("Complete data got!", data);
    })
    .catch(e => console.log);