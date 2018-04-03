import React, { Component } from 'react';
import styled from 'styled-components';
import Button from 'material-ui/Button';

import ContactCloudBanner from '../../../assets/home-screen/ContactCloudBanner.svg';
import ContactForm from './contact_form.MUI';

class ContactSection extends Component {
  state = {
    email: '',
    name: '',
    isError: false,
  };

  onContactInputChange = (event, inputValue) => {
    let value = event.target.value;

    this.setState((prevState, props) => {
      return { [inputValue]: value };
    });
  };

  onSubmitEmailToMailingList = () => {
    // if ((this.state.email !== '') && (this.state.name !== '')) {
    //   // Clear error if there is one
    //   this.setState(prevState => {
    //     return { isError: false };
    //   });

    //   try {
    //     this.props.submitEmailToMailingList(this.state.email);
    //   } catch (error) {
    //     this.setState(prevState => {
    //       return { isError: !prevState.isError };
    //     });
    //   }
    // }
    return console.log('Submit name and email');
  };

  render() {
    return (
      <ContactSectionWrapper>
        <ContactCloudBannerGraphic
          src={ContactCloudBanner}
          alt="Contact Cloud Banner"
        />
        <ContactFormWrapper>
          <ContactFormHeader>Sign up for a free estimate</ContactFormHeader>
          <ContactFormSubHeader>100% free, no obligation</ContactFormSubHeader>
          <ContactFormSubText>
            Submit your name and email and someone will reach out to you to
            answer any questions you may have
          </ContactFormSubText>
          <ContactForm
            onContactInputChange={this.onContactInputChange}
            isError={this.state.isError}
          />

          <Button
            onClick={() => this.onSubmitEmailToMailingList()}
            style={{
              background:
                'linear-gradient(104.85deg, #AED581 0.54%, #7DA453 100%)',
              borderRadius: 3,
              border: 0,
              color: 'white',
              padding: '0 30px',
              marginTop: '2.5rem',
            }}
          >
            Submit
          </Button>
        </ContactFormWrapper>
      </ContactSectionWrapper>
    );
  }
}

export default ContactSection;

const ContactSectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-content: center;
  align-items: center;
  text-align: center;
  width: 100%;
  margin-bottom: 2rem;
`;

const ContactCloudBannerGraphic = styled.img`
  width: 100%;
`;

const ContactFormWrapper = styled.div``;

const ContactFormHeader = styled.h1`
  font-weight: 400;
  margin-bottom: 1rem;
`;

const ContactFormSubHeader = styled.h2`
  font-weight: 350;
  color: #4f4f4f;
  margin-top: 0.5rem;
`;

const ContactFormSubText = styled.h4`
  font-weight: 350;
  color: #4f4f4f;
  max-width: 425px;
  margin-left: 1rem;
  margin-right: 1rem;
`;
