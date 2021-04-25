import { useMemo, useState } from 'react';
import { Container } from '@material-ui/core';
import SentimentSatisfiedAltIcon from '@material-ui/icons/SentimentSatisfiedAlt';
import SentimentVeryDissatisfiedIcon from '@material-ui/icons/SentimentVeryDissatisfied';
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
  buttonNeg: {
    backgroundColor: colors.buttonRed,
  },
  buttonPos: {
    backgroundColor: colors.buttonGreen,
  },
  divider: {
    height: '100px',
  },
  subTopText: {
    fontSize: 16,
    marginTop: 0,
  },
  topText: {
    fontSize: 40,
    fontWeight: 'bold',
    margin: 0,
  },
  tweet: {
    color: colors.gray,
    fontSize: 16,
    margin: 0,
    textAlign: 'center',
  },
  tweetButtonsContainer: {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'space-between',
    width: '45%',
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
    width: '50%',
  },
  tweetContainerBottom: {
    alignItems: 'center',
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
    paddingLeft: 16,
    paddingRight: 16,
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
        <p style={styles.tweet}>{tweet ? tweet : main.nullTweetText}</p>
        <div style={styles.tweetButtonsContainer}>
          <ButtonComponent
            icon={<SentimentSatisfiedAltIcon />}
            style={styles.buttonPos}
            text={main.positive}
          />
          <ButtonComponent
            icon={<SentimentVeryDissatisfiedIcon />}
            style={styles.buttonNeg}
            text={main.negative}
          />
        </div>
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
