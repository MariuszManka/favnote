import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import GridTemplate from 'templates/GridTemplate';
import Card from 'components/molecules/Card/Card';

const Twitters = ({ twitters }) => (
  <GridTemplate>
    {twitters.map(item => (
      <Card
        id={item.id}
        cardType="twitters"
        title={item.title}
        content={item.content}
        created={item.created}
        twitterName={item.twitterName}
        key={item.id}
      />
    ))}
  </GridTemplate>
);

const mapStateToProps = ({ twitters }) => {
  return { twitters };
};

Twitters.propTypes = {
  twitters: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      cardType: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
      created: PropTypes.string.isRequired,
      twitterName: PropTypes.string.isRequired,
      key: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default connect(mapStateToProps)(Twitters);
