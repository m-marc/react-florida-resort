import {gql, GraphQLClient} from "graphql-request";

const query = gql`
{
  propertyCollection {
    items {
      id
      name
      slug
      
    }
  }
}`

const contentful = new GraphQLClient(`https://graphql.contentful.com/content/v1/spaces/${process.env.REACT_APP_SPACE_ID}`, {
	headers: {
		authorization: `Bearer ${process.env.REACT_APP_ACCESS_TOKEN}`
	}
})

const fetchData = async () => {
	try {
		let {propertyCollection} = await contentful.request(query)
		return propertyCollection.items
	} catch (error) {
		console.log(error)
	}
}

export default fetchData
