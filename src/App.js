// components
import Home from './Home';
// contexts
import { ProviderLocale } from './contexts/LocaleContext';
// style
import 'antd/dist/antd.css';

const App = () => (
  <div className="App">
    <ProviderLocale>
      <Home />
    </ProviderLocale>
  </div>
);

export default App;
