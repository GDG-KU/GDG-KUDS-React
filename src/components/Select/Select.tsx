/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';
import { clsx } from '../../utils/classNames';
import { forwardRef, useState } from 'react';
import { Colors } from '../../constants/colors';
import { PREFIX_CLS } from '../ConfigProvider/context';
import IconArrow from '../../icons/arrow';

type ColorType = 'primary' | 'blue' | 'green' | 'yellow' | 'red';

export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  colorType?: ColorType;
  width: string | number;
  options: { value: number; label: React.ReactNode }[];
  placeholder?: string;
  onChange: React.ChangeEventHandler<HTMLSelectElement>;
}

const prefixCls = `${PREFIX_CLS}-select`;

const Select = forwardRef<HTMLButtonElement, SelectProps>((props, ref) => {
  const { colorType = 'primary', className, width = 280, ...selectProps } = props;
  const { disabled, options, value, placeholder, onChange = () => {} } = selectProps;

  const selectCls = clsx(
    prefixCls,
    {
      [`${prefixCls}-${colorType}`]: !!colorType,
      [`${prefixCls}-${disabled}`]: !!disabled,
    },
    className,
  );
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(value || '');

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (value: number) => {
    setSelectedValue(value);
    const event = {
      target: { value } as unknown as HTMLSelectElement,
    } as React.ChangeEvent<HTMLSelectElement>;
    onChange(event);
    setIsOpen(false);
  };

  const selectedOption = options.find((o) => o.value === selectedValue);
  const isSelected = !!selectedValue;

  return (
    <div css={SelectContainerStyles(width, isSelected, isOpen)} className={selectCls}>
      <button ref={ref} onClick={handleToggle} className={clsx(`${prefixCls}-button`)}>
        <span className={clsx(`${prefixCls}-placeholder`)}>{selectedOption ? selectedOption.label : placeholder}</span>
        <IconArrow className={clsx(`${prefixCls}-icon`)} />
      </button>
      <ul className={clsx(`${prefixCls}-selectbox`)}>
        {options.map(({ value, label }) => (
          <li
            key={value}
            onClick={() => handleSelect(value)}
            className={clsx(`${prefixCls}-selectitem`, {
              [`${prefixCls}-selected`]: value === selectedValue, // 선택된 아이템에 추가 클래스 적용
            })}>
            {label}
          </li>
        ))}
      </ul>
    </div>
  );
});

export default Select;

const SelectStyles = (isSelected: boolean) =>
  css({
    color: Colors.primary[500],

    padding: '11px 16px',
    width: '100%',
    height: 40,

    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',

    border: '1px solid',
    borderRadius: 8,

    borderColor: isSelected ? Colors.primary[800] : Colors.primary[500],
    backgroundColor: Colors.primary[100],

    [`> .${prefixCls}-placeholder`]: {
      fontSize: 16,
      fontWeight: 500,
      color: isSelected ? Colors.primary[800] : Colors.primary[500],
    },

    [`> .${prefixCls}-icon`]: {
      width: 16,
      height: 16,

      '&:hover': {
        color: Colors.primary[600],
      },
    },

    '&:hover': {
      borderColor: Colors.primary[800],
      color: Colors.primary[600],
    },
  });

const SelectBoxStyles = (isOpen: boolean) =>
  css({
    position: 'absolute', // 버튼 아래에 위치
    top: '100%', // 버튼 바로 아래에 배치
    left: 0,

    width: '100%',

    backgroundColor: Colors.primary[100],
    borderRadius: 8,
    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
    display: isOpen ? 'block' : 'none',

    zIndex: 10,
    minHeight: 80,
    maxHeight: 300,
    overflowY: 'auto',
    padding: 0,
    margin: 0,

    [`> li.${prefixCls}-selectitem`]: SelectItemsStyles,
  });

const SelectItemsStyles = css({
  padding: '11px 16px',
  boxSizing: 'border-box',

  fontSize: 16,
  color: Colors.primary[600],
  backgroundColor: 'transparent',

  cursor: 'pointer',
  transition: 'background-color 0.2s ease, color 0.2s ease',
  listStyle: 'none',

  '&:hover': {
    backgroundColor: Colors.primary[200],
    color: Colors.primary[800],
  },
  [`&.${prefixCls}-selected`]: {
    color: Colors.primary[800],
    backgroundColor: Colors.primary[200],
  },
});

const SelectContainerStyles = (width: number | string, isSelected: boolean, isOpen: boolean) => {
  return css({
    position: 'relative',
    width: `${width}px`,
    minWidth: 280,
    [`> button.${prefixCls}-button`]: SelectStyles(isSelected),

    [`> ul.${prefixCls}-selectbox`]: SelectBoxStyles(isOpen),
  });
};
