import img from './assets/img.jpeg'
import img1 from './assets/img-1.jpeg'
import img2 from './assets/img-2.jpeg'
import img3 from './assets/img-3.jpeg'
import thumb from './assets/thumb.jpeg'
import {v1} from "uuid";

export default [
	{
		"id": v1(),
		"name": "Palm Terrace 1C",
		"slug": "palm-terrace-1c",
		"area": "Fort Myers Beach",
		"price": 120,
		"status": "Active",
		"shortDescription": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
		"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lobortis feugiat vivamus at augue eget arcu. Nisl purus in mollis nunc sed id semper risus. In dictum non consectetur a erat nam at. Mattis vulputate enim nulla aliquet porttitor lacus luctus accumsan.",
		"propertyRating": [
			5,
			4,
			4,
			5,
			4,
			5,
			5,
			5,
			5,
			5
		],
		"maxOccupants": 1,
		"bedroomsNumber": 3,
		"bathroomsNumber": 2.5,
		"defaultImage": {
			"url": img,
			"title": "pexels-tamil-king-3214064"
		},
		"defaultThumbnail": {
			"url": thumb,
			"title": "pexels-tamil-king-3214064@thumb"
		},
		"pets": false,
		"breakfast": false,
		"featured": false,
		"amenities": null,
		"galleryCollection": {
			"items": [
				{
					"url": img1,
					"title": "pexels-curtis-adams-3288100",
					"width": 1920,
					"height": 1280
				},
				{
					"url": img2,
					"title": "pexels-curtis-adams-3288102",
					"width": 1920,
					"height": 1280
				},
				{
					"url": img3,
					"title": "pexels-curtis-adams-3288104",
					"width": 1920,
					"height": 1320
				}
			]
		}
	}
]
