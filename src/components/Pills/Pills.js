import React, { useState } from 'react';
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBTabPane,
  MDBTabContent,
  MDBNav,
  MDBNavItem,
  MDBNavLink,
} from 'mdbreact';

function Pills({ tabs }) {
    const [items, setItems] = useState({
      default: '0',
    });
  
    const togglePills = (type, tab) => (e) => {
      e.preventDefault();
      if (items[type] !== tab) {
        let _items = { ...items };
        _items[type] = tab;
        setItems(_items);
      }
    };
  
    return (
      <>
        <div className="py-2 border-t-2 border-b-2">
          <MDBContainer>
                <MDBNav className="nav-pills">
                  {tabs.map((tab, index) => (
                    <MDBNavItem key={index}>
                      <MDBNavLink
                        link
                        to="#"
                        active={items['default'] === index.toString()}
                        onClick={togglePills('default', index.toString())}
                      >
                        {tab.title}
                      </MDBNavLink>
                    </MDBNavItem>
                  ))}
                </MDBNav>
          </MDBContainer>
        </div>
        <div className="bg-gray-200 py-4">
          <MDBContainer>
            <MDBTabContent activeItem={items['default']}>
              {tabs.map((tab, index) => (
                <MDBTabPane tabId={index.toString()} key={index}>
                  {tab.content}
                </MDBTabPane>
              ))}
            </MDBTabContent>
          </MDBContainer>
        </div>
      </>
    );
  }
  export default Pills;
