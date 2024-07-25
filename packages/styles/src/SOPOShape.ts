import { css, RuleSet } from "styled-components";

export type ShapeSizeType =
  | "Small"
  | "Medium"
  | "Large"
  | "ExtraLarge";

export type ShapeStyles = {
  Small: RuleSet;
  Medium: RuleSet;
  Large: RuleSet;
  ExtraLarge: RuleSet;
};

export const SOPOShape: ShapeStyles = Object.freeze({

  Small: css`
    border-radius: 5px;
  `,
  Medium: css`
    border-radius: 10px;
  `,
  Large: css`
    border-radius: 12px;
  `,
  ExtraLarge: css`
    border-radius: 100px;
  `,
});