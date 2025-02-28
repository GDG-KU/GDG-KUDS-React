interface Props extends Omit<React.SVGProps<SVGElement>, 'ref'> {}

const IconArrow = (props: Props) => {
  return (
    <svg
      width='16'
      height='16'
      viewBox='0 0 16 16'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      style={{ verticalAlign: 'middle' }}
      {...props}>
      <path d='M4 6L8 10L12 6' stroke='currentColor' strokeWidth='1.6' strokeLinecap='round' strokeLinejoin='round' />
    </svg>
  );
};

export default IconArrow;
