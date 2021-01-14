import React from 'react';
import styled from 'styled-components';
import ThumbnailRecommendation from "./ThumbnailRecommendations";

const data = [{"title":"дора — втюрилась (Премьера клипа, 2021)","id":"5ffd8b897520e744c0b68826","views":0,"duration":"02:24","author":{"name":"Дора","id":"5ffc9995196c32271c1ab723"}},{"title":"дора — Дорадура (Премьера клипа)","id":"5ffd8bc77520e744c0b68827","views":0,"duration":"02:10","author":{"name":"Дора","id":"5ffc9995196c32271c1ab723"}},{"title":"дора — Осень пьяная","id":"5ffd8bfa7520e744c0b68828","views":0,"duration":"02:51","author":{"name":"Дора","id":"5ffc9995196c32271c1ab723"}},{"title":"дора — кьют-рок","id":"5ffd8c337520e744c0b68829","views":0,"duration":"02:43","author":{"name":"Дора","id":"5ffc9995196c32271c1ab723"}},{"title":"дора — Младшая сестра","id":"5ffd8c647520e744c0b6882a","views":0,"duration":"03:42","author":{"name":"Дора","id":"5ffc9995196c32271c1ab723"}},{"title":"дора — Если хочешь (live)","id":"5ffd8ca07520e744c0b6882b","views":0,"duration":"02:43","author":{"name":"Дора","id":"5ffc9995196c32271c1ab723"}},{"title":"дора — На скейте","id":"5ffd8cd77520e744c0b6882c","views":0,"duration":"03:02","author":{"name":"Дора","id":"5ffc9995196c32271c1ab723"}},{"title":"дора — втюрилась (тизер)","id":"5fffff58acd81c64787267d7","views":0,"duration":"00:19","author":{"name":"Дора","id":"5ffc9995196c32271c1ab723"}},{"title":"дора — не игра","id":"5fffffc4acd81c64787267d8","views":0,"duration":"02:24","author":{"name":"Дора","id":"5ffc9995196c32271c1ab723"}},{"title":"Дора & Таня Волкова - Дорадура (live)","id":"60000040acd81c64787267d9","views":0,"duration":"02:28","author":{"name":"Дора","id":"5ffc9995196c32271c1ab723"}},{"title":"дора — Если хочешь","id":"600000a9acd81c64787267da","views":0,"duration":"02:42","author":{"name":"Дора","id":"5ffc9995196c32271c1ab723"}},{"title":"дора — на обратной стороне земли","id":"60000144acd81c64787267db","views":0,"duration":"04:10","author":{"name":"Дора","id":"5ffc9995196c32271c1ab723"}},{"title":"дора — Младшая сестра (акустическая версия)","id":"600001a0acd81c64787267dc","views":0,"duration":"03:48","author":{"name":"Дора","id":"5ffc9995196c32271c1ab723"}}];

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 20px 10px;
`;

const Recommendations = () => {
  return (
    <Wrapper>
      {
        data.map(i => <ThumbnailRecommendation i={i} />)
      }
    </Wrapper>
  )
};

export default Recommendations;
