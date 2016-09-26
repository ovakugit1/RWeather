var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('openWeatherMap');
var ErrorModal = require('ErrorModal');

var Weather = React.createClass({
  getInitialState: function () {
    return{isLoading: false};
  },
  handleSearch: function (location) {
    var that = this;
    this.setState({
      isLoading: true,
      errorMessage: undefined
    });
    openWeatherMap.getTemp(location).then(function(temp){
      that.setState({
        location: location,
        temp: temp,
        isLoading: false
      });
    }, function(err){
      that.setState({isLoading: false,
        errorMessage: err.message
      });
    });
  },
  render: function() {
    var {isLoading, temp, location, errorMessage} = this.state;
    function renderMessage (){
      if(isLoading){
        return <h3 className="text-center">Fetching weather...</h3>;
      }
      else if(temp && location){
        return <WeatherMessage location={temp} temp={location}/>;
      }
    }

    function renderError() {
      if(errorMessage && typeof errorMessage === 'string'){
        return (
          <ErrorModal message={errorMessage} title="Yaramin basi"/>
        );
      }
    }

    return (
      <div>
        <h1 className="text-center">Get Weather</h1>
          <WeatherForm onSearch={this.handleSearch}/>
          {renderMessage()}
          {renderError()}
      </div>
    );
  }
});

module.exports = Weather;
