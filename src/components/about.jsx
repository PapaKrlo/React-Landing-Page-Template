import image from "../images/invest-img.png"
import image2 from "../images/invest-img-mobile.png"

export const About = (props) => {
  return (
    <div id="about">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="about-text">
              <h1 className="big-text">Inversión,<span className="small-text"><br></br> no donación</span></h1>
              {/* eslint-disable-next-line */}
              <a className='anchor-i' id='inversion'></a>
              <p>{props.data ? props.data.paragraph : "loading..."}</p>
              <img 
              className="wide-image"
              src={image} 
              alt="Imagen prestamo"
              />
              <img 
              className="wide-image-2"
              src={image2} 
              alt="Imagen prestamo"
              />
              <button type='' className='btn btn-custom btn-lg small-screen-btn'>
              Invierte con nosotros
              </button>
            </div>
          </div>
          <div className="col-md-6 col-xs-12">
            <div className="about-button">
              <button type='' className='btn btn-custom btn-lg browser-btn'>
                  Invierte con nosotros
                </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
