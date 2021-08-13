import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SlideStyled, SlideDotsStyled, SlideDotStyled } from "./SliderElement";
import SliderImage from "../SliderImage";
import Wrapper from "../Wrapper";
import api from "../../api";
import { TRENDING_MOVIES } from "../../actions";

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(1);
  const state = useSelector((state) => state);
  const trendingListId = state.list["allTrending"];
  const trendingList = state.movieTrending;
  const dispatch = useDispatch();

  const getTrendingMovies = async () => {
    const { results } = await api.trendingMovie();
    dispatch({
      type: TRENDING_MOVIES,
      payload: results.slice(0, 5),
    });
  };

  const moveDot = (index) => {
    setSlideIndex(index);
  };

  useEffect(() => {
    getTrendingMovies();
  }, []);

  return (
    <>
      <Wrapper>
        <SlideStyled>
          {trendingListId.map((id, index) => (
            <SliderImage
              key={index}
              movie={trendingList.get(id)}
              isVisible={slideIndex === index + 1}
            />
          ))}
        </SlideStyled>
      </Wrapper>
      <SlideDotsStyled>
        {Array.from({ length: 5 }).map((item, index) => (
          <SlideDotStyled
            key={index}
            isActive={slideIndex === index + 1}
            onClick={() => moveDot(index + 1)}
          />
        ))}
      </SlideDotsStyled>
    </>
  );
};

export default Slider;
