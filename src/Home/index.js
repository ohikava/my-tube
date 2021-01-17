import React, {useEffect} from "react";
import styled from 'styled-components';
import Thumbnail from "./Thumbnail";
import SkeletonVideos from "./SkeletonVideos";
import {useDispatch, useSelector} from "react-redux";
import {getVideos} from "../services/VideoReducer/actions";
import MainList from './MainList';

const Wrapper = styled.div`
  display: grid;
  width: 100%;
  gap: 15px;
  @media(min-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    grid-gap: 25px 5px;
    padding-right: 15px;
  }
`;

const Videos = () => {
  const dispatch = useDispatch();
  const date = useSelector(s => s.video.videos);
  useEffect(() => {
    console.log('hey')
    dispatch(getVideos());
  }, [dispatch])
  return (
    <MainList>
      <Wrapper>
        {
          date.length > 0 ? date.map(i => <Thumbnail i={i} id={i.id}/>) : <SkeletonVideos />
        }
      </Wrapper>
    </MainList>
  )
};

export default Videos;
