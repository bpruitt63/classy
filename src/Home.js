import React from 'react';
import ZipCodeForm from './ZipCodeForm';
import Data from './Data';
import WeatherApi from './WeatherApi';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.handleZipCodeChange = this.handleZipCodeChange.bind(this);
        this.handleZipCodeSubmit = this.handleZipCodeSubmit.bind(this);
        this.state = {zipCode: undefined,
                        data: '',
                        weather: undefined};
    };

    handleZipCodeChange(e) {
        this.setState({data: e.target.value});
    };

    async handleZipCodeSubmit(e) {
        e.preventDefault();
        const weather = await WeatherApi.getWeather(this.state.data);
        delete weather.current.condition;
        this.setState({zipCode: this.state.data, weather});
    };

    render() {
        return (
            <div>
                <h1>Welcome to Classy, {this.props.name}!</h1>
                <h2>You are one classy SOB!</h2>
                <ZipCodeForm zipCode={this.state.zipCode}
                                data={this.state.data}
                                handleZipCodeChange={this.handleZipCodeChange}
                                handleZipCodeSubmit={this.handleZipCodeSubmit}/>
                {this.state.weather &&
                    <>
                        <h3>
                            Here's the weather in {this.state.weather.location.name},
                            {' '}you classhole you.
                        </h3>
                        {Object.keys(this.state.weather.current).map(k => (
                            <div key={k}>
                            <Data name={k}
                                    value={this.state.weather.current[k]} />
                        </div>
                        ))}
                    </>}
            </div>
        )
    };
};

export default Home;