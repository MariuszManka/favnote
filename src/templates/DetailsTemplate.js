import React from 'react';
import { Link } from 'react-router-dom';
import UserPageTemplate from 'templates/UserPageTemplate';
import styled from 'styled-components';
import ProtoTypes from 'prop-types';

import Heading from 'components/atoms/Heading/Heading';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import Button from 'components/atoms/Button/Button';
import withContext from 'hoc/withContext';

const StyledWrapper = styled.div`
  padding: 25px 150px 25px 70px;
  max-width: 60vw;
  position: relative;
`;

const StyledHeading = styled(Heading)`
  margin: 25px 0 0 0;

  ::first-letter {
    text-transform: uppercase;
  }
`;

const StyledParagraph = styled(Paragraph)`
  margin: 0 0 0 2px;
  font-weight: ${({ theme }) => theme.bold};
`;

const StyledButton = styled(Button)`
  margin: 80px 0 0 0;
`;
const StyledPageHeader = styled.div`
  margin: 25px 0 50px 0;
`;

const StyledLink = styled.a`
  display: block;
  text-transform: capitalize;
  font-weight: ${({ theme }) => theme.bold};
  color: ${({ theme }) => theme.black};
  font-size: ${({ theme }) => theme.fontSize.m};
  margin: 35px 0 0 0;

  :visited {
    color: #67696d;
  }
`;

const StyledImage = styled.img`
  position: absolute;
  right: -80px;
  top: 50px;
  width: 120px;
  height: 120px;
  border-radius: 50%;
`;

const DetailsTemplate = ({
  // children,
  pageContext,
  title,
  created,
  content,
  articleUrl,
  twitterName,
}) => (
  <UserPageTemplate pageType={pageContext}>
    <StyledWrapper>
      <StyledPageHeader>
        <StyledHeading big as="h1">
          {' '}
          {title}{' '}
        </StyledHeading>{' '}
        {/* {children} */} <StyledParagraph> {created} </StyledParagraph>{' '}
        {pageContext === 'twitters' && (
          <StyledImage
            src="https://avatars.io/instagram/xkaro_linax
      "
          ></StyledImage>
        )}{' '}
      </StyledPageHeader>{' '}
      <Paragraph> {content} </Paragraph>{' '}
      {pageContext === 'twitters' && (
        <StyledLink href={articleUrl} target="_blank" alt={title}>
          Open this twitter{' '}
        </StyledLink>
      )}{' '}
      {pageContext === 'articles' && (
        <StyledLink href={articleUrl} target="_blank" alt={title}>
          Open this article{' '}
        </StyledLink>
      )}{' '}
      <StyledButton as={Link} to={`/${pageContext}`} activeColor={pageContext} primary>
        Close / Save{' '}
      </StyledButton>{' '}
    </StyledWrapper>{' '}
  </UserPageTemplate>
);

DetailsTemplate.protoTypes = {
  pageContext: ProtoTypes.oneOf(['notes', 'twitters', 'articles']),
  title: ProtoTypes.string.isRequired,
  created: ProtoTypes.string.isRequired,
  content: ProtoTypes.string.isRequired,
  articleUrl: ProtoTypes.string.isRequired,
  twitterName: ProtoTypes.string.isRequired,
};

DetailsTemplate.defaultProps = {
  pageContext: 'notes',
};

export default withContext(DetailsTemplate);
