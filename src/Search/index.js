import React,{useEffect} from 'react';
import styled from 'styled-components';
import MainList from '../Home/MainList';
import useQuery from "../utils/useQuery";
import {useDispatch, useSelector} from "react-redux";
import Thumbnail from "./Thumbnail";
import {searchVideo} from "../services/VideoReducer/actions";
import SkeletonThumbnails from "./SkeletonThumbnails";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const SearchPage = () => {
  const query = useQuery();
  const dispatch = useDispatch();
  const search = useSelector(s => s.video.search);

  useEffect(() => {
    dispatch(searchVideo(query.get('query')));
  }, [dispatch, query]);


  return (
    <MainList>
      <Wrapper>
        {
          search.length ? search.map(i => <Thumbnail {...i} />) : <SkeletonThumbnails />
        }
      </Wrapper>
    </MainList>
  )
};

export default SearchPage;
