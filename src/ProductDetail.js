function ProductDetail(props) {
    return(
		<div className="card" style={{width: "18rem"}} id={props.productdata.cakeid}>
		  <img src={props.productdata.image} className="card-img-top" alt="..." style={{height: "350px"}}/>
		  <div className="card-body">
		    <h5 className="card-title">{props.productdata.name}</h5>
		    <p className="card-text">{props.productdata.price}</p>
		  </div>
		</div>
	);
}

export default ProductDetail;