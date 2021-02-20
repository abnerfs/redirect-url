const express = require('express');

const PORT = process.env.PORT || 8239;
const URL_REDIRECT = process.env.URL_REDIRECT || 'https://anchor.fm/cooptalkgames';

const app = express();

app.get('*', (req, res) => {
    res.redirect(URL_REDIRECT);
})

app.listen(PORT, () => {
    console.log(`Server started at ${PORT}`)
})