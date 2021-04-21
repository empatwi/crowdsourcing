import './App.css';
import { useState } from 'react';
import { Container } from '@material-ui/core';
import FooterComponent from './components/Footer';
import HeaderComponent from './components/Header';
import Body from './scenes';
import { colors } from './utils/colors';
import { footer, header } from './utils/texts';

const styles = {
  main: {
    backgroundColor: colors.lightGreen,
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
    width: '100vw',
  },
};

function App() {
  const [selectedTab, setSelectedTab] = useState(header.tabs[0]);

  const handleChange = value => {
    setSelectedTab(value);
  };

  return (
    <Container disableGutters maxWidth={false} style={styles.main}>
      <HeaderComponent
        handleTabChange={handleChange}
        selectedTab={selectedTab}
        tabs={header.tabs}
      />
      <Body page={selectedTab} />
      <FooterComponent items={footer.links} text={footer.text} />
    </Container>
  );
}

export default App;
