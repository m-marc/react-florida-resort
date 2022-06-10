import {configureStore} from "@reduxjs/toolkit"
import propertySlice from "./propertySlice";

export const store = configureStore({
	reducer: {
		properties: propertySlice
	}
})
