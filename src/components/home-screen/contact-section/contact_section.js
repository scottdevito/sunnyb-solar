import React, { Component } from 'react';
import styled from 'styled-components';
import Button from 'material-ui/Button';
import { cloudFunctions } from '../../../startup/db_init';

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
    const sendEstimateFormEmail = cloudFunctions.httpsCallable(
      'sendEstimateFormEmail'
    );

    sendEstimateFormEmail({
      clientEmail: this.state.email,
      clientName: this.state.name,
    }).then(() => {
      return console.log('Information sent successfully.');
    });
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
            We respect your privacy and will never use your information to spam
            you with emails or calls.
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
              boxShadow: '0 2px 2px 2px rgba(0, 0, 0, .1)',
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
  margin-bottom: 8rem;
`;

const ContactCloudBannerGraphic = styled.img`
  width: 100%;
`;

const ContactFormWrapper = styled.div`
  margin-top: 2rem;
`;

const ContactFormHeader = styled.h1`
  font-size: 2.5rem;
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
  max-width: 450px;
  margin-left: 1rem;
  margin-right: 1rem;
`;
