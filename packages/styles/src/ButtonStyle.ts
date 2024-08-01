import { RuleSet, css } from "styled-components";

interface ButtonStyleRule {
  default: RuleSet;
  large: RuleSet;
  medium: RuleSet;
  small: RuleSet;
  extralsmall:RuleSet;
}

export const ButtonSizeStyle: ButtonStyleRule = {
  default: css`
    width: 320px;
    height: 54px;
    border-radius: 12px;
  `,

  large: css`
    width: 146px;
    height: 45px;
    border-radius: 10px;
  `,

  medium: css`
    width: 128px;
    height: 41px;
    border-radius: 12px;
  `,

  small: css`
    width: 112px;
    height: 33px;
    border-radius: 5px;
  `,

  extralsmall: css`
    width: 112px;
    height: 33px;
    border-radius: 5px;
  `,
};

export const ButtonTextStyle = {
  default: css`
    width: 108px;
    gap: 6px;
  `,

  large: css`
    width: 106px;
    gap: 5px;
  `,

  medium: css`
    width: 104px;
    gap: 4px;
  `,

  small: css`
    width: 102px;
    gap: 3px;
  `,
};
