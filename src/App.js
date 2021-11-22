// components
import Home from './Home';
// contexts
import { ProviderLocale } from './contexts/LocaleContext';

function App() {
  return (
    <div className="App">
      <ProviderLocale>
        <Home />
      </ProviderLocale>
    </div>
  );
}

export default App;
