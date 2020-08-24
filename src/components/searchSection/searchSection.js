import React, { useState, useEffect } from 'react';
import {
  MDBCol,
  MDBRow,
  MDBContainer,
  MDBInput,
  MDBIcon,
  MDBFormInline,
} from 'mdbreact';
import './searchSectionStyle.scss';
import CategoryItem from './CategoryItem';
import BookImage from './bookImage';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { filterByAuthors } from './../../actions/index';
import { auth } from '../../api/firebase';

function SearchSection({ authors }) {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const categoriesBooks = [
    { name: t('mainPage.category.Popular') },
    { name: t('mainPage.category.Biographies&Memoirs') },
    { name: t('mainPage.category.Literature&Fiction') },
    { name: t('mainPage.category.Business&Investing') },
    { name: t('mainPage.category.History') },
    { name: t('mainPage.category.ChildrenBooks') },
    { name: t('mainPage.category.Romance') },
  ];
  const [searchInputValue, setSearchInputValue] = useState('');
  //we use number 2 as default value to make the BOOKS choosen in first time when we open the website
  const [activeItem, setActiveItem] = useState(2);
  const [activeBubble, setActiveBubble] = useState();
  const [data, setData] = useState(categoriesBooks);
  const isAuthorsSelected = activeItem === 1;
  const isBooksSelected = activeItem === 2;
  useEffect(() => {
    if (isAuthorsSelected && activeBubble)
      dispatch(filterByAuthors(authors[activeBubble]));
  }, [activeBubble, activeItem]);

  return (
    <>
      <MDBContainer className="bg-black h-full p-0">
        <MDBRow around>
          {/*SEARCH BOX PART */}

          <MDBCol
            size="10"
            md="10"
            lg="10"
            className="mycolorPink columnSearchBooks p-0 h-12 z-depth-4 border-b-2 border-gray-800"
          >
            <MDBFormInline className="searchBox d-flex justify-content-around">
              <MDBInput
                hint={t('mainPage.searchByPart.FindYourBook')}
                type="text"
                className="text-black  mb-md-3 form-control"
                onChange={(e) => setSearchInputValue(e.target.value)}
                containerClass="active-pink"
              />
              <MDBIcon
                icon="search"
                size="lg"
                className="text-black hoverCursor pb-3 mb-md-1"
                onClick={() => {}}
              />
            </MDBFormInline>
          </MDBCol>

          {/* SEARCH BY PART FOR Authors AND Books*/}
          <MDBCol md="12" className="text-center pb-3 text-white font-bold">
            {t('mainPage.searchByPart.SEARCH BY')}
          </MDBCol>

          <MDBCol size="6" md="6" className="text-center px-3 pb-2">
            <div
              className={`lightBlack h-16 pt-2 text-gray-300 ${
                isAuthorsSelected
                  ? 'activeBorder rounded'
                  : 'inactiveBorder rounded'
              } `}
              onClick={() => {
                setActiveItem(1);
                setData(authors);
              }}
            >
              <MDBIcon
                icon="user-tie"
                size="lg"
                className={`pb-2 ${isAuthorsSelected ? 'textPink' : ''}`}
              />
              <p
                className={`pb-2 textParg ${
                  isAuthorsSelected ? 'textPink ' : ''
                }`}
              >
                {' '}
                {t('mainPage.searchByPart.Authors')}{' '}
              </p>
            </div>
          </MDBCol>
          <MDBCol size="6" md="6" className="text-center px-3">
            <div
              className={`lightBlack text-gray-300 h-16 pt-2 ${
                isBooksSelected
                  ? 'activeBorder rounded'
                  : 'inactiveBorder rounded'
              } `}
              onClick={() => {
                setActiveItem(2);
                setData(categoriesBooks);
              }}
            >
              <BookImage isBooksSelected={isBooksSelected} />
              <p
                className={`pb-2 textParg ${isBooksSelected ? 'textPink' : ''}`}
              >
                {' '}
                {t('mainPage.searchByPart.Books')}{' '}
              </p>
            </div>
          </MDBCol>
        </MDBRow>

        {/*itemList for book catogray and authors names*/}
        <MDBRow className="mt-2 mb-0 fliterRow overflow-auto">
          <MDBCol md="12">
            {data.map((item, index) => (
              <CategoryItem
                key={index}
                isActive={index == activeBubble}
                setActiveBubble={() => setActiveBubble(index)}
                item={item}
              />
            ))}
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </>
  );
}
export default SearchSection;
