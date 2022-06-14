import {useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {fetchSingleProperty} from "../contentful";

const SingleProperty = () => {
	const {id} = useParams()
	// const [property, setProperty] = useState({})

	const property = useSelector(state => state.properties.properties.find(prop => prop.id === id))

	useEffect(() => {
		// fetchSingleProperty(id)
		// 	.then(({property}) => setProperty(property))
	}, [])

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
