import React from "react";
import styled from 'styled-components';
import Thumbnail from "./Thumbnail";

const Wrapper = styled.div`
  display: grid;
  width: 100%;
  @media(min-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    grid-gap: 25px 5px;
    padding-right: 15px;
  }
`;

const date = [
  {
    id: 1,
    img: "1.webp",
    icon: "4.jpg",
    title: "2021 Rolls-Royce Phantom by MANSORY-New Royal Sedan in detail",
    channel: "RoCars",
    duration: "8:06",
    views: 1000000,
    date: "01.12.2020"
  },
  {
    id: 2,
    img: "2.webp",
    icon: "5.jpg",
    title: "Сомали/ Самая опасная страна для туристов/ Как Люди Живут/ The Люди",
    channel: "The Люди",
    duration: "1:16:10",
    views: 7200000,
    date: "01.01.2021"
  },
  {
    id: 3,
    img: "3.webp",
    icon: "6.jpg",
    title: "Ratatouille 2: The Last Bite - Live Action Trailer Parody",
    channel: "anthpo",
    duration: "1:48",
    views: 370000,
    date: "01.01.2020"
  },
  {
    id: 4,
    img: "1.webp",
    icon: "4.jpg",
    title: "2021 Rolls-Royce Phantom by MANSORY-New Royal Sedan in detail",
    channel: "RoCars",
    duration: "8:06",
    views: 1000000,
    date: "01.12.2020"
  },{
    id: 5,
    img: "2.webp",
    icon: "5.jpg",
    title: "Сомали/ Самая опасная страна для туристов/ Как Люди Живут/ The Люди",
    channel: "The Люди",
    duration: "1:16:10",
    views: 7200000,
    date: "01.01.2021"
  },
  {
    id: 6,
    img: "3.webp",
    icon: "6.jpg",
    title: "Ratatouille 2: The Last Bite - Live Action Trailer Parody",
    channel: "anthpo",
    duration: "1:48",
    views: 370000,
    date: "01.01.2020"
  },
  {
    id: 7,
    img: "1.webp",
    icon: "4.jpg",
    title: "2021 Rolls-Royce Phantom by MANSORY-New Royal Sedan in detail",
    channel: "RoCars",
    duration: "8:06",
    views: 1000000,
    date: "01.12.2020"
  },
  {
    id: 8,
    img: "2.webp",
    icon: "5.jpg",
    title: "Сомали/ Самая опасная страна для туристов/ Как Люди Живут/ The Люди",
    channel: "The Люди",
    duration: "1:16:10",
    views: 7200000,
    date: "01.01.2021"
  },
  {
    id: 9,
    img: "3.webp",
    icon: "6.jpg",
    title: "Ratatouille 2: The Last Bite - Live Action Trailer Parody",
    channel: "anthpo",
    duration: "1:48",
    views: 370000,
    date: "01.01.2020"
  },
  {
    id: 10,
    img: "1.webp",
    icon: "4.jpg",
    title: "2021 Rolls-Royce Phantom by MANSORY-New Royal Sedan in detail",
    channel: "RoCars",
    duration: "8:06",
    views: 1000000,
    date: "01.12.2020"
  },{
    id: 11,
    img: "2.webp",
    icon: "5.jpg",
    title: "Сомали/ Самая опасная страна для туристов/ Как Люди Живут/ The Люди",
    channel: "The Люди",
    duration: "1:16:10",
    views: 7200000,
    date: "01.01.2021"
  },
  {
    id: 12,
    img: "3.webp",
    icon: "6.jpg",
    title: "Ratatouille 2: The Last Bite - Live Action Trailer Parody",
    channel: "anthpo",
    duration: "1:48",
    views: 370000,
    date: "01.01.2020"
  },
]
const Videos = () => {
  return (
    <Wrapper>
      {
        date.map(i => <Thumbnail i={i} id={i.id}/>)
      }
    </Wrapper>
  )
};

export default Videos;
