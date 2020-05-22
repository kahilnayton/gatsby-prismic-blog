import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import styled from 'styled-components';
import RichText from '../components/RichText';

export const query = graphql`
  {
    prismic {
      allContact_pages {
        edges {
          node {
            form_title
            form_description
            form_fields {
              field_type
              name
              required
            }
          }
        }
      }
    }
  }
`;

const Form = styled.form`
  padding: 10px;
  background: #eee;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;

  input {
    margin-bottom: 1rem;
    border-radius: 4px;
    height: 4rem;
    border: 1px solid #eee;
    width: 100%;
  }

  textarea {
    margin-bottom: 1rem;
    border-radius: 4px;
    height: 10rem;
    border: 1px solid #eee;
    width: 100%;
    resize: none;
  }
`;
const Form2 = styled.form`
  padding: 10px;
  background: orangered;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;

  input {
    margin-bottom: 1rem;
    border-radius: 4px;
    height: 4rem;
    border: 1px solid #eee;
    width: 100%;
  }

  textarea {
    margin-bottom: 1rem;
    border-radius: 4px;
    height: 10rem;
    border: 1px solid #eee;
    width: 100%;
    resize: none;
  }
`;

const Button = styled.button`
  background: orange;
  color: white;
  cursor: pointer;
  padding: 4px 8px;
  box-shadow: none;
  border-radius: 4px;
`;

const ContentWrapper = styled.section`
  max-width: 800px;
  margin: 0 auto;
`;

const ContactUs = props => {
  console.log(props);
  return (
    <Layout>
      <ContentWrapper>
        <RichText
          render={props.data.prismic.allContact_pages.edges[0].node.form_title}
        />
        <RichText
          render={
            props.data.prismic.allContact_pages.edges[0].node.form_description
          }
        />
        <Form
          name='contact-us-two'
          method='Post'
          data-netlify='true'
          data-netlify-honeypot="bot-field"
          action='/contact-success'>
          
          <input type='hidden' name='form-name' value='contact-us'/>
          {props.data.prismic.allContact_pages.edges[0].node.form_fields.map(
            (field, i) => {
              if (field.field_type === 'textarea') {
                return (
                  <div key={i}>
                    <textarea
                      name={field.name}
                      required={field.required === 'Yes'}
                      placeholder={field.name}
                    />
                  </div>
                );
              } else {
                return (
                  <div key={i}>
                    <input
                      name={field.name}
                      placeholder={field.name}
                      required={field.required === 'Yes'}
                      type={field.field_type}
                    />
                  </div>
                );
              }
            }
          )}
          <Button type="submit">Submit</Button>
        </Form>

        <Form2
          name='contact-us'
          method='Post'
          data-netlify='true'
          data-netlify-honeypot="bot-field"
          action='/contact-success'>
          
          <input type='hidden' name='form-name' value='contact-us'/>
          {props.data.prismic.allContact_pages.edges[0].node.form_fields.map(
            (field, i) => {
              if (field.field_type === 'textarea') {
                return (
                  <div key={i}>
                    <textarea
                      name={field.name}
                      required={field.required === 'Yes'}
                      placeholder={field.name}
                    />
                  </div>
                );
              } else {
                return (
                  <div key={i}>
                    <input
                      name={field.name}
                      placeholder={field.name}
                      required={field.required === 'Yes'}
                      type={field.field_type}
                    />
                  </div>
                );
              }
            }
          )}
          <Button type="submit">Submit</Button>
        </Form2>
      </ContentWrapper>
    </Layout>
  );
};

export default ContactUs;
