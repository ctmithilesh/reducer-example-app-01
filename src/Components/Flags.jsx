import React, { useContext } from 'react'
import { CountryContext } from '../Contexts/countryContext'

const Flags = () => {
    const { state } = useContext(CountryContext)

    console.log(state)

    if(state.country === 'India'){
        return(
            <div>
                <img 
                    src="https://images.unsplash.com/photo-1532375810709-75b1da00537c"
                    alt="img"
                    width="150"
                    height="150"
                />

            </div>
        )
    }
    if(state.country === 'Australia'){
        return(
            <div>
                <img 
                    src="https://images.unsplash.com/photo-1563698876759-5388be71113b"
                    alt="img"
                    width="150"
                    height="150"
                />

            </div>
        )
    }
    else{
        return(
            <h1> No Country Selected! </h1>
        )
    }
}

export default Flags
