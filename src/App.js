import CountryProvider from './Contexts/countryContext';
import About from './Components/About';
import Services from './Components/Services';
import Flags from './Components/Flags';

function App() {
  return (
    <CountryProvider>
        <About />
        <Services />
        <Flags />
    </CountryProvider>
  );
}

export default App;
