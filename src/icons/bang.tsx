interface Props extends Omit<React.SVGProps<SVGElement>, 'ref'> {}

const IconBang = (props: Props) => {
  return (
    <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
      <path d='M1 22L12 3L23 22H1Z' fill='white' />
      <path
        d='M1 22L12 3L23 22H1ZM12 19C12.2833 19 12.521 18.904 12.713 18.712C12.905 18.52 13.0007 18.2827 13 18C12.9993 17.7173 12.9033 17.48 12.712 17.288C12.5207 17.096 12.2833 17 12 17C11.7167 17 11.4793 17.096 11.288 17.288C11.0967 17.48 11.0007 17.7173 11 18C10.9993 18.2827 11.0953 18.5203 11.288 18.713C11.4807 18.9057 11.718 19.0013 12 19ZM11 16H13V11H11V16Z'
        fill='white'
      />
    </svg>
  );
};

export default IconBang;
