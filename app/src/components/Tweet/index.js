import { useCallback, useEffect, useMemo, useState } from 'react';
import { Grid } from '@material-ui/core';
import SentimentSatisfiedAltIcon from '@material-ui/icons/SentimentSatisfiedAlt';
import SentimentVeryDissatisfiedIcon from '@material-ui/icons/SentimentVeryDissatisfied';
import styled from 'styled-components';
import { fontSize } from '../../constants';
import { getTweet, updateTweet } from '../../helper/api';
import { parseTweet, main } from '../../utils';
import { colors } from '../../utils/theme';
import ButtonComponent from '../Button';
import DividerComponent from '../Divider';

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
  tweetButtonsContainer: {},
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
  tweetTextTop: {},
};

const Tweet = () => {
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
      <TopContainer>
        <QuestionText>{main.tweetTopText}</QuestionText>
      </TopContainer>
    );
  }, []);

  const renderTweetBottom = useMemo(() => {
    return (
      <BottomContainer>
        <TweetContent>
          {tweet?.tweet_content ?? main.nullTweetText}
        </TweetContent>
        <ButtonsContainer>
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
        </ButtonsContainer>
      </BottomContainer>
    );
  }, [isEnabled, onClassification, tweet]);

  return (
    <Grid item md={6} sm={8} style={styles.bottomContainer} xs={10}>
      <TweetContainer>
        {renderTweetTop}
        <DividerComponent />
        {renderTweetBottom}
      </TweetContainer>
    </Grid>
  );
};

const TweetContainer = styled.div`
  align-items: stretch;
  background-color: ${colors.white};
  border-color: ${colors.darkGray};
  border-radius: 16px;
  border: 4px solid;
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const TopContainer = styled.div`
  align-items: center;
  display: flex;
  height: 20%;
  justify-content: center;
`;

const BottomContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: space-around;
  padding-left: 16px;
  padding-right: 16px;
`;

const TweetContent = styled.p`
  color: ${colors.gray};
  font-size: ${fontSize};
  margin: 0;
  text-align: center;
`;

const QuestionText = styled.p`
  color: ${colors.buttonGreen};
  font-size: 16;
  font-weight: bold;
`;

const ButtonsContainer = styled.div`
  align-items: center;
  background: pink;
  display: flex;
  justify-content: space-evenly;
  width: 80%;
`;

export default Tweet;
