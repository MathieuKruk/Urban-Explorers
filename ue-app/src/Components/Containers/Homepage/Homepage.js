import React from 'react';
import Parallax from 'react-rellax';
import './style/Homepage.css';

import TitleExplorers from './style/img/svg/TitleExplorers.svg';
import TitleUrban from './style/img/svg/TitleUrban.svg';
import Vinyle from './style/img/svg/Vinyle.svg';
import Crowd1 from './style/img/Crowd1.png';
import Crowd2 from './style/img/Crowd2.png';
import Synthesizer from './style/img/svg/synthesizer.svg';
import Skate from './style/img/svg/skateboard.svg';
import Spray from './style/img/svg/spray.svg';

class Homepage extends React.Component{
	render(){
		return(
			<div className="containerHomepage">
                <Parallax speed={-4}><img src={TitleUrban} alt="TitleUrban" class="TitleUrban"/></Parallax>
                <Parallax speed={-2}><img src={TitleExplorers} alt="TitleExplorers" class="TitleExplorers"/></Parallax>
                <Parallax speed={-1}><img src={Vinyle} alt="Vinyle" class="Vinyle"/></Parallax>
                <Parallax class="BackColor"></Parallax>
                <Parallax speed={-5}><img src={Crowd1} alt="Crowd1" class="Crowd1"/></Parallax>
                <Parallax speed={-7}><img src={Crowd2} alt="Crowd2" class="Crowd2"/></Parallax>

                <Parallax speed={-2} class="WelcomeSection">
                    <div class="WelcomeBox1">
                        <h1>Welcome to Urban Explorers!</h1>
                        <p>This website is curently under devlopment.</p>
                    </div>
                    <div class="WelcomeBox2">
                        <h1>Welcome to Urban Explorers!</h1>
                        <p>This website is curently under devlopment.</p>
                    </div>
                </Parallax>
                <Parallax speed={-1}><img src={Synthesizer} alt="Synthesizer" class="Synthesizer"/></Parallax>
                <Parallax speed={-3}><img src={Skate} alt="Skate" class="Skate"/></Parallax>
                <Parallax speed={-2}><img src={Spray} alt="Spray" class="Spray"/></Parallax>
			</div>

            
		);
	}
}
export default Homepage;