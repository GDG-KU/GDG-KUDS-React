interface Props extends Omit<React.SVGProps<SVGElement>, 'ref'> {}

const IconCheck = (props: Props) => {
  return (
    <svg width='8' height='6' viewBox='0 0 8 6' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
      <path d='M1 2.6L3.25 5L7 1' stroke='white' stroke-width='1.6' stroke-linecap='round' stroke-linejoin='round' />
    </svg>
  );
};

export default IconCheck;
