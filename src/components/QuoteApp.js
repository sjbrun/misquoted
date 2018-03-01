import React from 'react';
import Header from './Header.js';
import Card from './Card.js';
import ControlGroup from './ControlGroup.js';
var unirest = require('unirest');

const impressions = {'easy': ['Arnold Schwarzenegger', 'Sylvester Stallone',
                              'Sean Connery', 'John F. Kennedy', 'Donald Trump',
                              'Christopher Walken', 'Batman', 'Keanu Reeves',
                              'Gilbert Gottfried', 'George W. Bush', 'Yoda',
                              'Darth Vader'
                             ],
                     'medium': ['James Stewart','Barack Obama', 'Matthew McConaughey',
                                'Nicolas Cage', 'Michael Caine', 'Al Pacino',
                                'Bane', 'Abraham Lincoln', 'Jar Jar Binks',
                                'Fran Drescher', 'Celine Dion', 'Robert De Niro',
                                'Goofy Goof', 'Werner Herzog', 'Mickey Mouse'
                               ],
                     'difficult': ['Edward G. Robinson', 'Jimmy Carter', 'Roseanne Barr', 
                                   'Joan Rivers', 'Bette Midler', 'Oprah Winfrey',
                                   'Carol Channing', 'Chewbacca'
                                  ]
                    };

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
    impression_photo: '',
    selectedDifficulty: 'easy'
  };

  update = () => {
    const me = this;
    unirest.get('https://andruxnet-random-famous-quotes.p.mashape.com/?count=10&cat=movies')
            .header('X-Mashape-Key', 'CFNTDXmQQzmsh8PVm9cbsQXzJcgVp1ow9lfjsntqC5362GCI83')
            .header('X-Mashape-Host', 'andruxnet-random-famous-quotes.p.mashape.com')
            .end(function(response) {
              me.setState((state) => ({
                quote: response.body.quote,
                movie: response.body.author,
                impression: impressions[state.selectedDifficulty][Math.floor(Math.random() * impressions[state.selectedDifficulty].length)]
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

    const flickr_search_base = 'https://api.flickr.com/services/rest/' + 
                               '?method=flickr.photos.search&api_key=' + 
                               flickr_api_key + '&sort=relevance' + '&text=';
    const flickr_search_url = flickr_search_base + this.state.impression + 
                              '&format=json&nojsoncallback=?';
    unirest.get(flickr_search_url)
           .end(function(response) {
             const img = response.body.photos.photo[Math.floor(Math.random() * 20)];
             const flickr_image_path = 'https://farm' + img.farm + '.staticflickr.com/' + img.server + 
                             '/' + img.id + '_' + img.secret + '.jpg';
             console.log('FLICKR:', flickr_image_path);
             me.setState((state) => ({
               impression_photo: flickr_image_path
             }));
           });
  }

  handleChangeDifficulty = (changeEvent) => {
    this.setState({
      selectedDifficulty: changeEvent.target.value
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
          <div>
            <ControlGroup
              selectedDifficulty={this.state.selectedDifficulty}
              handleChangeDifficulty={this.handleChangeDifficulty}
              update={this.update}
            />
          </div>
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
