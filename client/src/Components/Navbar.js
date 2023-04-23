const Navbar = ({navbar}) => {
  return (
    <>
      <div className="navbar" ref={navbar}>
        <div className="logoArea"></div>
        <div className="navOptionsArea">
          <ul>
            <li className="navOptions">Home</li>
            <li className="navOptions">Events</li>
            <li className="navOptions">Our Team</li>
            <li className="navOptions">About</li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navbar;
