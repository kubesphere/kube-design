import { addParameters } from "@storybook/react";
import "!style-loader!css-loader!sass-loader!./styles.scss";

addParameters({
  options: {
    /**
     * display the top-level grouping as a "root" in the sidebar
     * @type {Boolean}
     */
    showRoots: true,
  }
});
