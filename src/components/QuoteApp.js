import React from 'react';
import Header from './Header.js';
import Card from './Card.js';
import NextButton from './NextButton.js';
var unirest = require('unirest');

const impressions = ['Sylvester Stallone', 'James Stewart', 'Edward G. Robinson', 'Yoda', 'Bane',
                     'John F. Kennedy', 'Abraham Lincoln', 'Barack Obama', 'George W. Bush',
                     'Donald Trump', 'Jimmy Carter', 'Sean Connery', 'Jar Jar Binks',
                     'Gilbert Gottfried', 'Christopher Walken', 'Batman', 'Matthew McConaughey',
                     'Nicolas Cage', 'Michael Caine', 'Arnold Schwarzenegger', 'Al Pacino', 
                     'Robert De Niro', 'Bette Midler', 'Celine Dion', 'Fran Drescher', 'Oprah Winfrey',
                     'Roseanne Barr', 'Carol Channing', 'Joan Rivers', 'Keanu Reeves', 'Goofy Goof',
                     ];

const tmdb_api_key = "1feaca5dd33e56039469ade211b65750";
const flickr_api_key = "a13c6391ad0f202436d9b8f4dffb6431";

export default class QuoteApp extends React.Component {
  state = {
    quote: '',
    movie: '',
    poster: '',
    overview: '',
    release_date: '',
    impression: '',
    impression_photo: ''
  };

  update = () => {
    const me = this;
    unirest.get("https://andruxnet-random-famous-quotes.p.mashape.com/?count=10&cat=movies")
            .header("X-Mashape-Key", "CFNTDXmQQzmsh8PVm9cbsQXzJcgVp1ow9lfjsntqC5362GCI83")
            .header("X-Mashape-Host", "andruxnet-random-famous-quotes.p.mashape.com")
            .end(function(response) {
              me.setState((state) => ({
                quote: response.body.quote,
                movie: response.body.author,
                impression: impressions[Math.floor(Math.random() * impressions.length)]
            }), me.updateImages);
            });
  }

  updateImages = () => {
    const me = this;
    const tmdb_api_base_url = 'https://api.themoviedb.org/3/';
    const poster_search_url = tmdb_api_base_url + 'search/movie?api_key=' + tmdb_api_key +
                       '&language=en-US&query=' + this.state.movie + '&page=1&include_adult=false';
    unirest.get(poster_search_url)
            .end(function(response) {
              const poster_end_path = response.body.results[0].poster_path;
              const poster_image_path = 'https://image.tmdb.org/t/p/w500' + 
                                        poster_end_path;
              me.setState((state) => ({
                poster: poster_image_path,
                overview: response.body.results[0].overview,
                release_date: response.body.results[0].release_date
              }));
          });

    const flickr_search_base = "https://api.flickr.com/services/rest/" + 
                               "?method=flickr.photos.search&api_key=" + 
                               flickr_api_key + "&sort=relevance" + "&text=";
    const flickr_search_url = flickr_search_base + this.state.impression + 
                              "&format=json&nojsoncallback=?";
    unirest.get(flickr_search_url)
           .end(function(response) {
             const img = response.body.photos.photo[Math.floor(Math.random() * 20)];
             const flickr_image_path = "https://farm" + img.farm + ".staticflickr.com/" + img.server + 
                             "/" + img.id + "_" + img.secret + ".jpg";
             console.log('FLICKR:', flickr_image_path);
             me.setState((state) => ({
               impression_photo: flickr_image_path
             }));
           });
  }

  componentDidUpdate() {
    console.log(this.state);
  }
  
  render() {
    if (this.state.quote == '') {
      this.update();
    }
    return (
      <div>
        <Header />
        <div className="container">
          <NextButton
            update={this.update}
          />
          <Card
            quote={this.state.quote}
            movie={this.state.movie}
            poster={this.state.poster}
            overview={this.state.overview}
            release_date={this.state.release_date}
            impression={this.state.impression}
            impression_photo={this.state.impression_photo}
          />
        </div>
      </div>
    );
  }
}
