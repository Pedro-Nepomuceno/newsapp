const Navbar = () => (
	<nav
		style={{
			display: "flex",
			justifyContent: "space-between",
			padding: "15px",
		}}>
		<img src={logo} alt="logo" style={{ height: "30px" }} />
		<div>
			<button style={{ marginRight: "15px" }}>Home</button>
			<button>Search</button>
		</div>
	</nav>
);

export default Navbar;
