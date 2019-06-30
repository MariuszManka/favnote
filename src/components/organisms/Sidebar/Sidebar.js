import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import ButtonIcon from 'components/atoms/ButtonIcon/ButtonIcon';
import bulbIcon from 'assets/icons/bulb.svg';
import logOutIcon from 'assets/icons/logout.svg';
import penIcon from 'assets/icons/pen.svg';
import twitterIcon from 'assets/icons/twitter.svg';
import logoIcon from 'assets/icons/logo.svg';
import withContext from 'hoc/withContext';

const StyledSidebar = styled.nav`
  position: fixed;
  left: 0;
  top: 0;
  padding: 30px 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  width: 153px;
  background-color: ${({ activeColor, theme }) => (activeColor ? theme[activeColor] : theme.note)};
`;

const StyledLogoutButton = styled(ButtonIcon)`
  margin-top: auto;
`;

const StyledLogo = styled(NavLink)`
  display: block;
  width: 67px;
  height: 67px;
  background-image: url(${logoIcon});
  background-repeat: no-repeat;
  background-size: 80%;
  background-position: 50% 50%;
  border: 0;
  margin-bottom: 10vh;
`;

const StyledLinksLink = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

const Sidebar = ({ pageContext }) => {
  return (
    <StyledSidebar activeColor={pageContext}>
      <StyledLogo to="/" />
      <StyledLinksLink>
        <li>
          {' '}
          <ButtonIcon to="/notes" icon={penIcon} as={NavLink} activeclass="active" />
        </li>{' '}
        <li>
          {' '}
          <ButtonIcon as={NavLink} to="/twitters" icon={twitterIcon} activeclass="active" />
        </li>{' '}
        <li>
          {' '}
          <ButtonIcon as={NavLink} to="/articles" icon={bulbIcon} activeclass="active" />
        </li>{' '}
      </StyledLinksLink>{' '}
      <StyledLogoutButton as={NavLink} to="/login" icon={logOutIcon} activeclass="active" exact />
    </StyledSidebar>
  );
};

Sidebar.propTypes = {
  pageContext: PropTypes.oneOf(['notes', 'twitters', 'articles']),
};
Sidebar.defaultProps = {
  pageContext: 'notes',
};
export default withContext(Sidebar);
