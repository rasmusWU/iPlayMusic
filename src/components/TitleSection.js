import "./TitleSection.css";

function TitleSection({ title }) {
	return (
		<section className="TitleSection">
			<h3>{title}</h3>
			<p>View All</p>
		</section>
	);
}

export default TitleSection;
