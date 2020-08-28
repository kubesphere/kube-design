import React from "react";
import { mount } from "enzyme";

import Alert from "./Alert";

it("renders correctly", () => {
  const props = {
    type: "info",
    title: "title",
    message: "message",
  };

  const wrapper = mount(<Alert {...props} />);
  expect(wrapper).toIncludeText(props.title);
  expect(wrapper).toIncludeText(props.message);
  expect(wrapper.find(".kubed-icon-question")).toHaveLength(1);
});

it("hidden icon", () => {
  const props = {
    type: "info",
    message: "message",
  };

  const wrapper = mount(<Alert {...props} />);
  expect(wrapper.find(".kubed-icon")).toHaveLength(0);
});
