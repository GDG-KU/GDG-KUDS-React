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
  itemTotal: number; //item 총 개수
  pageSize?: number; //페이지 크기
  defaultPage?: number; //기본 설정 페이지
  onChange?: (page: number) => void;
}

const prefixCls = `${PREFIX_CLS}-pagination`;

const Pagination = forwardRef<HTMLDivElement, PaginationProps>((props, ref) => {
  const {
    colorType,
    className,
    itemTotal,
    pageSize = 10,
    defaultPage,
    onChange = () => {},
    ...paginationProps
  } = props;
  const PageCls = clsx(
    prefixCls,
    {
      [`${prefixCls}-${colorType}`]: !!colorType,
    },
    className,
  );

  const totalPages = Math.ceil(itemTotal / pageSize); //한번에 표시될 수 있는 Page 개수
  const [localPage, setLocalPage] = useState(defaultPage ?? 1);

  const handlePageClick = (page: number) => {
    setLocalPage(page);
    onChange?.(page);
  };

  const handlePrev = () => {
    if (localPage > 1) {
      handlePageClick(localPage - 1);
    }
  };

  const handleNext = () => {
    if (localPage < totalPages) {
      handlePageClick(localPage + 1);
    }
  };

  const isDisabled = localPage === 1 || localPage === totalPages || totalPages === 1;

  const getPaginationItems = () => {
    if (totalPages <= 7) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }
    if (localPage < 5) {
      return [1, 2, 3, 4, 5, null, totalPages];
    }
    if (localPage >= totalPages - 4) {
      return [1, null, totalPages - 5, totalPages - 4, totalPages - 3, totalPages - 2, totalPages - 1, totalPages];
    }
    return [1, null, localPage - 1, localPage, localPage + 1, null, totalPages];
  };

  return (
    <div ref={ref} css={PaginationStyles(colorType)} className={PageCls} {...paginationProps}>
      <button onClick={handlePrev} className={`${prefixCls}-prev`} disabled={isDisabled}>
        <IconMove />
      </button>

      {getPaginationItems().map((item, pageNum) => {
        return (
          <button
            key={pageNum}
            onClick={() => typeof item === 'number' && handlePageClick(item)}
            className={clsx(`${prefixCls}-number`, {
              [`${prefixCls}-selected`]: item === localPage,
              [`${prefixCls}-dots`]: item === null,
            })}
            disabled={!item}>
            {!item ? '...' : item}
          </button>
        );
      })}

      <button onClick={handleNext} className={`${prefixCls}-next`} disabled={isDisabled}>
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
  display: 'inline-flex',
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
    display: 'inline-flex',
    width: 12,
    minWidth: 12,
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
    display: 'flex',
    alignItems: 'center',
    gap: 24,

    [`> button.${prefixCls}-prev`]: ArrowStyles,
    [`> button.${prefixCls}-next`]: ArrowStyles,
    [`> button.${prefixCls}-number`]: DefaultNumStyles,
    [`> button.${prefixCls}-selected`]: SelectedNumStyles(colorType),
  });
