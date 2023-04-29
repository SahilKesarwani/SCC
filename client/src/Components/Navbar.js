import { NavLink } from "react-router-dom";

const Navbar = ({ navbar }) => {
	return (
		<>
			<div className="navbar" ref={navbar}>
				<div className="logoArea">
					<NavLink to="/" />
				</div>
				<div className="navOptionsArea">
					<ul>
						<li className="navOptions">
							<NavLink to="/">Home</NavLink>
						</li>
						<li className="navOptions">
							<NavLink to="/events">Events</NavLink>
						</li>
						<li className="navOptions">
							<NavLink to="/ourteam">Our Team</NavLink>
						</li>
						<li className="navOptions">
							<NavLink to="/about">About</NavLink>
						</li>
					</ul>
				</div>
			</div>
		</>
	);
};

export default Navbar;
