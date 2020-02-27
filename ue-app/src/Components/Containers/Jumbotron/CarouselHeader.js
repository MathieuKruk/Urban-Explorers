import React from 'react';
import { Jumbotron, Carousel } from 'react-bootstrap';

import './style/CarouselHeader.css'
import Particles from 'react-particles-js';

import News1 from './style/img/news1.jpg'
import News2 from './style/img/news2.jpg'
import News3 from './style/img/news3.jpg'

const CarouselHeader = () => {
  
        return  <div className={'CarouselHeader'}>
        
                  <Jumbotron  className={'fluid'}>
                    <Particles className={'particles'} params={{
                                // PARTICLES
                                particles: {
                                  "number": {
                                    "value": 160,
                                    "density": {
                                      "enable": true,
                                      "value_area": 1600
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
                                // style={{
                                //   width: '100%',
                                //   height: '50%',
                                //   backgroundImage: `url(${logo})` 
                                // }},
                                "retina_detect": true
                    }}
                    /> 
                  </Jumbotron>
                    {/* <Carousel>
                      <Carousel.Item>
                        <img
                          className="d-block w-100"
                          src={News1}
                          alt="First slide"
                        />
                        <Carousel.Caption>
                          <h3>News n°1 Title</h3>
                          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                      </Carousel.Item>
                      <Carousel.Item>
                        <img
                          className="d-block w-100"
                          src={News2}
                          alt="Second slide"
                        />
                        <Carousel.Caption>
                          <h3>News n°2 Title</h3>
                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                      </Carousel.Item>
                      <Carousel.Item>
                        <img
                          className="d-block w-100"
                          src={News3}
                          alt="Third slide"
                        />
                        <Carousel.Caption>
                          <h3>News n°3 Title</h3>
                          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                      </Carousel.Item>
                    </Carousel> */}

               </div>
}

export default CarouselHeader;