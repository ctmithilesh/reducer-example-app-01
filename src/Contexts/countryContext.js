import { createContext, useReducer } from "react";
import countryReducer from "../Reducers/countryReducer";


export const CountryContext = createContext()



function CountryProvider({children}){

        const initialState = { country: 'India' }
        const [state, dispatch] = useReducer(countryReducer, initialState)

        return(
            <CountryContext.Provider value={{state, dispatch}}>
                    {children}
            </CountryContext.Provider>
        )


}
export default CountryProvider;