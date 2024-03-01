import * as React from "react";
import { useState } from "react";
import { updateIndices } from "../function/index";

interface IElementaryCaraousel {
  endIndex: number;
  carouselContentArr: any[];
  component: React.ComponentType<any>;
}

const ElementaryCaraousel = ({
  endIndex,
  carouselContentArr,
  component: CarouselItem, 
}: IElementaryCaraousel) => {
  const [pageState, setPageState] = useState({
    startIndex: 0,
    endIndex: endIndex,
  });

  const handlePageChange = (direction: string) => {
    setPageState(prevState => {
      const { newStartIndex, newEndIndex } = updateIndices(
        prevState.startIndex,
        prevState.endIndex,
        direction,
        carouselContentArr,
        1,
        true
      );
      return {
        startIndex: newStartIndex,
        endIndex: newEndIndex,
      };
    });
  };

  return (
    <div>
      <button onClick={() => handlePageChange("prev")}>{"<"}</button>
      <div>
        {carouselContentArr
          .slice(
            pageState.startIndex,
            pageState.endIndex < carouselContentArr.length
              ? pageState.endIndex
              : carouselContentArr.length
          )
          .map((carouselContentEle, index) => (
            <CarouselItem key={index} {...carouselContentEle} />
          ))}
      </div>
      <button onClick={() => handlePageChange("next")}>{">"}</button>
    </div>
  );
};

export default ElementaryCaraousel;
