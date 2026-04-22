import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './style.css'
import headerImg from '../assets/img/header-img.svg';
import ArrowRightCircle from '../assets/img/ArrowRightCircle.svg';

function Banner() 
{
    return(
        <section className="banner">
            <div className="container">
                <div className="row align-items-center">
                    
                    <div className="col-12 col-md-6">
                        <span className='tagline'>
                            welcome to my portfolio!
                        </span>
                        <h1>
                            Hi! i'm roqaya web designer!
                        </h1>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting
                            industry. Lorem Ipsum has been the industry's standard dummy text ever since the
                            1500s, when an unknown printer took a galley of type and scrambled it to make a type
                            specimen book.</p>
                        <button>
                            Let's Connect! <img src={ArrowRightCircle} alt="arrow" width="25px" />
                        </button>
                    </div>

                    <div className="col-12 col-md-6">
                        <img src={headerImg} alt="astronaut" className="astronaut-img" />
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Banner;