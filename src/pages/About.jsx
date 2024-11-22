
import { Link } from "react-router-dom";








  

export default function About() {
    return (

        <>
        <div className="about">
            <Link to="/" className="btn btn-white " aria-hidden="true">
            <i className="fa-solid fa-bars fa-beat fa-5xl fa-border-white" aria-hidden="true"></i></Link>
            <button className="rounded-full ...">Save Changes</button>
            {/* <p><i className="fa-solid fa-coffee fa-2xl"></i> When my six o’clock alarm buzzes, I require a pot of good java. </p> */}
        </div>

        </>
    );
    }
