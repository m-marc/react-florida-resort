import {useSelector} from "react-redux";
import {useParams} from "react-router-dom";

const SingleProperty = () => {
	const {id} = useParams()

	const property = useSelector(state => state.properties.properties.find(prop => prop.id === id))

	if (!property)
		return (<section>
			<h2>Property not found!</h2>
		</section>)

	return (
		<section>
			<h2>{property.name}</h2>
			<p>{property.description}</p>
		</section>
	);
};

export default SingleProperty;
