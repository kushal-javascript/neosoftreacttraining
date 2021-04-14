var carouselOne = "./first.jpeg";
var carouselTwo = "./two.jpeg";
var carouselThree = "./three.jpeg";

var carouselStyle = {
	height : "300px"
}
function Carousel() {
	return(
		<div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
		  <div className="carousel-inner">
		    <div className="carousel-item active">
		      <img src={carouselOne} className="d-block w-100" alt="One" style={carouselStyle}/>
		    </div>
		    <div className="carousel-item">
		      <img src={carouselTwo} className="d-block w-100" alt="two" style={carouselStyle}/>
		    </div>
		    <div className="carousel-item">
		      <img src={carouselThree} className="d-block w-100" alt="three" style={carouselStyle}/>
		    </div>
		  </div>
		  <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
		    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
		    <span className="sr-only">Previous</span>
		  </a>
		  <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
		    <span className="carousel-control-next-icon" aria-hidden="true"></span>
		    <span className="sr-only">Next</span>
		  </a>
		</div>
	);
}
export default Carousel;