import React from 'react';
import PropTypes from 'prop-types';

const Disk = ({ diskColor }) => <div className={diskColor} />;

Disk.propTypes = {
  diskColor: PropTypes.string.isRequired,
};

export default Disk;
