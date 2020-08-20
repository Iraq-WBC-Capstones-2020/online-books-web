import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from '@iconify/react';
function ServiceCard({ service }) {
  const { icon, title, explanation } = service;
  return (
    <div className="text-center mt-4">
      <Icon icon={icon} className="inline text-6xl" />
      <h4 className="mt-3 card-title text-center font-sans font-weight-bold text-blue-400">
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
