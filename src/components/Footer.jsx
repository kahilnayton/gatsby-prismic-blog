import React from 'react';
import styled from 'styled-components';


const FooterContainer = styled.footer`
background: black;
height: 8rem;
margin-top: 3rem;
display: flex;
align-items: center;

p {
  color: white;
  text-decoration: none;
}
`



export default function Footer() {
  return (
    <FooterContainer>
      <a
        href="https://www.amazon.com/Music-anniversary-guitar-presents-Anniversary/dp/B079P3TQ5V/ref=cm_cr_arp_d_product_top?ie=UTF8&th=1#customerReviews"
        className="linked-in icon-size"
      >
        <span role='img'>⭐️⭐️⭐️⭐️⭐️</span><p>Check out our store!</p></a>
    </FooterContainer>
  );
}
