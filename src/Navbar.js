import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function Navbar(props) {
	var count = 0;

	let search = function (event) {
		event.preventDefault();
		alert("Search Button Click = " + count);
		console.log("Search Button Click = " + count);
		count++;
		console.log(event);
	};

	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-light">
			<div className="collapse navbar-collapse" id="navbarSupportedContent">
				<ul className="navbar-nav mr-auto">
					{props.customerdetail &&
						<li className="nav-item">
							<a className="nav-link" href="#">Hello {props.customerdetail},</a>
						</li>
					}
					<li className="nav-item active">
						<Link to="/"> <a className="nav-link">Home <span className="sr-only">(current)</span></a></Link>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="#">Link</a>
					</li>
					<li className="nav-item dropdown">
						<a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
							Dropdown
				    </a>
						<div className="dropdown-menu" aria-labelledby="navbarDropdown">
							<a className="dropdown-item" href="#">Action</a>
							<a className="dropdown-item" href="#">Another action</a>
							<div className="dropdown-divider"></div>
							<a className="dropdown-item" href="#">Something else here</a>
						</div>
					</li>
					<li className="nav-item">
						<a className="nav-link disabled" href="#" tabIndex="-1" aria-disabled="true">Disabled</a>
					</li>
				</ul>
				<form className="form-inline my-2 my-lg-0">
					<input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
					<Link to="/search">
						{/* <button onClick={search} className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button> */}
						<button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
					</Link>
					<div>
						{props.customerdetail ?
							<button className="btn btn-danger">Logout</button>
							:
							<Link to="/login">  <button className="btn btn-primary">Login</button></Link>
						}
					</div>
				</form>
			</div>
		</nav>
	);
}

export default Navbar;