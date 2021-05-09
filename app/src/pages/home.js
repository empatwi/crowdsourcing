import { useCallback, useEffect, useMemo, useState } from 'react';
import { Container, Grid } from '@material-ui/core';
import SentimentSatisfiedAltIcon from '@material-ui/icons/SentimentSatisfiedAlt';
import SentimentVeryDissatisfiedIcon from '@material-ui/icons/SentimentVeryDissatisfied';
import ButtonComponent from '../components/Button';
import DividerComponent from '../components/Divider';
import { fontSize } from '../constants';
import { getTweet, updateTweet } from '../helper/api';
import { parseTweet, main } from '../utils';
import { colors } from '../utils/theme';

const styles = {
  bottomContainer: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    height: '30vh',
    justifyContent: 'center',
  },
  buttonNeg: {
    backgroundColor: colors.buttonRed,
  },
  buttonPos: {
    backgroundColor: colors.buttonGreen,
  },
  container: {
    flex: 1,
  },
  reportButton: {
    fontSize: 8,
    textDecoration: 'underline',
  },
  subTopText: {
    fontSize: fontSize,
    marginBottom: 0,
    marginTop: 0,
    textAlign: 'center',
  },
  topContainer: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    marginBottom: '3rem',
  },
  topText: {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    margin: 0,
    textAlign: 'center',
  },
  tweet: {
    color: colors.gray,
    fontSize: fontSize,
    margin: 0,
    paddingBottom: '2px',
    textAlign: 'center',
  },
  tweetButtonsContainer: {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'space-evenly',
    width: '90%',
  },
  tweetContainer: {
    alignItems: 'stretch',
    backgroundColor: colors.white,
    border: '4px solid',
    borderColor: colors.darkGray,
    borderRadius: 16,
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    padding: '4px 0',
  },
  tweetContainerBottom: {
    alignItems: 'center',
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
    padding: '2px 4px',
  },
  tweetContainerTop: {
    alignItems: 'center',
    display: 'flex',
    height: '30%',
    justifyContent: 'center',
  },
  tweetTextTop: {
    color: colors.buttonGreen,
    fontSize: fontSize,
    fontWeight: 'bold',
    textAlign: 'center',
  },
};

export default function Main() {
  const delayInSeconds = 1.5;

  const [tweet, setTweet] = useState(null);
  const [isEnabled, setIsEnabled] = useState(false);

  const fetchTweet = async () => {
    const returnedTweet = await getTweet();
    setTweet(parseTweet(returnedTweet));
  };

  const onClassification = useCallback(
    value => {
      updateTweet(value, String(tweet?.id));
      fetchTweet();
    },
    [tweet?.id],
  );

  useEffect(() => {
    fetchTweet();
  }, []);

  useEffect(() => {
    setIsEnabled(false);
    setTimeout(() => {
      setIsEnabled(true);
    }, delayInSeconds * 1000);
  }, [tweet, setIsEnabled]);

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
        <p style={styles.tweet}>{tweet?.tweet_content ?? main.nullTweetText}</p>
        <div style={styles.tweetButtonsContainer}>
          <ButtonComponent
            icon={<SentimentSatisfiedAltIcon />}
            isEnabled={isEnabled}
            onClick={() => {
              onClassification(true);
            }}
            style={styles.buttonPos}
            text={main.positive}
          />
          <ButtonComponent
            icon={<SentimentVeryDissatisfiedIcon />}
            isEnabled={isEnabled}
            onClick={() => {
              onClassification(false);
            }}
            style={styles.buttonNeg}
            text={main.negative}
          />
        </div>
      </div>
    );
  }, [isEnabled, onClassification, tweet]);

  return (
    <Grid
      alignContent="center"
      container
      display="flex"
      justifyContent="center"
      minHeight="100vh"
    >
      <Grid item xs={12}>
        <Container disableGutters maxWidth={false} style={styles.topContainer}>
          <p style={styles.topText}>{main.topText}</p>
          <p style={styles.subTopText}>{main.subTopText}</p>
        </Container>
      </Grid>
      <Grid item md={6} sm={10} style={styles.bottomContainer} xs={11.5}>
        <Container
          disableGutters
          maxWidth={false}
          style={styles.tweetContainer}
        >
          {renderTweetTop}
          <DividerComponent />
          {renderTweetBottom}
        </Container>
      </Grid>
    </Grid>
  );
}
