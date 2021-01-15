import React,{useEffect} from 'react';
import styled from 'styled-components';
import Thumb from "./Thumb";
import {useParams} from "react-router-dom";
import Recommendations from "./Recommendations";
import Comments from "./Comments";
import HideFromMobile from "../utils/HideFromMobile";
import HideFromComputer from "../utils/HideFromComputer";
import SkeletonThumb from "./SkeletonThumb";
import {useDispatch, useSelector} from "react-redux";
import {getVideo, clear} from "../services/VideoReducer/actions";
import SkeletonRecommendations from "./SkeletonRecommendations";

const Wrapper = styled.div`
  padding-top: 60px;
  display: flex;
  flex-direction: column;
  @media(min-width: 768px) {
    display: grid;
    grid-template-columns: 2fr 1fr;
  }
`;
const Column = styled.div``;

const Video = () => {
  const {id} = useParams();
  const dispatch = useDispatch();
  const video = useSelector(s => s.video.video);

  useEffect(() => {
    dispatch(clear());
    dispatch(getVideo(id))
    console.log(video)
  }, [dispatch, id]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id])
  return (
    <Wrapper>
      <HideFromComputer border="768">
      {
        Object.keys(video).length ? <Thumb v = {video || {}} /> : <SkeletonThumb />
      }
      {
        Object.keys(video).length ? <Recommendations a={video.recommendations} /> : <SkeletonRecommendations />
      }
      <Comments amount={1941}>
      </Comments>
      </HideFromComputer>
      <HideFromMobile border="768">
        <Column>
        {
            Object.keys(video).length ? <Thumb v = {video || {}} /> : <SkeletonThumb />
        }
        <Comments amount={1941}>
        </Comments>
        </Column>
        <Column>
          {
            Object.keys(video).length ? <Recommendations a={video.recommendations} /> : <SkeletonRecommendations />
          }
        </Column>
      </HideFromMobile>
    </Wrapper>
  )
};

export default Video;
