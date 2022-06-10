import {createSlice} from "@reduxjs/toolkit";
import data from '../data'

const initialState = {
	properties: data
}

const propertySlice = createSlice({
	name: 'properties',
	initialState,
	reducers: {

	}
})

export default propertySlice.reducer
