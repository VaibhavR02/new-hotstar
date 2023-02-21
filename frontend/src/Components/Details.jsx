import React, { useEffect, useReducer, useState } from 'react'; //  { useEffect, useState }
import styled from 'styled-components';
import PlayIcon from './images/play-icon-black.png';
import TrailerIcon from './images/play-icon-white.png';
import GrpwatchIcon from './images/group-icon.png';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Helmet } from 'react-helmet-async';

const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_REQUEST':
      return { ...state, loading: true };

    case 'FETCH_SUCCESS':
      return { ...state, movie: action.payload, loading: false };

    case 'FETCH_FAIL':
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
};

const Details = () => {
  const params = useParams();
  const { id } = params;
  // eslint-disable-next-line
  const [showPlayer, setShowPlayer] = useState(false);

  const [{ loading, error, movie }, dispatch] = useReducer(reducer, {
    loading: true,
    movie: [],
    error: '',
  });

  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: 'FETCH_REQUEST' });
      try {
        const result = await axios.get(`/api/movies/id/${id}`);
        dispatch({ type: 'FETCH_SUCCESS', payload: result.data });
      } catch (err) {
        dispatch({ type: 'FETCH_FAIL', payload: err.message });
      }
    };
    fetchData();
  }, [id]);

  return loading ? (
    <div>loading....</div>
  ) : error ? (
    <div>{error}</div>
  ) : (
    <Background
      style={{
        background: `linear-gradient(
          rgba(0, 0, 0, 0),
          rgba(0, 0, 0, 0),
          rgba(0, 0, 0, 0),
          rgba(0, 0, 0, 0)
        ), url(${movie.BackgroundImg}) center/cover no-repeat
        `,
      }}
    >
      <Container>
        <Content>
          <Helmet>
            <title> {movie.Title}</title>
          </Helmet>{' '}
          <ImagesTitle>
            <img src={movie.TitleImg} alt="img/title" />
          </ImagesTitle>
          <h2>{movie.Genres}</h2>
          <p>{movie.Description}</p>
          <ButtonGroups>
            <PlayBtn>
              <img src={PlayIcon} alt="playIcon" /> <span>Play</span>
            </PlayBtn>
            <TrailerBtn>
              <img src={TrailerIcon} alt="TrailerIcon" /> <span>Trailer</span>
              <span>Trailer</span>
            </TrailerBtn>
            <AddtoPlaylistBtn>
              {' '}
              <span></span>
              <span></span>
            </AddtoPlaylistBtn>
            <GroupwarchBtn>
              <img src={GrpwatchIcon} alt="grpIcon" />{' '}
            </GroupwarchBtn>
          </ButtonGroups>
        </Content>
      </Container>
    </Background>
  );
};

const Background = styled.main`
  min-height: 95vh;

  @media screen and (min-width: 991px) and (max-width: 1200px) {
    min-height: 72vh;
  }
  @media screen and (min-width: 550px) and (max-width: 991px) {
    min-height: 65vh;
  }
  @media screen and (min-width: 280px) and (max-width: 550px) {
    min-height: 55vh;
    object-fit: fill;
  }
`;
const Container = styled.div`
  width: 95%;
  height: auto;
  margin: 0 auto;
`;

const ImagesTitle = styled.div`
  width: 100%;
  max-width: 450px;
  display: flex;
  /* margin-top: 19vh; */
  overflow: hidden;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  flex-wrap: wrap;

  @media screen and (min-width: 550px) and (max-width: 1200px) {
    max-width: 325px;
  }
  @media screen and (min-width: 375px) and (max-width: 550px) {
    max-width: 250px;
  }
  @media screen and (min-width: 280px) and (max-width: 375px) {
    max-width: 150px;
  }

  img {
    width: 100%;
    height: auto;
    object-fit: contain;
  }
`;

const Content = styled.div`
  display: flex;
  min-height: 95vh;
  overflow: hidden;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  flex-wrap: wrap;
  position: relative;
  @media screen and (min-width: 550px) and (max-width: 1200px) {
    max-height: 72vh;
  }
  @media screen and (min-width: 375px) and (max-width: 550px) {
    max-height: 65vh;
  }
  @media screen and (min-width: 280px) and (max-width: 375px) {
    max-height: 55vh;
    object-fit: fill;
  }

  h1 {
    color: #fff;
    font-size: 1.2rem;
    font-weight: 500 !important;
    @media screen and (min-width: 550px) and (max-width: 1200px) {
      font-size: 1rem;
    }
    @media screen and (min-width: 375px) and (max-width: 767px) {
      font-size: 0.75rem;
    }
    @media screen and (min-width: 280px) and (max-width: 375px) {
      font-size: 0.7rem;
      max-width: 250px;
    }
  }
  p {
    line-height: 1.4;
    font-size: 20px;
    padding: 1rem 0;
    color: #f9f9f9;
    max-width: 650px;
    width: 100%;
    height: auto;
    @media screen and (min-width: 550px) and (max-width: 1200px) {
      font-size: 1rem;
      max-width: 550px;
    }
    @media screen and (min-width: 375px) and (max-width: 767px) {
      font-size: 0.75rem;
      max-width: 400px;
      padding: 0.5rem 0;
    }
    @media screen and (min-width: 280px) and (max-width: 375px) {
      font-size: 0.75rem;
      max-width: 400px;
      padding: 0.3rem 0;
    }
  }
`;

