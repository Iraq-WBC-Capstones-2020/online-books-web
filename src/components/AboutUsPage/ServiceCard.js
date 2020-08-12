import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from '@iconify/react';
function ServiceCard({ service }) {
  const { icon, title, explanation } = service;
  return (
    <div className="m-5 w-64 ">
      <Icon icon={icon} className="text-6xl ml-24" />

      <h4 className="card-title text-center font-sans font-weight-bold text-blue-400">
        {title}
      </h4>
      <p className="text-gray-700 font-sans text-center whitespace-normal">
        {explanation}
      </p>
    </div>
  );
}
ServiceCard.propTypes = {
  service: PropTypes.object,
};
export default ServiceCard;
