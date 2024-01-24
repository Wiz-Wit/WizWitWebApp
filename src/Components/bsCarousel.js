import Carousel from 'react-bootstrap/Carousel';
import img1 from '../Assets/Batman_Arkham_City_Game_Cover.jpg';
import img2 from '../Assets/Kingdom_Hearts.jpg';
import img3 from '../Assets/Pokemon.png';
import 'bootstrap/dist/css/bootstrap.css';

function bsCarousel() {
    return (
        <div>
        <Carousel>
        <Carousel.Item>
          <img style={{height:'50vh', marginTop:'15vh'}}
            className="d-block w-100"
            src={img1}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img style={{height:'90vh'}}
            className="d-block w-100"
            src={img2}
            alt="Second slide"
          />
    
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img style={{height:'90vh'}}
            className="d-block w-100"
            src={img3}
            alt="Third slide"
          />
    
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      </div>
      )
    }

export default bsCarousel