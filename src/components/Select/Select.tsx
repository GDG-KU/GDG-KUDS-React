/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';
import { clsx } from '../../utils/classNames';
import { forwardRef, useState, useRef, useEffect } from 'react';
import { Colors } from '../../constants/colors';
import { PREFIX_CLS } from '../ConfigProvider/context';
import IconArrow from '../../icons/arrow';

type ColorType = 'primary' | 'blue' | 'green' | 'yellow' | 'red';

export interface SelectProps<T> extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
  colorType?: ColorType;
  width: string | number;
  options: { value: T; label: React.ReactNode }[];
  placeholder?: string;
  disabled?: boolean;
  selectValue: T;
  onChange: (value: T) => void;
}

const prefixCls = `${PREFIX_CLS}-select`;

const Select = forwardRef<HTMLButtonElement, SelectProps<unknown>>(
  <T,>(props: SelectProps<T>, ref: React.Ref<HTMLButtonElement>) => {
    const {
      colorType = 'primary',
      className,
      width = 280,
      disabled,
      options,
      selectValue,
      placeholder,
      onChange = () => {},
      ...selectProps
    } = props;

    const selectCls = clsx(
      prefixCls,
      {
        [`${prefixCls}-${colorType}`]: !!colorType,
        [`${prefixCls}-disabled`]: !!disabled,
      },
      className,
    );

    const [isOpen, setIsOpen] = useState(false);
    const [selectedValue, setSelectValue] = useState<T>(selectValue);
    const selectRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
      setSelectValue(selectValue);
    }, [selectValue]);

    const handleToggle = () => {
      if (!disabled) {
        setIsOpen((prev) => !prev);
      }
    };

    const handleSelect = (value: T) => {
      setSelectValue(value);
      onChange(value);
      setIsOpen(false);
    };

    const selectedOption = options.find((o) => o.value === selectedValue);
    const isSelected = !!selectedValue;

    // 외부 클릭 감지하여 SelectBox 닫기
    useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if (selectRef.current && !selectRef.current.contains(event.target as Node)) {
          setIsOpen(false);
        }
      };

      if (isOpen) {
        document.addEventListener('mousedown', handleClickOutside);
      }

      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, [isOpen]);

    return (
      <div
        ref={selectRef}
        css={SelectContainerStyles(width, isSelected, isOpen, colorType)}
        className={selectCls}
        {...selectProps}>
        <button ref={ref} onClick={handleToggle} className={clsx(`${prefixCls}-button`)}>
          <span className={clsx(`${prefixCls}-placeholder`)}>
            {selectedOption ? selectedOption.label : placeholder}
          </span>
          <IconArrow className={clsx(`${prefixCls}-icon`)} />
        </button>
        <ul className={clsx(`${prefixCls}-selectbox`)}>
          {options.map(({ value, label }) => (
            <li
              key={String(value)}
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
  },
);

export default Select;

const SelectStyles = (isSelected: boolean, colorType: ColorType) =>
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

    borderColor: isSelected
      ? colorType === 'primary'
        ? Colors.primary[800]
        : Colors[colorType][500]
      : Colors.primary[500],
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
      borderColor: colorType === 'primary' ? Colors.primary[800] : Colors[colorType][500],
      color: Colors.primary[600],
    },
  });

const SelectBoxStyles = (isOpen: boolean, colorType: ColorType) => {
  return css({
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

    [`> li.${prefixCls}-selectitem`]: SelectItemsStyles(colorType),
  });
};

const SelectItemsStyles = (colorType: ColorType) => {
  return css({
    padding: '11px 16px',
    boxSizing: 'border-box',

    fontSize: 16,
    color: Colors.primary[600],
    backgroundColor: 'transparent',

    cursor: 'pointer',
    transition: 'background-color 0.2s ease, color 0.2s ease',
    listStyle: 'none',

    '&:hover': {
      backgroundColor: colorType === 'primary' ? Colors.primary[200] : Colors[colorType][100], //디자인팀 문의 후 수정 예정
      color: Colors.primary[800],
    },
    [`&.${prefixCls}-selected`]: {
      color: Colors.primary[800],
      backgroundColor: colorType === 'primary' ? Colors.primary[200] : Colors[colorType][100],
    },
  });
};
const SelectContainerStyles = (width: number | string, isSelected: boolean, isOpen: boolean, colorType: ColorType) => {
  return css({
    position: 'relative',
    display: 'inline-block',
    width: typeof width === 'number' ? `${width}px` : width,
    minWidth: 280,
    [`> button.${prefixCls}-button`]: SelectStyles(isSelected, colorType),

    [`> ul.${prefixCls}-selectbox`]: SelectBoxStyles(isOpen, colorType),
  });
};
