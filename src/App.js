// components
import Home from './Home';
// contexts
import { ProviderLocale } from './contexts/LocaleContext';

const App = () => (
  <div className="App">
    <ProviderLocale>
      <Home />
    </ProviderLocale>
  </div>
);

export default App;
