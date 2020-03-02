import React from 'react';
import './style/ParticlesBackground.css'

import Particles from 'react-particles-js';

class ParticlesBackground extends React.Component{
	render(){
		return(
			<div className="containerParticles" id="particles-js">
				<Particles className={'particles'} params={{
                                // PARTICLES
                                particles: {
                                  "number": {
                                    "value": 160,
                                    "density": {
                                      "enable": true,
                                      "value_area": 2000,
                                    }
                                  },
                                  // Color
                                  "color": {
                                    "value": "#85e085"
                                  },
                                  // Shape
                                  "shape": {
                                    "type": "polygon",
                                    "stroke": {
                                      "width": 1,
                                      "color": "#000000"
                                    },
                                    "polygon": {
                                      "nb_sides": 8
                                    },
                                    "image": {
                                      "src": "img/github.svg",
                                      "width": 100,
                                      "height": 100
                                    }
                                  },
                                  // Opacity
                                  "opacity": {
                                    "value": 0.8,
                                    "random": false,
                                    "anim": {
                                      "enable": false,
                                      "speed": 1,
                                      "opacity_min": 0.1,
                                      "sync": false
                                    }
                                  },
                                  // Size
                                  "size": {
                                    "value": 3,
                                    "random": true,
                                    "anim": {
                                      "enable": false,
                                      "speed": 40,
                                      "size_min": 0.1,
                                      "sync": false
                                    }
                                  },
                                  // Lines
                                  "line_linked": {
                                    "enable": true,
                                    "distance": 173.62070190114673,
                                    "color": "#ffffb3",
                                    "opacity": 0.8681035095057337,
                                    "width": 1.1048590120982065
                                  },
                                  // Movement
                                  "move": {
                                    "enable": true,
                                    "speed": 2,
                                    "direction": "none",
                                    "random": false,
                                    "straight": false,
                                    "out_mode": "out",
                                    "bounce": false,
                                    "attract": {
                                      "enable": false,
                                      "rotateX": 600,
                                      "rotateY": 1200
                                    }
                                  }
                                },
                                // Interactivity
                                "interactivity": {
                                  "detect_on": "canvas",
                                  "events": {
                                    "onhover": {
                                      "enable": true,
                                      "mode": "repulse"
                                    },
                                    "onclick": {
                                      "enable": false,
                                      "mode": "push"
                                    },
                                    "resize": false
                                  },
                                  "modes": {
                                    "grab": {
                                      "distance": 400,
                                      "line_linked": {
                                        "opacity": 1
                                      }
                                    },
                                    "bubble": {
                                      "distance": 400,
                                      "size": 20,
                                      "duration": 2,
                                      "opacity": 8,
                                      "speed": 3
                                    },
                                    "repulse": {
                                      "distance": 100,
                                      "duration": 0.4
                                    },
                                    "push": {
                                      "particles_nb": 4
                                    },
                                    "remove": {
                                      "particles_nb": 2
                                    }
                                  }
                                },
                                "style":{
                                   width: '100%',
                                   height: '150%', 
                                 },
                                "retina_detect": true
                    }}
                    />
			</div>
		);
	}
}
export default ParticlesBackground;