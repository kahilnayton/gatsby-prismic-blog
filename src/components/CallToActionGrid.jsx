import React from 'react';
import styled from "@emotion/styled";
import RichText from './RichText';
import CallToActionBlock from './CallToActionBlock';

const CallToActionGridWrapper = styled.section`
  max-width: 800px;
  margin: 0 auto;
`;


const CallToActionGrid = ({ title, callToActions }) => {
  return (
    <CallToActionGridWrapper>
      <RichText render={title} />
      {callToActions.map((callToAction, i) => {
        return (
          <CallToActionBlock
            key={i}
            featuredImage={callToAction.featured_image.url}
            buttonLabel={callToAction.button_label}
            buttonDestination={`/${callToAction.button_destination._meta.uid}`}
            title={callToAction.call_to_action_title}
            content={callToAction.content}
          />
        );
      })}
    </CallToActionGridWrapper>
  );
};

export default CallToActionGrid;
