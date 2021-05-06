import { useCallback, useEffect, useMemo, useState } from 'react';
import { Container, Grid } from '@material-ui/core';
import SentimentSatisfiedAltIcon from '@material-ui/icons/SentimentSatisfiedAlt';
import SentimentVeryDissatisfiedIcon from '@material-ui/icons/SentimentVeryDissatisfied';
import ButtonComponent from '../../components/Button';
import DividerComponent from '../../components/Divider';
import { getTweet, updateTweet } from '../../helper/api';
import { parseTweet, main } from '../../utils';
import { colors } from '../../utils/theme';

const styles = {
  bottomContainer: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
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
    fontSize: 16,
    marginBottom: 0,
    marginTop: 0,
  },
  topContainer: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
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
  const delayInSeconds = 1;

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

  // useEffect(() => {
  //   fetchTweet();
  // }, []);

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
    // xs, sm, md, lg, and xl
    <Grid
      alignContent="flex-start"
      container
      justify="center"
      // spacing={1}
      style={styles.container}
    >
      <Grid item xs={12}>
        <Container disableGutters maxWidth={false} style={styles.topContainer}>
          <p style={styles.topText}>{main.topText}</p>
          <p style={styles.subTopText}>{main.subTopText}</p>
        </Container>
      </Grid>
      <Grid item md={6} sm={8} style={styles.bottomContainer} xs={10}>
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
