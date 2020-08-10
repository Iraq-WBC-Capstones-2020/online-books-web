import React from 'react';
import PropTypes from 'prop-types';
function ClientCard({ client }) {
  return (
    <>
      <div className="border border-solid border-4 border-gray-200 flex justify-center">
        <img
          src={client.logo}
          alt={client.name}
          className="animate transition duration-500 ease-in-out  
                        transform hover:-translate-y-1 hover:scale-110 w-1/3 m-4"
        />
      </div>
    </>
  );
}
ClientCard.propTypes = {
  client: PropTypes.object,
};
export default ClientCard;
