import React from 'react';
import { Jumbotron, Carousel } from 'react-bootstrap';

import './style/CarouselHeader.css'

import News1 from './style/img/news1.jpg'
import News2 from './style/img/news2.jpg'
import News3 from './style/img/news3.jpg'

const CarouselHeader = () => {
  
        return  <div className={'CarouselHeader'}>
        
                  <Jumbotron>
                     
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