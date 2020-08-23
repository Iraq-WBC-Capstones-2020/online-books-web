import React from 'react';
import PropTypes from 'prop-types';
function ClientCard({ client }) {
  return (
    <div className="flex justify-center">
      <img
        src={client.logo}
        alt={client.name}
        className="animate transition duration-500 ease-in-out  
                        transform hover:-translate-y-1 hover:scale-110 w-1/2 m-2"
      />
    </div>
  );
}
ClientCard.propTypes = {
  client: PropTypes.object,
};
export default ClientCard;
