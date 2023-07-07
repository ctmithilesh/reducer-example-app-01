const countryReducer = (state, action) => {
        console.log('action', action)
        switch(action.type){
            case 'SET_COUNTRY':
                    console.log('SET_COUNTRY_CALLED')
                return{
                    ...state,
                    country: action.payload

                }
            case 'GET_COUNTRY':
                return{
                    ...state
                }
                
            default:
                return state; 
        }


}
export default countryReducer;