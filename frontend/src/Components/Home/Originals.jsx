import React, { useEffect, useReducer } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import LoadingBox from '../LoadingBox';

const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_REQUEST':
      return { ...state, loading: true };

    case 'FETCH_SUCCESS':
      return { ...state, movies: action.payload, loading: false };

    case 'FETCH_FAIL':
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
};

const Originals = () => {
  var settings = {
    dots: false,
    isFinite: true,
    speed: 1000,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: false,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 4 } },
      { breakpoint: 991, settings: { slidesToShow: 3 } },
      { breakpoint: 767, settings: { slidesToShow: 2 } },
      { breakpoint: 425, settings: { slidesToShow: 1 } },
    ],
  };

  const [{ loading, error, movies }, dispatch] = useReducer(reducer, {
    loading: true,
    movies: [],
    error: '',
  });
  // const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: 'FETCH_REQUEST' });
      try {
        const result = await axios.get('/api/movies');
        dispatch({ type: 'FETCH_SUCCESS', payload: result.data });
      } catch (err) {
        dispatch({ type: 'FETCH_FAIL', payload: err.message });
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <Section>
        <h1> Originals</h1>
        <Carousel {...settings}>
          {loading ? (
            <LoadingBox />
          ) : error ? (
            <div>{error}</div>
          ) : (
            movies.slice(36, 47).map((movies) => (
              <Wrap key={movies._id}>
                <div>
                  <NavLink to={`/details/${movies._id}`}>
                    <img src={movies.CardImg} alt="slideimg" />
                  </NavLink>
                </div>
              </Wrap>
            ))
          )}
        </Carousel>
      </Section>
    </>
  );
};

const Section = styled.section`
  padding: 0.5rem 0;

  h1 {
    font-size: 1.7rem;
    text-transform: uppercase;
    font-weight: 300 !important;
    text-shadow: 0.1rem 0.1rem 0.1rem rgba(255, 255, 255, 0.1);
    margin: 2vh 0 1vh 2rem;
    @media screen and (max-width: 991px) {
      font-size: 1.1rem;
    }
    @media screen and (max-width: 550px) {
      font-size: 0.95rem;
    }
  }
`;
const Carousel = styled(Slider)`
  ul li button {
    &::before {
      font-size: 11px;
      color: rgb(150, 158, 171);
    }
  }
  ul li.slick-active button {
    &::before {
      color: #fff !important;
    }
  }

  & > button {
    opacity: 0;
    z-index: 1500;
    width: 5vw;
    height: 100%;
    &:hover {
      opacity: 1;
      z-index: 2000;
      transition: opacity 0.2s ease 0s;
    }
  }

  .slick-prev {
    left: -5%;
  }
  .slick-next {
    right: -5%;
  }
  .slick-list {
    overflow: initial !important;
  }
`;

const Wrap = styled.div`
  position: relative;

  div {
    border-radius: 4px;
    padding: 0 5px;
    display: block;
    opacity: 1;
    z-index: 2000;
    box-shadow: rgb(0 0 0 /69%) 0px 26px 30px -10px,
      rgb(0 0 0 /73%) 0px 16px 10px -10px;
    transition: all 0.5s;

    cursor: default;

    img {
      width: 100%;
      height: 20vh;
      object-fit: fill;
      border-radius: 4px;
      opacity: 1;
      z-index: 1500;
      position: relative;

      @media screen and (max-width: 991px) {
        width: 100%;
        height: auto;
        object-fit: cover;
      }
    }
    &:hover {
      transform: scale(1.08);
    }
  }
`;

export default Originals;
