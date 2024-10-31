import type { Preview } from "@storybook/react";
import { SOPOColor } from "../../foundations/src";
const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    backgrounds:{
      default: "defalut",
      values: [
        {
            name: "defalut",
            value:  SOPOColor.Gray50,
        }
    ],
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
