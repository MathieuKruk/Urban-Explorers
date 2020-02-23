import React from 'react';
import './style/ribbonInfos.css';

class Ribbon extends React.Component{
    render() {
        return  <div class="ticker-wrap mb-4">
                    <div class="ticker">
                        <div class="ticker__item">Urban Explorers website-application /</div>
                        <div class="ticker__item">🎹📻🎤🎧💿🎛️</div>
                        <div class="ticker__item">V1.0.0. Work in progress /</div>
                        <div class="ticker__item">🎹📻🎤🎧💿🎛️</div>
                        <div class="ticker__item">Credits: Mathieu Kruk /</div>
                        <div class="ticker__item">🎹📻🎤🎧💿🎛️</div>
                    </div>
                </div>
                     
    }  
}

export default Ribbon;