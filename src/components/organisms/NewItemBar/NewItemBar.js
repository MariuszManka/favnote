import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { Formik, Form, Field, ErrorMessage } from 'formik';

import Input from 'components/atoms/Input/Input';
import Heading from 'components/atoms/Heading/Heading';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import Button from 'components/atoms/Button/Button';
import withContext from 'hoc/withContext';
import { addItem as addItemAction } from 'actions';

const StyledWrapper = styled.aside`
  position: relative;
  top: 0;
  right: 0;
  border-left: 10px solid ${({ theme, activeColor }) => theme[activeColor]};
  position: fixed;
  display: flex;
  flex-direction: column;

  z-index: 100;
  right: 0;
  top: 0;
  height: 100vh;
  width: 680px;
  background-color: white;
  box-shadow: -5px 0 15px rgba(0, 0, 0, 0.1);
  padding: 40px;
  transform: translateX(${({ isVisible }) => (isVisible ? '0' : '100%')});
  transition: all 0.3s cubic-bezier(0.17, 0.84, 0.32, 1.54);
`;

const StyledTextArea = styled(Input)`
  border-radius: 15px;
  margin: 30px 0 100px;
  height: 30vh;
  font-size: ${({ theme }) => theme.fontSize.l};
`;

const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
`;

const StyledHeading = styled(Heading)`
  margin: 10px 0 5px 0;
  text-align: center;
`;

const StyledParagraph = styled(Paragraph)`
  margin: 5px 0 25px 0;
  text-align: center;
`;

const StyledInput = styled(Input)`
  margin: 30px 0;
`;

const NewItemBar = ({ pageContext, isVisible, addItem, handleClose }) => {
  return (
    <StyledWrapper activeColor={pageContext} isVisible={isVisible}>
      <StyledHeading big as="h1">
        Create new {pageContext}{' '}
      </StyledHeading>{' '}
      {pageContext === 'notes' && (
        <StyledParagraph>
          {' '}
          A {pageContext}
          requires title and description{' '}
        </StyledParagraph>
      )}{' '}
      {pageContext === 'twitters' && (
        <StyledParagraph>
          {' '}
          A {pageContext}
          requires account name and description{' '}
        </StyledParagraph>
      )}{' '}
      {pageContext === 'articles' && (
        <StyledParagraph>
          {' '}
          A {pageContext}
          requires title description and link{' '}
        </StyledParagraph>
      )}{' '}
      <Formik
        initialValues={{
          title: '',
          content: '',
          articleUrl: '',
          twitterName: '',
          created: '',
        }}
        onSubmit={values => {
          addItem(pageContext, values);
          handleClose();
        }}
      >
        {({ isSubmitting, values, errors, touched, handleChange, handleBlur, handleSubmit }) => (
          <StyledForm>
            {(pageContext === 'notes' && (
              <Input
                placeholder="title"
                type="text"
                name="title"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.title}
              />
            )) ||
              (pageContext === 'articles' && (
                <Input
                  placeholder="title"
                  type="text"
                  name="title"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.title}
                />
              ))}{' '}
            {pageContext === 'twitters' && (
              <Input
                placeholder="Account name"
                type="text"
                name="twitterName"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.twitterName}
              />
            )}{' '}
            {pageContext === 'articles' && (
              <StyledInput
                placeholder="link"
                type="text"
                name="articleUrl"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.articleUrl}
              />
            )}{' '}
            <StyledTextArea
              name="content"
              as="textarea"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.content}
              placeholder="Description"
            />
            <Button activeColor={pageContext} type="submit">
              {' '}
              Add {pageContext}{' '}
            </Button>{' '}
          </StyledForm>
        )}
      </Formik>{' '}
    </StyledWrapper>
  );
};

NewItemBar.propTypes = {
  pageContext: PropTypes.oneOf(['notes', 'twitters', 'articles']),
  isVisible: PropTypes.bool,
};

NewItemBar.defaultProps = {
  pageContext: 'notes',
  isVisible: false,
};

const mapDispatchToProps = dispatch => ({
  addItem: (itemType, itemContent) => dispatch(addItemAction(itemType, itemContent)),
});

export default connect(
  null,
  mapDispatchToProps,
)(withContext(NewItemBar));
