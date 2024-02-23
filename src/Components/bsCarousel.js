import Carousel from 'react-bootstrap/Carousel';
import img1 from '../Assets/LOL_Logo.jpg';
import img2 from '../Assets/Optic.jpg';
import img3 from '../Assets/Pokemon.png';
import 'bootstrap/dist/css/bootstrap.css';
//import card_info from './cardData';

function bsCarousel() {
    return (
        <div>
        <Carousel>
        <Carousel.Item>
          <img style={{height:'90vh', opacity: 0.6, /*filter: "grayscale(100%)"*/}}
            className="d-block w-100"
            src={img3}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Pokemon Patch Notes</h3>
            <p>The all new patchnotes for Pokemon Emeerald</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img style={{height:'90vh', opacity: 0.6}}
            className="d-block w-100"
            src={img2}
            alt="Second slide"
          />
    
          <Carousel.Caption>
            <h3>Latest Roster Update for Optic</h3>
            <p>Newest changes in the Optic's COD team for the upcoming MWIII season</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img style={{height:'90vh', opacity: 0.6}}
            className="d-block w-100"
            src={img1}
            alt="Third slide"
          />
    
          <Carousel.Caption>
            <h3>League of Legends Patch Notes</h3>
            <p>
            The all new patchnotes for LoL
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      </div>
      )
    }

export default bsCarousel