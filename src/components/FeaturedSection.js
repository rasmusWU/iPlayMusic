import './FeaturedSection.css';

function FeaturedSection({title, category}) {
    return (
        <article className="FeaturedSection">
            <section className="TextSection">
            <h2>{title}</h2>
            <p>{category}</p>
            </section>
        </article>
    )
}

export default FeaturedSection;