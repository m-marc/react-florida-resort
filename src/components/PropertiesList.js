import {Link} from "react-router-dom";
import {useAppSelector} from "../redux/hooks";

const PropertiesList = () => {
	const {properties} = useAppSelector(state => state.properties)

	const renderedProperties = properties.map(prop => (
		<article key={prop.id}>
			<h3>{prop.name}</h3>
			<p>{prop.shortDescription}</p>
			<Link to={`/properties/${prop.id}`}>View property</Link>
		</article>
	))

	return <section>
		<h2>Properties</h2>
		{renderedProperties}
	</section>
}

export default PropertiesList
