import { ASSET_PATHS } from "@repo/assets";
import { MouseEventHandler } from "react";

export const SortingIcon = ({
  sortBy,
  onClick,
  id,
}: {
  sortBy: string;
  onClick?: MouseEventHandler;
  id: string | number | undefined;
}) => {
  // Functions
  const addClassName = () => {
    if (sortBy === "") {
      return ASSET_PATHS.SVGS.LEFT_ARROW;
    } else if (sortBy === id || sortBy === `-${id}`) {
      if (sortBy.includes("-")) {
        return ASSET_PATHS.SVGS.LEFT_ARROW;
      } else {
        return ASSET_PATHS.SVGS.LEFT_ARROW;
      }
    }
  };

  return (
    <img
      src={addClassName()}
      alt="sorting icon"
      className="sortingIcon"
      onClick={onClick}
    />
  );
};
