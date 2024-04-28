import React from "react";
import styled from "styled-components";

const ErrorText = styled.p`
  color: red;
  font-size: 12px;
  width: 100% !important;
  position: absolute;
  left: 230px;
  top: 100%;
`;

export default function Field({
  label = "Input label",
  required = false,
  value = "",
  renderProps,
  placeholder = "placeholder",
  error,
  type = "text",
  ...props
}) {
  return (
    <label className="relative">
      <p>
        {label}
        {required && <span>*</span>}
      </p>

      {renderProps ? (
        renderProps?.(props)
      ) : (
        <input type={type} placeholder={placeholder} {...props} />
      )}

      {error && <ErrorText className="">{error}</ErrorText>}
    </label>
  );
}
