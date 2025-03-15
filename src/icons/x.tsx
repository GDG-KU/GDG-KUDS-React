interface Props extends Omit<React.SVGProps<SVGElement>, 'ref'> {}

const IconX = (props: Props) => {
  return (
    <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
      <path d='M8 8L16 16M16 8L8 16' stroke='#5F6367' strokeWidth='1.6' strokeLinecap='round' {...props} />
    </svg>
  );
};

export default IconX;
