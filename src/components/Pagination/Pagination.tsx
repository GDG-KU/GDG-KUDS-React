/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';
import { clsx } from '../../utils/classNames';
import { forwardRef, useState } from 'react';
import { Colors } from '../../constants/colors';
import { PREFIX_CLS } from '../ConfigProvider/context';
import IconMove from '../../icons/move';

type ColorType = 'primary' | 'blue' | 'green' | 'yellow' | 'red';

export interface PaginationProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
  colorType: ColorType;
  total: number;
  currentPage: number;
  onChange: (page: number) => void;
}

const prefixCls = `${PREFIX_CLS}-pagination`;

const Pagination = forwardRef<HTMLDivElement, PaginationProps>((props, ref) => {
  const { colorType, className, total, currentPage, onChange = () => {}, ...paginationProps } = props;
  const PageCls = clsx(
    prefixCls,
    {
      [`${prefixCls}-${colorType}`]: !!colorType,
    },
    className,
  );

  const [localPage, setLocalPage] = useState(currentPage);

  const handlePageClick = (page: number) => {
    setLocalPage(page);
    onChange(page);
  };

  const handlePrev = () => {
    if (localPage > 1) {
      handlePageClick(localPage - 1);
    }
  };

  const handleNext = () => {
    if (localPage < total) {
      handlePageClick(localPage + 1);
    }
  };

  const isPrevDisabled = localPage === 1 || total === 1;
  const isNextDisabled = localPage === total || total === 1;
  return (
    <div ref={ref} css={PaginationStyles(colorType)} className={PageCls} {...paginationProps}>
      <button onClick={handlePrev} className={`${prefixCls}-prev`} disabled={isPrevDisabled}>
        <IconMove />
      </button>

      {[...Array(Math.min(total, 7))].map((_, i) => {
        const pageNum = i + 1;
        return (
          <button
            key={pageNum}
            onClick={() => handlePageClick(pageNum)}
            className={clsx(`${prefixCls}-number`, { [`${prefixCls}-selected`]: pageNum === localPage })}>
            {pageNum}
          </button>
        );
      })}

      <button onClick={handleNext} className={`${prefixCls}-next`} disabled={isNextDisabled}>
        <IconMove transform='rotate(180)' />
      </button>
    </div>
  );
});
export default Pagination;

const ArrowStyles = css({
  all: 'unset',
  display: 'flex',

  justifyContent: 'center',
  alignItems: 'center',

  gap: 4,
  color: Colors.primary[600],

  '&:disabled': {
    color: Colors.primary[400],
    cursor: 'not-allowed',
  },
});

const DefaultNumStyles = css({
  all: 'unset',
  display: 'flex',
  width: 12,
  height: 12,
  padding: 10,

  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',

  gap: 10,

  '@keyframes fadeOut': {
    from: {
      opacity: 1,
      transform: 'scale(1)',
    },
    to: {
      opacity: 0.7,
      transform: 'scale(0.95)',
    },
  },

  transition: 'opacity 100ms ease-out, transform 200ms ease-out',
  animation: 'fadeOut 100ms ease-out',
});

const SelectedNumStyles = (colorType: ColorType) =>
  css({
    all: 'unset',
    display: 'flex',
    width: 12,
    height: 12,
    padding: 10,

    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',

    gap: 10,
    borderRadius: 100,
    backgroundColor: colorType === 'primary' ? Colors.primary[700] : Colors[colorType][500],
    color: Colors.primary[100],

    '@keyframes fadeIn': {
      from: {
        opacity: 0.5,
        transform: 'scale(0.9)',
      },
      to: {
        opacity: 1,
        transform: 'scale(1)',
      },
    },

    transition:
      'opacity 100ms ease-out, transform 100ms ease-out, background-color 100ms ease-out, color 100ms ease-out',
    animation: 'fadeIn 100ms ease-out',
  });

const PaginationStyles = (colorType: ColorType) =>
  css({
    display: 'inline-flex',
    alignItems: 'center',
    gap: 24,

    [`> button.${prefixCls}-prev`]: ArrowStyles,
    [`> button.${prefixCls}-next`]: ArrowStyles,
    [`> button.${prefixCls}-number`]: DefaultNumStyles,
    [`> button.${prefixCls}-selected`]: SelectedNumStyles(colorType),
  });
