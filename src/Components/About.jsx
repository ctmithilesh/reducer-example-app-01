import React, { useContext } from 'react'
import { CountryContext } from '../Contexts/countryContext'

const About = () => {
    const { state } = useContext(CountryContext)
    console.log(state)
  return (
    <div>
      
    </div>
  )
}

export default About
