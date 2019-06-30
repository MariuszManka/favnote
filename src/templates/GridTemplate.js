import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Input from 'components/atoms/Input/Input';
import Heading from 'components/atoms/Heading/Heading';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import ButtonIcon from 'components/atoms/ButtonIcon/ButtonIcon';
import NewItemBar from 'components/organisms/NewItemBar/NewItemBar';
import plusIcon from 'assets/icons/plus.svg';
import withContext from 'hoc/withContext';

import UserPageTemplate from 'templates/UserPageTemplate';

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 85px;
`;

const StyledWrapper = styled.section`
  position: relative;
  padding: 25px 150px 25px 70px;
`;

const StyledPageHeader = styled.header`
  margin: 25px 0 50px 0;
`;

const StyledHeading = styled(Heading)`
  margin: 25px 0 0 0;

  ::first-letter {
    text-transform: uppercase;
  }
`;
const StyledParagraph = styled(Paragraph)`
  margin: 0;
  font-weight: ${({ theme }) => theme.bold};
`;

const StyledButtonIcon = styled(ButtonIcon)`
  border-radius: 50%;
  background-image: url(${({ icon }) => icon});
  background-color: ${({ activeColor, theme }) => theme[activeColor]};
  background-size: 35%;
  position: fixed;
  bottom: 5%;
  right: 5%;
  cursor: pointer;
  z-index: 101;
  transform: rotate(${({ isVisible }) => (isVisible ? '45deg' : '0')});
  transition: all 0.1s ease-in;
  outline: none;
`;

class GridTemplate extends Component {
  state = {
    isNewItemBarVisible: false,
  };

  toggleNewItemBar = () =>
    this.setState(prevState => {
      return {
        isNewItemBarVisible: !prevState.isNewItemBarVisible,
      };
    });

  render() {
    const { pageContext, children } = this.props;
    const { isNewItemBarVisible } = this.state;

    return (
      <UserPageTemplate>
        <StyledWrapper>
          <StyledPageHeader>
            <Input search placeholder="Search" />
            <StyledHeading big as="h1">
              {' '}
              {pageContext}{' '}
            </StyledHeading>{' '}
            <StyledParagraph> 6 {pageContext} </StyledParagraph>{' '}
          </StyledPageHeader>{' '}
          <StyledGrid> {children} </StyledGrid>{' '}
          <StyledButtonIcon
            activeColor={pageContext}
            icon={plusIcon}
            onClick={this.toggleNewItemBar}
            isVisible={isNewItemBarVisible}
          />{' '}
          <NewItemBar isVisible={isNewItemBarVisible} handleClose={this.toggleNewItemBar} />{' '}
        </StyledWrapper>{' '}
      </UserPageTemplate>
    );
  }
}

GridTemplate.propTypes = {
  children: PropTypes.arrayOf(PropTypes.object).isRequired,
  pageContext: PropTypes.oneOf(['notes', 'twitters', 'articles']),
};

GridTemplate.defaultProps = {
  pageContext: 'notes',
};

export default withContext(GridTemplate);
