import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

function HighlightedSectionLabel({ text }) {
  const { t } = useTranslation();
  return (
    <div className="buttomText bg-black  pt-1 pt-md-2 text-white font-bold text-center  highlight ">
      {t(`carsouelSection.${text}`)}
    </div>
  );
}
HighlightedSectionLabel.propTypes = {
  text: PropTypes.string,
};
export default HighlightedSectionLabel;
