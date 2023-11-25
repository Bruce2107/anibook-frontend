import React, { HTMLAttributes, forwardRef } from 'react';
import StyledInput, { Field } from './style';

type Props = HTMLAttributes<HTMLInputElement> & {
  initialValue?: string
};

const TextFiled = forwardRef<HTMLInputElement, Props>((props, ref) => (
  <Field>
    <label htmlFor={`input-${props.itemType}`} id={`label-${props.itemType}`}>
      {props.title}
    </label>
    <StyledInput
      ref={ref}
      type={props.itemType}
      aria-labelledby={`label-${props.itemType}`}
      id={`input-${props.itemType}`}
      required={!!props['aria-required']}
      value={props.initialValue}
      {...props}
    />
  </Field>
));

export default TextFiled;