const ButtonGroups = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const PlayBtn = styled.button`
  cursor: default;
  margin-right: 22px;
  outline: none;
  border: 1px solid rgba(249, 249, 249, 1);
  background: rgba(249, 249, 249, 1);
  border-radius: 0.345rem;
  padding: 0.1rem 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;

  @media screen and (min-width: 550px) and (max-width: 1200px) {
    padding: 0.1rem 1rem;
  }
  @media screen and (min-width: 375px) and (max-width: 550px) {
    padding: 0.1rem 1rem;
  }
  @media screen and (min-width: 280px) and (max-width: 375px) {
    border-radius: 0.145rem;
    margin-right: 13px;
    background: #f9f9f9;
    padding: 0.1rem 0.7rem;
  }

  img {
    width: 100%;
    height: auto;
    opacity: 1;
    z-index: 1500;
    object-fit: contain;
    @media screen and (min-width: 550px) and (max-width: 1200px) {
      width: 25px;
    }
    @media screen and (min-width: 280px) and (max-width: 550px) {
      width: 19px;
    }
  }

  span {
    color: #000;
    font-size: 1.2rem;
    font-weight: 400 !important;
    text-transform: uppercase;
    line-height: 1.08;
    letter-spacing: 1px;
    @media screen and (min-width: 550px) and (max-width: 1200px) {
      font-size: 1rem;
    }
    @media screen and (min-width: 375px) and (max-width: 767px) {
      font-size: 0.8rem;
    }
    @media screen and (min-width: 280px) and (max-width: 375px) {
      font-size: 0.8rem;
    }
  }
`;

const TrailerBtn = styled(PlayBtn)`
  color: rgb(249, 249, 249);
  background: rgb(0, 0, 0, 0.5);
  border: 1px solid rgb(249, 249, 249);

  span {
    color: #fff;
  }

  &:hover {
    color: #000 !important;
    background: rgb(198, 198, 198, 1);
    cursor: pointer;
  }
`;
const AddtoPlaylistBtn = styled.button`
  height: 41px;
  width: 41px;
  display: flex;
  cursor: pointer;
  margin-right: 22px;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  border-radius: 50%;
  border: 2px solid white;

  background-color: rgba(0, 0, 0, 0.5);

  @media screen and (min-width: 550px) and (max-width: 1200px) {
    height: 35px;
    width: 35px;
  }
  @media screen and (min-width: 280px) and (max-width: 550px) {
    height: 29px;
    width: 29px;
    margin-right: 13px;
  }

  span {
    background-color: rgba(249, 249, 249);
    display: inline-block;

    &:first-child {
      height: 2px;
      width: 16px;
      transform: translate(1px, 0px) rotate(0deg);
      @media screen and (min-width: 280px) and (max-width: 550px) {
        width: 15px;
      }
    }

    &:nth-child(2) {
      width: 2px;
      height: 16px;
      transform: translateX(-8px) rotate(0deg);
      @media screen and (min-width: 280px) and (max-width: 550px) {
        height: 13px;
      }
    }
  }
`;

const GroupwarchBtn = styled.button`
  height: 30px;
  width: 30px;
  display: flex;
  cursor: pointer;
  margin-right: 22px;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  border-radius: 50%;
  background: rgb(0, 0, 0, 0.5);
  border: 2px solid white;
  @media screen and (min-width: 280px) and (max-width: 550px) {
    height: 31px;
    width: 31px;
  }

  img {
    width: 100%;
    object-fit: contain;
    height: auto;
    @media screen and (min-width: 550px) and (max-width: 1200px) {
      height: 29px;
      width: 29px;
    }
    @media screen and (min-width: 280px) and (max-width: 550px) {
      height: 23px;
      width: 23px;
    }
  }
`;

// const Player = styled.div`
//   position: absolute;
//   inset: 0;
//   background: #000;
//   opacity: 50;
//   height: 100%;
//   width: 100%;
//   z-index: 50;
// `;
export default Details;
