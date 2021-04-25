import { useMemo, useState } from 'react';
import { Container } from '@material-ui/core';
import ButtonComponent from '../../components/Button';
import DividerComponent from '../../components/Divider';
import { getTweet } from '../../helper/api';
import { parseTweet } from '../../utils';
import { colors } from '../../utils/colors';
import { main } from '../../utils/texts';

const styles = {
  bottomContainer: {
    alignItems: 'center',
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  divider: {
    height: '100px',
  },
  padding: {
    padding: 50,
  },
  subTopText: {
    fontSize: 16,
    marginTop: 0,
  },
  topText: {
    fontSize: 40,
    fontWeight: 'bold',
    marginBottom: 0,
    marginTop: 0,
  },
  tweet: {
    color: colors.gray,
    fontSize: 16,
    textAlign: 'center',
  },
  tweetContainer: {
    alignItems: 'stretch',
    backgroundColor: colors.white,
    border: '4px solid',
    borderColor: colors.darkGray,
    borderRadius: 16,
    display: 'flex',
    flexDirection: 'column',
    height: '60%',
    width: '70%',
  },
  tweetContainerBottom: {
    alignItems: 'center',
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    padding: 8,
  },
  tweetContainerTop: {
    alignItems: 'center',
    display: 'flex',
    height: '20%',
    justifyContent: 'center',
  },
  tweetTextTop: {
    color: colors.buttonGreen,
    fontSize: 16,
    fontWeight: 'bold',
  },
};

export default function Main() {
  const [tweet, setTweet] = useState(null);

  const onClick = async () => {
    const returnedTweet = await getTweet();
    setTweet(parseTweet(returnedTweet));
  };

  const renderTweetTop = useMemo(() => {
    return (
      <div style={styles.tweetContainerTop}>
        <p style={styles.tweetTextTop}>{main.tweetTopText}</p>
      </div>
    );
  }, []);

  const renderTweetBottom = useMemo(() => {
    return (
      <div style={styles.tweetContainerBottom}>
        <p style={styles.tweet}>{tweet ? tweet : 'Mensagem nulo'}</p>
      </div>
    );
  }, [tweet]);

  return (
    <>
      <p style={styles.topText}>{main.topText}</p>
      <p style={styles.subTopText}>{main.subTopText}</p>
      <Container disableGutters maxWidth={false} style={styles.bottomContainer}>
        <ButtonComponent onClick={onClick} text="API test :D" />
        <Container
          disableGutters
          maxWidth={false}
          style={styles.tweetContainer}
        >
          {renderTweetTop}
          <DividerComponent />
          {renderTweetBottom}
        </Container>
      </Container>
    </>
  );
}
