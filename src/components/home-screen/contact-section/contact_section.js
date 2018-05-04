import React, { Component } from 'react';
import styled from 'styled-components';
import Button from 'material-ui/Button';
import { Element } from 'react-scroll';

import { cloudFunctions } from '../../../startup/db_init';
import ContactCloudBannerMobile from '../../../assets/home-screen/ContactCloudBanner.svg';
import ContactCloudBannerDesktop from '../../../assets/home-screen/ContactCloudBannerDesktop.svg';
import ContactForm from './contact_form.MUI';

class ContactSection extends Component {
  state = {
    email: '',
    name: '',
    city: '',
    phone: '',
    employmentStatus: '',
    isOkayToContact: false,
    isError: false,
    isEstimateFormSent: false,
  };

  onContactInputChange = (event, inputValue) => {
    let value = event.target.value;

    this.setState((prevState, props) => {
      return { [inputValue]: value };
    });
  };

  onSubmitEmailToMailingList = () => {
    if (
      this.state.email === '' ||
      this.state.name === '' ||
      this.state.city === '' ||
      this.state.phone === ''
    ) {
      return this.setState(prevState => {
        return { isError: true };
      });
    }

    // Clear error if there is one
    this.setState(prevState => {
      return { isError: false };
    });

    try {
      const sendEstimateFormEmail = cloudFunctions.httpsCallable(
        'sendEstimateFormEmail'
      );

      sendEstimateFormEmail({
        clientEmail: this.state.email,
        clientName: this.state.name,
        clientCity: this.state.city,
        clientPhone: this.state.phone,
        clientEmploymentStatus: this.state.employmentStatus,
        clientIsOkayToContact: this.state.isOkayToContact,
      }).then(() => {
        this.setState(prevState => {
          return { isEstimateFormSent: true };
        });
      });
    } catch (error) {
      this.setState(prevState => {
        return { isError: !prevState.isError };
      });
    }
  };

  handleSelectChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleCheckChange = event => {
    this.setState({ [event.target.name]: event.target.checked });
  };

  render() {
    return (
      <ContactSectionWrapper>
        <ContactCloudBannerGraphicMobile
          src={ContactCloudBannerMobile}
          alt="Contact Cloud Banner"
        />
        <ContactCloudBannerGraphicDesktop
          src={ContactCloudBannerDesktop}
          alt="Contact Cloud Banner"
        />
        <Element name="contact-section" className="element" />
        <ContactFormWrapper isEstimateFormSent={this.state.isEstimateFormSent}>
          <ContactFormHeader>Sign up for a free estimate</ContactFormHeader>
          <ContactFormSubHeader>100% free, no obligation</ContactFormSubHeader>
          <ContactFormSubText>
            We respect your privacy and will
            <BrandHighlight> never</BrandHighlight> use your information to spam
            you with emails or calls.
          </ContactFormSubText>
          <ContactForm
            onContactInputChange={this.onContactInputChange}
            handleSelectChange={this.handleSelectChange}
            handleCheckChange={this.handleCheckChange}
            isError={this.state.isError}
            employmentStatus={this.state.employmentStatus}
            isOkayToContact={this.state.isOkayToContact}
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
        <NotifyBox isEstimateFormSent={this.state.isEstimateFormSent}>
          <BoxText>Thanks for reaching out. We'll be in touch shortly.</BoxText>
        </NotifyBox>
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

const ContactCloudBannerGraphicMobile = styled.img`
  width: 100%;
  display: none;

  @media (max-width: 768px) {
    display: block;
  }
`;

const ContactCloudBannerGraphicDesktop = styled.img`
  width: 100%;
display: none;

  @media(min-width: 769px) {
    display block;
  }
`;

const ContactFormWrapper = styled.div`
  margin-top: 2rem;
  display: ${props => (props.isEstimateFormSent ? 'none' : 'block')};
`;

const ContactFormHeader = styled.h1`
  font-size: 2.5rem;
  font-weight: 400;
  margin-bottom: 1rem;
`;

const ContactFormSubHeader = styled.h2`
  font-weight: 300;
  color: #4f4f4f;
  margin-top: 0.5rem;
`;

const ContactFormSubText = styled.h4`
  font-weight: 600;
  color: #4f4f4f;
  max-width: 450px;
  margin-left: 1rem;
  margin-right: 1rem;
`;

const NotifyBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  margin-bottom: 7rem;
  margin-top: 16rem;
  border-radius: 10px;
  color: white;
  height: 6rem;
  background: linear-gradient(
    107.19deg,
    rgba(252, 211, 6, 0.75) 0%,
    rgba(255, 255, 83, 0.24) 160.78%
  );
  border-radius: 6px;
  display: ${props => (props.isEstimateFormSent ? 'flex' : 'none')};

  @keyframes slidein {
    from {
      transform: scaleY(0);
      transform: translateY(250px);
      background: linear-gradient(
        107.19deg,
        rgba(252, 211, 6, 0.75) 0%,
        rgba(255, 255, 83, 0.24) 0%
      );
    }
    to {
      transform: scaleY(1);
      transform: translateY(0px);
      background: linear-gradient(
        107.19deg,
        rgba(252, 211, 6, 0.75) 0%,
        rgba(255, 255, 83, 0.24) 160.78%
      );
    }
  }
  animation: ease 1s slidein;
`;

const BoxText = styled.p`
  font-size: 22px;
  font-weight: 550;
`;

const BrandHighlight = styled.span`
  color: #f79522;
  font-weight: 550;
  font-size: 22px;
`;
