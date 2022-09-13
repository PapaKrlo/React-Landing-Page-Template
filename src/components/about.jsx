import image from "../images/invest-img.png"

export const About = (props) => {
  return (
    <div id="about">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6">
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
            </div>
          </div>
          <div className="col-xs-12 col-md-6">
            <div className="about-button">
              <button type='submit' className='btn btn-custom btn-lg'>
                  Invierte con nosotros
                </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
