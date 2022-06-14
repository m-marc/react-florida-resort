import {gql, GraphQLClient} from "graphql-request";

const allPropertiesQuery = gql`
{
  propertyCollection {
    items {
      id
      name
      slug
      
    }
  }
}`

const singlePropertyQuery = gql`
	query SingleProperty($id:String!) {
	  property(id: $id){
	    name
	    description
	  }
	}
`

const featuredPropertiesQuery = gql`
	query {
	  propertyCollection(where: {featured: true}) {
	    items {
	      id
	      name
	      description
	    }
	  }
	}
`

const contentful = new GraphQLClient(`https://graphql.contentful.com/content/v1/spaces/${process.env.REACT_APP_SPACE_ID}`, {
	headers: {
		authorization: `Bearer ${process.env.REACT_APP_ACCESS_TOKEN}`
	}
})

export const fetchProperties = async () => {
	try {
		let {propertyCollection} = await contentful.request(allPropertiesQuery)
		return propertyCollection.items
	} catch (error) {
		console.error(error)
	}
}

export const fetchSingleProperty = async (id) => {
	try {
		return await contentful.request(singlePropertyQuery, {id})
	} catch (e) {
		console.error(e)
	}
}

export const fetchFeaturedProperties = async () => {
	try {
		let {propertyCollection} = await contentful.request(featuredPropertiesQuery)
		return propertyCollection.items
	} catch (e) {
		console.error(e)
	}
}
