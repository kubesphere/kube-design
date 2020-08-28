import React from "react";
import { mount } from "enzyme";
import Button from "../Button";
import { Input } from "../Input";
import TextArea from "../TextArea";

import Form from "./index";

it("renders correctly", () => {
  const data = {
    name: "redis-001",
    alias: "Redis",
    desc: "redis for lab",
  };

  const wrapper = mount(
    <Form data={data}>
      <Form.Item label={"Name"} desc={"SERVICE_NAME_DESC"}>
        <Input name="name" />
      </Form.Item>
      <Form.Item label={"Alias"} desc={"ALIAS_DESC"}>
        <Input name="alias" />
      </Form.Item>
      <Form.Item label={"Description"}>
        <TextArea name="desc" />
      </Form.Item>
    </Form>
  );

  expect(wrapper.find("form")).toExist();
  expect(wrapper.find('input[name="name"]')).toHaveValue(data.name);
  expect(wrapper.find('input[name="alias"]')).toHaveValue(data.alias);
  expect(wrapper.find('textarea[name="desc"]')).toHaveValue(data.desc);
});

it("submit correctly", () => {
  const data = {
    name: "redis-001",
    alias: "Redis",
    desc: "redis for lab",
  };

  const handleSubmit = jest.fn();

  const wrapper = mount(
    <Form onSubmit={handleSubmit}>
      <Form.Item label={"Name"} desc={"SERVICE_NAME_DESC"}>
        <Input name="name" />
      </Form.Item>
      <Form.Item label={"Alias"} desc={"ALIAS_DESC"}>
        <Input name="alias" />
      </Form.Item>
      <Form.Item label={"Description"}>
        <TextArea name="desc" />
      </Form.Item>
      <Button htmlType="submit">Submit</Button>
    </Form>
  );

  wrapper.find('input[name="name"]').prop("onChange")({
    target: { value: data.name },
    currentTarget: { value: data.name },
  });
  wrapper.find('input[name="alias"]').prop("onChange")({
    target: { value: data.alias },
    currentTarget: { value: data.alias },
  });
  wrapper.find('textarea[name="desc"]').prop("onChange")({
    target: { value: data.desc },
    currentTarget: { value: data.desc },
  });

  wrapper.find('button[type="submit"]').simulate("submit");
  expect(handleSubmit).toHaveBeenCalledWith(data);
});

it("update props", () => {
  const data1 = {
    name: "redis-001",
    alias: "Redis",
    desc: "redis for lab",
  };
  const data2 = {
    name: "redis-002",
    alias: "Redis",
    desc: "redis for lab",
  };

  const handleSubmit = jest.fn();

  const wrapper = mount(
    <Form data={data1} onSubmit={handleSubmit}>
      <Form.Item label={"Name"} desc={"SERVICE_NAME_DESC"}>
        <Input name="name" />
      </Form.Item>
      <Form.Item label={"Alias"} desc={"ALIAS_DESC"}>
        <Input name="alias" />
      </Form.Item>
      <Form.Item label={"Description"}>
        <TextArea name="desc" />
      </Form.Item>
      <Button htmlType="submit">Submit</Button>
    </Form>
  );

  wrapper.setProps({ data: data2 });
  expect(wrapper.find('input[name="name"]')).toHaveProp("value", data2.name);
  wrapper.find('button[type="submit"]').simulate("submit");
  expect(handleSubmit).toHaveBeenCalledWith(data2);
});
