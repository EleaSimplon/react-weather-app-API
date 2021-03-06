import React, { } from 'react';
import '../App.css';
import '../index.css';

function CardWeather (props) {

    return (
        <div class="App">
            <div class="row">
                <div class="col s12 m6 push-m3">
                    <div class="weather card blue-grey darken-1">
                        <div class="card-content white-text">
                            <span class="card-title">{props.name}</span>
                             <p><img src={"http://openweathermap.org/img/wn/"+props.icon+"@2x.png"}/></p>
                            <span class="temperature">{props.temp}°</span>
                            <div class="wind">Vent {props.wind}km/h (360°)</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
       
    )
    
}

export default CardWeather;