import { CommentOutlined } from "@ant-design/icons";
import { Button } from "antd";
import React, { useState } from "react";

const CommentButton = ({ size }) => {
  return (
    <button shape="circle" style={{ fontSize: size }}>
      <CommentOutlined />
    </button>
  );
};

export default CommentButton;
