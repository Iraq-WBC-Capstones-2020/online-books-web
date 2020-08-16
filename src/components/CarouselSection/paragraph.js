import React from 'react';
import { useTranslation } from 'react-i18next';

function Paragraph() {
  const { t } = useTranslation();
  return (
    <p className="font-serif text-center text-blue-600 font-bold my-12 text-3xl bgLightblue">
      {t('mainPage.text')}
    </p>
  );
}
export default Paragraph;
