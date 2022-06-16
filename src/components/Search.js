import styles from '../styles/Search/index.module.css'
import SortBy from "./SortBy";
import {useState} from "react";
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file

const Search = () => {
	const [date, setDate] = useState([
		{
			startDate: new Date(),
			endDate: null,
			key: 'selection',
		}
	])

  return <div className={styles.card}>
	  <div className={styles.dateGroup}>
			<DateRange
				editableDateInputs={true}
				onChange={item => setDate([item.selection])}
				moveRangeOnFirstSelection={false}
				ranges={date}
			/>
		  <select>
			  <option value="bed_1">1 Bedroom</option>
			  <option value="bed_2">2 Bedrooms</option>
			  <option value="bed_3">3 Bedrooms</option>
		  </select>
	  </div>
	  <div className={styles.dateGroup}>
		  <button>Advanced Search</button>
		  <SortBy />
	  </div>
  </div>
}

export default Search
