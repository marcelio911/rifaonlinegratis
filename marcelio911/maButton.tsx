import { Button, SHAPE } from "baseui/button";
import React, { FC } from "react";

interface Props {
  title?: string;
  clickActionResult: () => void;
}

const MaButton: FC<Props> = (props) => {
  const { title, clickActionResult } = props;

  return (
    <Button
      onClick={() => clickActionResult()}
      shape={SHAPE.pill}
      overrides={{
        BaseButton: {
          style: ({ $theme }) => ({
            outline: `${$theme.colors.warning200} solid`,
            backgroundColor: $theme.colors.warning200,
          }),
        },
        EndEnhancer: {
          style: ({ $theme }) => ({
            outline: `${$theme.colors.warning200} solid`,
            backgroundColor: $theme.colors.warning200,
          }),
        },
        LoadingSpinner: {
          style: ({ $theme }) => ({
            outline: `${$theme.colors.warning200} solid`,
            backgroundColor: $theme.colors.warning200,
          }),
        },
      }}
    >
      { title }
    </Button>
  );
};
export default MaButton;
