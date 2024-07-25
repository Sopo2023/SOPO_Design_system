import "styled-components";

declare module "styled-components" {
  export interface SOPOTheme {
    primaryLight: string;
    onPrimary:string;
    signBackground:string;
    mainBackground:string;
    signButton:string;
    buttonColor:string;
    statusRed:string;
    statusYellow:string;
    statusGreen:string;
    disable:string;
    lightDisable:string;
    label:string;
  }
}