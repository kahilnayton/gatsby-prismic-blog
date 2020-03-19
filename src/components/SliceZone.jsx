import React from 'react';
import Hero from './Hero';
import CallToActionGrid from './CallToActionGrid';
import PriceList from './PriceList'

const SliceZone = ({ body }) => {
  console.log(body);
  return (
    <div>
      {body.map((bodyContent, i) => {
        if (bodyContent.type === 'hero') {
          return (
            <Hero
              key={i}
              backgroundImage={bodyContent.primary.background_image.url}
              title={bodyContent.primary.hero_title}
              content={bodyContent.primary.hero_content}
            />
          );
        }
        if (bodyContent.type === 'call_to_action_grid') {
          return (
            <CallToActionGrid
              key={i}
              callToActions={bodyContent.fields}
              title={bodyContent.primary.section_title}
            />
          );
        } if (bodyContent.type === 'price_list') {
          return (
            <PriceList
              key={i}
              prices={bodyContent.fields}
              title={bodyContent.primary.title}
            />
          );
        } else return null;
      })}
    </div>
  );
};

export default SliceZone;
