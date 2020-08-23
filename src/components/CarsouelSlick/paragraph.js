import React from 'react';
import { useTranslation } from 'react-i18next';

function Paragraph() {
  const { t } = useTranslation();
  return (
    <p className="font-serif text-center text-black font-bold my-12 text-4xl bgLightblue">
      {t('mainPage.text')}
    </p>
  );
}
export default Paragraph;
