export const updateIndices = (
  startIndex: number,
  endIndex: number,
  direction: string,
  tags: any[],
  stepBy = 1,
  wantedStepByScroll = false
) => {
  if (direction === "prev" && startIndex > 0) {
    if (endIndex === tags.length && wantedStepByScroll) {
      return { newStartIndex: startIndex - stepBy, newEndIndex: startIndex };
    }
    return {
      newStartIndex: startIndex - stepBy,
      newEndIndex: endIndex - stepBy,
    };
  } else if (direction === "next" && endIndex < tags.length) {
    if (tags.length - endIndex < stepBy) {
      return { newStartIndex: endIndex, newEndIndex: tags.length };
    }
    return {
      newStartIndex: startIndex + stepBy,
      newEndIndex: endIndex + stepBy,
    };
  }
  return { newStartIndex: startIndex, newEndIndex: endIndex };
};
