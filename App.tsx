
import AppContainer from './src/components/app-container';
import Navigator from './src'
import { AllProvider } from './src/Context/allContext';

export default function App() {
  return (
    <AllProvider>
      <AppContainer>
          <Navigator/>
      </AppContainer>
    </AllProvider>
  );
}

