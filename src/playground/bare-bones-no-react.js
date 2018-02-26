var unirest = require('unirest');

const impressions = ['Sylvester Stallone', 'Jimmy Stuart', 'Edward G. Robinson', 'Yoda', 'Bane',
                     'John F. Kennedy', 'Abraham Lincoln', 'Barack Obama', 'George W. Bush',
                     'Donald Trump', 'Jimmy Carter', 'Sean Connery', 'Jar Jar Binks',
                     'Gilbert Gottfried', 'Christopher Walken', 'Batman', 'Matthew McConaughey',
                     'Nicolas Cage', 'Michael Caine', 'Arnold Schwarzenegger', 'Al Pacino', 
                     'Robert Deniro', 'Bette Midler', 'Celine Dion'];

function request(callback) {
    let data = '';
    unirest.get("https://andruxnet-random-famous-quotes.p.mashape.com/?count=10&cat=movies")
           .header("X-Mashape-Key", "CFNTDXmQQzmsh8PVm9cbsQXzJcgVp1ow9lfjsntqC5362GCI83")
           .header("X-Mashape-Host", "andruxnet-random-famous-quotes.p.mashape.com")
           .end(function(result) {
                quote = result.body.quote;
                movie = result.body.author;
                callback(quote, movie);
           })
};

function nextCard(quote, movie) {
    document.getElementById('quote').innerHTML = '"'+quote+'"';
    document.getElementById('movie').innerHTML = 'Movie: ' + movie;
    document.getElementById('impression').innerHTML = 'Impression: ' + impressions[Math.floor(Math.random() * impressions.length)];
}

function update() {
    request(nextCard);
}

window.update = update;

if (document.getElementById('quote').innerHTML == '') {
    update();
};