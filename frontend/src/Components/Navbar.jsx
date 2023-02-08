import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../Components/images/logo.svg';
import homeIcon from '../Components/images/home-icon.svg';
import searchIcon from '../Components/images/search-icon.svg';
import watchIcon from '../Components/images/watchlist-icon.svg';
import originalsIcon from '../Components/images/original-icon.svg';
import moviesIcon from '../Components/images/movie-icon.svg';
import seriesIcon from '../Components/images/series-icon.svg';
import admin from '../Components/images/admin.png';
import shutdownIcon from '../Components/images/shut-down.svg';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const ifPopupOpen = () => setToggle(!toggle);

  return (
    <>
      <Nav>
        <Navbrand>
          <NavLink to="/home">
            {' '}
            <img src={logo} alt="nav/logo" />
          </NavLink>
        </Navbrand>
        <MenuLinks>
          <li>
            <NavLink to="/home" className="nav-link">
              <img
                src={homeIcon}
                alt="link"
                style={{ width: '0.8rem', height: '0.8rem' }}
              />
              <span>HOME</span>
            </NavLink>{' '}
          </li>

          <li>
            <NavLink to="/search" className="nav-link">
              <img src={searchIcon} alt="link" />
              <span>SEARCH</span>
            </NavLink>{' '}
          </li>

          <li>
            <NavLink to="/watchlist" className="nav-link">
              <img src={watchIcon} alt="link" />
              <span>WATCH LIST</span>
            </NavLink>{' '}
          </li>

          <li>
            <NavLink to="/originals" className="nav-link">
              <img src={originalsIcon} alt="link" />
              <span>ORIGINALS</span>
            </NavLink>{' '}
          </li>

          <li>
            <NavLink to="/movies" className="nav-link">
              <img src={moviesIcon} alt="link" />
              <span>MOVIES</span>
            </NavLink>{' '}
          </li>
          <li>
            <NavLink to="/series" className="nav-link">
              <img src={seriesIcon} alt="link" />
              <span>SERIES</span>
            </NavLink>{' '}
          </li>
        </MenuLinks>
        <UserAuth>
          <img onClick={ifPopupOpen} src={admin} alt="avatar/admin" />
        </UserAuth>

        <PopupMenu activeState={toggle}>
          <li>
            <NavLink to="/home" className="nav-link">
              <img
                src={homeIcon}
                alt="link"
                style={{ width: '0.8rem', height: '0.8rem' }}
              />
              <span>HOME</span>
            </NavLink>
          </li>

          <li>
            <NavLink to="/" className="nav-link">
              <img
                src={shutdownIcon}
                alt="link"
                style={{ width: '0.8rem', height: '0.8rem' }}
              />
              <span>Sign Out</span>
            </NavLink>
          </li>
        </PopupMenu>
      </Nav>
    </>
  );
};

const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  min-height: 9vh;
  opacity: 1;
  z-index: 2500;
  padding: 0 3rem;
`;

const Navbrand = styled.div`
  width: 101px;
  height: auto;
  object-position: center;

  img {
    width: 100%;
    height: auto;
    object-fit: fill;
  }
`;

const MenuLinks = styled.div`
  @media screen and (min-width: 280px) and (max-width: 991px) {
    display: none;
  }

  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: row;
  flex-wrap: row wrap;
  flex-shrink: 0;
  margin-right: auto;
  margin-left: 3rem;

  li {
    list-style: none;
    > .nav-link {
      display: flex;
      align-items: center;
      text-decoration: none;
      position: relative;
      img {
        width: 1.3rem;
        height: 1.3rem;
        object-fit: contain;
      }
      span {
        color: #fff;
        font-size: 1rem;
        font-weight: 300;
        letter-spacing: 1px;
        line-height: 1.08;
        padding: 0.5rem;
        margin-top: 5px;

        &::before {
          position: absolute;
          content: '';
          top: 100%;
          left: 0;
          right: 0;
          width: 0%;
          height: 2px;
          background: #f9f9f9;
          transition: all 0.5s cubic-bezier(0.445, 0.05, 0.55, 0.95);
        }
      }
    }
    &:hover {
      span::before {
        width: 100%;
      }
    }
  }
`;

const UserAuth = styled.div`
  position: relative;
  width: 50px;
  height: 50px;
  object-position: center;

  img {
    width: 100%;
    height: auto;
    object-fit: cover;
    border-radius: 100%;
  }
`;

const PopupMenu = styled.div`
  position: absolute;
  top: 7vh;
  right: 3.5rem;
  opacity: 1;
  z-index: 2500;
  padding: 0.5rem 1rem;
  background-color: #040714;
  border-radius: 0.345rem;
  border: 1.3px solid rgba(151, 151, 151, 1);
  box-shadow: rgb(0 0 0/50%) 0px 0px 18px 0px;

  display: ${(event) => (event.activeState ? 'flex' : 'none')};
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;

  li {
    width: 100%;
    display: flex;
    align-items: flex-start;
    /* border-bottom: 1.3px solid rgba(151, 151, 151, 1); */
    list-style: none;
    > .nav-link {
      display: flex;
      align-items: center;
      text-decoration: none;
      position: relative;
      img {
        width: 1.3rem;
        height: 1.3rem;
        object-fit: contain;
      }
      span {
        color: #fff;
        font-size: 1rem;
        font-weight: 300;
        letter-spacing: 1px;
        line-height: 1.08;
        padding: 0.5rem;
        margin-top: 5px;
      }
    }
  }
`;
export default Navbar;
