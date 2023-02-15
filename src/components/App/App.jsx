import React, { useState } from 'react';
import { Section, FeedbackOptions, Statistics, Notification } from 'components';
import { Wrapper } from './App.styled';

export const App = () => {
  const [response, setResponse] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });
  const { good, neutral, bad } = response;

  const onLeaveFeedback = option =>
    setResponse({ ...response, [option]: response[option] + 1 });

  const countTotalFeedback = () => good + neutral + bad;

  const countPositiveFeedbackPercentage = () =>
    Math.round((good / countTotalFeedback()) * 100) || 0;

  return (
    <Wrapper>
      <Section title="Please leave your feedback">
        <FeedbackOptions
          options={Object.keys(response)}
          onLeaveFeedback={onLeaveFeedback}
        ></FeedbackOptions>
      </Section>
      <Section title="Statistics">
        {countTotalFeedback() > 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message="There is no feedback yet..." />
        )}
      </Section>
    </Wrapper>
  );
};
