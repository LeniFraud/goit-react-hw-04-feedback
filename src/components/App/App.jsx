import { useState } from 'react';
import { Section, FeedbackOptions, Statistics, Notification } from 'components';
import { Wrapper } from './App.styled';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const feedbackOptions = Object.keys({ good, neutral, bad });

  const onLeaveFeedback = option => {
    if (option === 'good') setGood(state => state + 1);
    if (option === 'neutral') setNeutral(state => state + 1);
    if (option === 'bad') setBad(state => state + 1);
  };

  const countTotalFeedback = () => good + neutral + bad;

  const countPositiveFeedbackPercentage = () =>
    Math.round((good / countTotalFeedback()) * 100) || 0;

  const total = countTotalFeedback();

  return (
    <Wrapper>
      <Section title="Please leave your feedback">
        <FeedbackOptions
          options={feedbackOptions}
          onLeaveFeedback={onLeaveFeedback}
        ></FeedbackOptions>
      </Section>
      <Section title="Statistics">
        {total > 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message="There is no feedback yet..." />
        )}
      </Section>
    </Wrapper>
  );
};
