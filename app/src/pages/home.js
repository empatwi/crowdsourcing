import { useCallback, useEffect, useMemo, useState } from 'react';
import { Container, Grid } from '@material-ui/core';
import SentimentSatisfiedAltIcon from '@material-ui/icons/SentimentSatisfiedAlt';
import SentimentVeryDissatisfiedIcon from '@material-ui/icons/SentimentVeryDissatisfied';
import styled from 'styled-components';
import ButtonComponent from '../components/Button';
import DividerComponent from '../components/Divider';
import { fontSize } from '../constants';
import { getTweet, updateTweet } from '../helper/api';
import { parseTweet } from '../utils';
import { main } from '../utils/content';
import { colors } from '../utils/theme';

const styles = {
  bottomContainer: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
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
  disclaimerText: {
    color: colors.darkGray,
    fontSize: '0.7rem',
    textAlign: 'center',
    textDecoration: 'bold',
    width: '95%',
  },
  reportButton: {
    fontSize: 8,
    textDecoration: 'underline',
  },
  subTopText: {
    fontSize: fontSize,
    marginTop: 0,
    textAlign: 'center',
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
    padding: '1rem 0 0.4rem 0',
    width: '90%',
  },
  tweetContainer: {
    backgroundColor: colors.white,
    border: '4px solid',
    borderColor: colors.darkGray,
    borderRadius: 16,
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
  },
  tweetContainerBottom: {
    alignItems: 'center',
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
    padding: '0.5rem 0.4rem',
  },
  tweetContainerTop: {
    alignItems: 'center',
    display: 'flex',
    height: '25%',
    justifyContent: 'center',
    padding: '1rem 0.4rem',
    textAlign: 'center',
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
    <HomeContainer container display="flex" justifyContent="center">
      <Grid item xs={12}>
        <TopContainer disableGutters maxWidth={false}>
          <p style={styles.topText}>{main.topText}</p>
          <p style={styles.subTopText}>{main.subTopText}</p>
        </TopContainer>
      </Grid>
      <Grid item md={6} sm={10} style={styles.bottomContainer} xl={4} xs={11}>
        <Container
          disableGutters
          maxWidth={false}
          style={styles.tweetContainer}
        >
          {renderTweetTop}
          <DividerComponent />
          {renderTweetBottom}
        </Container>
        <p style={styles.disclaimerText}>{main.disclaimer}</p>
      </Grid>
    </HomeContainer>
  );
}

const HomeContainer = styled(Grid)`
  align-content: space-evenly;
  min-height: 90vh;
  @media (max-height: 568px) {
    min-height: 100vh;
  }
  @media (min-width: 768px) {
    align-content: center;
  }
  @media (min-height: 500px) {
    align-content: center;
  }
`;

const TopContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  @media (min-width: 768px) {
    margin-bottom: 2rem;
  }
  @media (min-height: 500px) {
    margin-bottom: 4rem;
  }
`;
