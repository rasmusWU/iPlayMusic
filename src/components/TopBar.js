import "./TopBar.css";

function TopBar({ pagetitle }) {
	return (
		<nav className="TopBar">
			<div className="svgSpacing">
				<i onClick={() => window.history.back()} class="fas fa-chevron-left"></i>
			</div>
			<p>{pagetitle}</p>
			<div className="svgSpacing">
				<i class="fas fa-search"></i>
			</div>
		</nav>
	);
}

export default TopBar;
