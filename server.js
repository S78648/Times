
const http = require('http');
const url = require('url');


//Data
const data = [
    {
        title: "Amy Schneider’s Jeopardy! Streak Ends at 40 Consecutive Wins and $1.4 Million",
        link: "https://time.com/6142934/amy-schneider-jeopardy-streak-ends/",
        readingTime: "1 minute",
        datetime: "19 March 2024: 10:00 am"
    },
    {
        title: "'Writing With Fire' Shines a Light on All-Women News Outlet",
        link: "https://time.com/6142628/writing-with-fire-india-documentary/",
        readingTime: "1 minute",
        datetime: "19 March 2024: 11:30 am"
    },
    {
        title: "Moderna Booster May Wane After 6 Months",
        link: "https://time.com/6142852/moderna-booster-wanes-omicron/",
        readingTime: "1 minute",
        datetime: "19 March 2024: 1:45 pm"
    },
    {
        title: "Pressure Mounts for Biden to Nominate a Black Woman to the Supreme",
        link: "https://time.com/6142743/joe-biden-supreme-court-nominee-black-woman-campaign-promise/",
        readingTime: "1 minute",
        datetime: "19 March 2024: 3:20 pm"
    },
    {
        title: "The James Webb Space Telescope Is in Position—And Now We Wait",
        link: "https://time.com/6142769/james-webb-space-telescope-reaches-l2/",
        readingTime: "1 minute",
        datetime: "19 March 2024: 4:50 pm"
    },
    {
        title: "We Urgently Need a New National COVID-19 Response Plan",
        link: "https://time.com/6142718/we-need-new-national-covid-19-response-plan/",
        readingTime: "1 minute",
        datetime: "19 March 2024: 6:15 pm"
    }
];



// Create a server
const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true);

    res.setHeader('Access-Control-Allow-Origin', '*');

    // Handle GET request
    if (req.method === 'GET' && parsedUrl.pathname === '/getTimeStories') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(data));
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('404 Not Found');
    }
});

const PORT = 3000;


server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});