import { Container } from '@material-ui/core';
import ButtonComponent from '../../components/Button';
import DividerComponent from '../../components/Divider';
import { getTweet } from '../../helper/api';
import { colors } from '../../utils/colors';
import { main } from '../../utils/texts';

const styles = {
  bottomTweetContainer: {
    backgroundColor: 'black',
    flex: 1,
  },
  contentContainer: {
    alignItems: 'stretch',
    backgroundColor: colors.white,
    border: '4px solid',
    borderColor: colors.darkGray,
    borderRadius: 16,
    display: 'flex',
    flexDirection: 'column',
    height: '60%',
    width: '80%',
  },
  divider: {
    backgroundColor: 'black',
    height: '100px',
  },
  padding: {
    padding: 50,
  },
  subTopText: {
    fontSize: 16,
    margin: 0,
  },
  topText: {
    fontSize: 40,
    fontWeight: 'bold',
    marginBottom: 0,
    marginTop: 0,
  },
  topTweetContainer: {
    backgroundColor: 'pink',
    height: '20%',
  },
};

export default function Main() {
  const onClick = async () => {
    const res = await getTweet();
    console.log('getTweet res', res);
  };

  return (
    <>
      <p style={styles.topText}>{main.topText}</p>
      <p style={styles.subTopText}>{main.subTopText}</p>
      <ButtonComponent onClick={onClick} text="API test :D" />
      <Container
        disableGutters
        maxWidth={false}
        style={styles.contentContainer}
      >
        <div style={styles.topTweetContainer}>top</div>
        <DividerComponent />
        <div style={styles.bottomTweetContainer}>bottom</div>
      </Container>
    </>
  );
}
