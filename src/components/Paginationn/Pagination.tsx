/** @jsxImportSource @emotion/react */

//import { css } from '@emotion/react';
//import { clsx } from '../../utils/classNames';
//import { forwardRef, useState } from 'react';
//import { Colors } from '../../constants/colors';
//import { PREFIX_CLS } from '../ConfigProvider/context';

type ColorType = 'primary' | 'blue' | 'green' | 'yellow' | 'red';

export interface PaginationProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
  colorType: ColorType;
  total: number;
  currentPage: number;
  onChange: (page: number) => void;
}

//const prefixCls = `${PREFIX_CLS}-pagination`;

const Pagination = () => {};
//= forwardRef<HTMLDivElement, PaginationProps>();
// (props, ref) => {
//   const { colorType, className, total, currentPage, onChange = () => {}, ...paginationProps } = props;
//   const PageCls = clsx(
//     prefixCls,
//     {
//       [`${prefixCls}-${colorType}`]: !!colorType,
//     },
//     className,
//   );
//   const [localPage, setLocalPage] = useState(currentPage);
//   const handlePageClick = (page: number) => {
//     setLocalPage(page);
//     onChange(page);
//   };
//   return (
//     <div ref={ref} className={PageCls} {...paginationProps}>
//       {/* Pagination content goes here */}
//     </div>
//);}
export default Pagination;
