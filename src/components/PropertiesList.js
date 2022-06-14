import {useAppSelector} from "../redux/hooks";
import {useEffect, useState} from "react";
import PropertyCard from "./PropertyCard";

const PropertiesList = () => {
	const {properties} = useAppSelector(state => state.properties)
	// const [properties, setProperties] = useState([])
	// useEffect(() => {
	// 	fetchProperties()
	// 		.then((properties) => setProperties(properties))
	// },[])

	const renderedProperties = properties.map(prop => (
		<PropertyCard key={prop.id} property={prop} />
	))

	return <section>
		<div className="properties-list">
			{renderedProperties}
		</div>
	</section>
}

export default PropertiesList
