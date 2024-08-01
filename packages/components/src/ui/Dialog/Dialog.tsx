// import React from "react";
// import * as S from "./style";
// import { DialogProps } from "./types";
// import { Button } from "../Button/Button";
// import { TextButton } from "../Button/TextButton/TextButton";
// import { TextField } from "../TextField/TextField";
// import { AlimoThemelight } from "../../../styles/src/AlimoTheme/AlimoTheme";

// export const Dialog = ({
//   type,
//   title,
//   content,
//   confirmContent,
//   denyContent,
//   value,
//   placeholder,
//   trailingIcon,
//   onchange,
//   onclick,
//   onConfirm,
//   onDeny,
//   customStyle,
// }: DialogProps) => {
//   return (
//     <S.DialogWrap type={type}>
//       <S.TextWrap>
//         <h1>{title}</h1>
//         <span>{content}</span>
//       </S.TextWrap>
//       {type === "content" && (
//         <TextField
//           shape="default"
//           isDisabled={false}
//           placeholder={placeholder!}
//           type="text"
//           value={value}
//           onchange={onchange!}
//           onclick={onclick!}
//           trailingIcon={trailingIcon}
//           customStyle={{ width: "293px" }}
//         />
//       )}
//       <S.ButtonWrap
//         customStyle={type === "dismiss" ? { justifyContent: "flex-end" } : { justifyContent: "center" } || customStyle}
//       >
//         <TextButton
//           disabled={false}
//           onclick={onDeny}
//           buttonSize="small"
//           customStyle={{ color: AlimoThemelight.primary }}
//         >
//           {denyContent}
//         </TextButton>
//         {type !== "dismiss" && (
//           <Button
//             buttonSize="cta"
//             disabled={false}
//             onclick={onConfirm}
//             customStyle={{ width: "143px", height: "56px" }}
//           >
//             {confirmContent}
//           </Button>
//         )}
//       </S.ButtonWrap>
//     </S.DialogWrap>
//   );
// };
