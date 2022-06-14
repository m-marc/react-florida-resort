import {AiOutlineTeam} from "react-icons/ai";
import {TbBath, TbBed} from "react-icons/tb";
import styles from '../styles/PropertyCard.module.css'
import {Link} from "react-router-dom";

const PropertyCard = ({property}) => {
	return <div className={styles.card}>
		<div className={styles.card__image}>
			<img src={property.defaultThumbnail.url} alt={property.defaultThumbnail.title}/>
		</div>
		<div className={styles.card__content}>
			<div className={styles.card__title}>
				<p className={styles.card__title_name}>{property.name}</p>
				<p className={styles.card__title_area}>{property.area}</p>
			</div>
			<div className={styles.card__options}>
				<div className="card__options_people">
					<AiOutlineTeam />
					{property.maxOccupants}
				</div>
				<div className="card__options_bed">
					<TbBed />
					{property.bedroomsNumber}
				</div>
				<div className="card__options_bath">
					<TbBath />
					{property.bathroomsNumber}
				</div>
			</div>
			<div className={styles.card__price}>${property.price}/nt</div>
			<Link className={styles.card__link} to={`/properties/${property.id}`} />
		</div>
	</div>
}

export default PropertyCard
