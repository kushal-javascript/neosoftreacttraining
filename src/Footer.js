import { connect } from "react-redux";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";

function Footer(props) {
  return (
    <footer className="footer footer-section">
      <div className="footer-data">
        <div className="footer-link col-sm-12">
          <ul>
            <li>
              <Link to="#">Search Terms</Link>
            </li>
            <li>
              <Link to="#">Privacy and Cookie Policy</Link>
            </li>
            <li>
              <Link to="#">Orders and Returns</Link>
            </li>
            <li>
              <Link to="#">Advanced Search</Link>
            </li>
            <li>
              <Link to="#">Contact Us</Link>
            </li>
          </ul>
        </div>
        <small className="copyright col-sm-12">
          <span>Copyright © {new Date().getUTCFullYear()} Kushal Dani. All rights reserved.</span>
        </small>
      </div>
    </footer>
  );
}
Footer = withRouter(Footer);
export default connect()(Footer);
