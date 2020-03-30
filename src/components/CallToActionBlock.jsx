import React from 'react';
import { Link } from 'gatsby';
import RichText from './RichText';
import styled from "@emotion/styled";

const CallToActionBlockWrapper = styled.section`
  padding: 20px;
  background: #eee;
  border-radius: 20px;
  margin: 2rem 0;

  .call-to-action-content {
    display: flex;

    .featured-image-wrapper {
      margin: auto 10px;
      background: white;
      padding: 10px;
      border-radius: 10px;
    }
    img {
      max-width: 100px;
      margin: 0;
    }
  }
`;

const Button = styled.div`
  background: orange;
  display: inline-block;
  border-radius: 4px;
  cursor: pointer;

  a {
    color: white;
    padding: 4px 8px;
    display: inline-block;
  }
`;

const CallToActionBlock = ({
  title,
  content,
  buttonLabel,
  buttonDestination,
  featuredImage,
}) => {
  return (
    <CallToActionBlockWrapper>
      <RichText render={title} />
      <div className="call-to-action-content">
        <RichText render={content} />
        <div className="featured-image-wrapper">
          <img src={featuredImage} alt="Featured" />
        </div>
      </div>
      <Button>
        <Link to={buttonDestination}>{buttonLabel}</Link>
      </Button>
    </CallToActionBlockWrapper>
  );
};

export default CallToActionBlock;
