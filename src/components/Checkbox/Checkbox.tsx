/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';
import { GLOBAL_PREFIX } from '../../constants/prefix';
import { generateClasses } from '../../utils';
import { Colors } from '../../constants/colors';
import IconCheck from '../../icons/check';
import React from 'react';

type BaseCheckboxAttribute = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  'type' | 'maxlength' | 'minlength' | 'multiple'
>;

type ColorType = 'primary' | 'blue' | 'green' | 'yellow' | 'red';

export interface CheckboxProps extends BaseCheckboxAttribute {
  colorType?: ColorType;
  labelStyle?: React.CSSProperties;
}

const CHECKBOX_PREFIX = `${GLOBAL_PREFIX}-checkbox`;
const generateCheckboxCls = generateClasses(CHECKBOX_PREFIX);

const Checkbox = React.forwardRef<HTMLLabelElement, CheckboxProps>(
  ({ colorType, name, labelStyle, className, children, ...checkboxProps }, ref) => {
    return (
      <label
        ref={ref}
        htmlFor={name}
        className={generateCheckboxCls([
          'wrapper',
          {
            disabled: checkboxProps.disabled,
            checked: checkboxProps.checked,
          },
          className,
        ])}
        css={CheckboxWrapperStyle}
        style={labelStyle}>
        <span className={generateCheckboxCls([colorType, 'checkbox'])}>
          <input type='checkbox' id={name} className={generateCheckboxCls(['input'])} {...checkboxProps} />
          <span className={generateCheckboxCls(['inner'])}>
            <IconCheck className={generateCheckboxCls(['icon', 'icon-check'])} />
          </span>
        </span>
        {children && <span className={generateCheckboxCls(['help'])}>{children}</span>}
      </label>
    );
  },
);

export default Checkbox;

const CheckboxDefaultStyle = css({
  position: 'relative',

  display: 'inline-flex',
  justifyContent: 'center',
  alignItems: 'center',

  width: 12,
  height: 12,

  borderWidth: 2,
  borderStyle: 'solid',
  borderColor: Colors.primary[700],
  borderRadius: 4,

  transitionProperty: 'all',
  transitionDuration: '100ms',
  transitionTimingFunction: 'ease-out',

  [`&.${CHECKBOX_PREFIX}-blue`]: {
    borderColor: Colors.blue[300],
  },

  [`&.${CHECKBOX_PREFIX}-green`]: {
    borderColor: Colors.green[300],
  },

  [`&.${CHECKBOX_PREFIX}-yellow`]: {
    borderColor: Colors.yellow[300],
  },

  [`&.${CHECKBOX_PREFIX}-red`]: {
    borderColor: Colors.red[300],
  },

  [`& > input.${CHECKBOX_PREFIX}-input`]: {
    position: 'absolute',
    inset: 0,

    margin: 0,
    padding: 0,

    opacity: 0,
  },

  [`& > span.${CHECKBOX_PREFIX}-inner`]: {
    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center',

    width: '100%',
    height: '100%',

    opacity: 0,
  },
});

const CheckedCheckboxStyle = css({
  backgroundColor: Colors.primary[700],

  [`&.${CHECKBOX_PREFIX}-blue`]: {
    backgroundColor: Colors.blue[500],
  },

  [`&.${CHECKBOX_PREFIX}-green`]: {
    backgroundColor: Colors.green[500],
  },
  [`&.${CHECKBOX_PREFIX}-yellow`]: {
    backgroundColor: Colors.yellow[500],
  },
  [`&.${CHECKBOX_PREFIX}-red`]: {
    backgroundColor: Colors.red[500],
  },

  [`> span.${CHECKBOX_PREFIX}-inner`]: {
    opacity: 1,
  },
});

const DisabledCheckboxStyle = css({
  backgroundColor: Colors.primary[200],

  [`&.${CHECKBOX_PREFIX}-blue`]: {
    borderColor: Colors.blue[100],
  },

  [`&.${CHECKBOX_PREFIX}-green`]: {
    borderColor: Colors.green[100],
  },
  [`&.${CHECKBOX_PREFIX}-yellow`]: {
    borderColor: Colors.yellow[100],
  },
  [`&.${CHECKBOX_PREFIX}-red`]: {
    borderColor: Colors.red[100],
  },
});

const HelpTextStyle = css({
  fontSize: 14,
  fontWeight: 500,
  lineHeight: '8px',
  color: Colors.primary[800],
});

const CheckboxWrapperStyle = css({
  display: 'inline-flex',
  alignItems: 'center',
  gap: 8,

  cursor: 'pointer',

  [`> span.${CHECKBOX_PREFIX}-checkbox`]: CheckboxDefaultStyle,
  [`> span.${CHECKBOX_PREFIX}-help`]: HelpTextStyle,

  [`&.${CHECKBOX_PREFIX}-checked > span.${CHECKBOX_PREFIX}-checkbox`]: CheckedCheckboxStyle,
  [`&.${CHECKBOX_PREFIX}-disabled`]: {
    cursor: 'not-allowed',

    [`> span.${CHECKBOX_PREFIX}-checkbox`]: DisabledCheckboxStyle,
  },

  [`&.${CHECKBOX_PREFIX}-disabled > span.${CHECKBOX_PREFIX}-help`]: {
    color: Colors.primary[400],
  },
});
