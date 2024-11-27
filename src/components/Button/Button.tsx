/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';
import { generateClasses } from '../../utils/classNames';
import { GLOBAL_PREFIX } from '../../constants/prefix';
import { forwardRef } from 'react';
import { Colors } from '../../constants/colors';

type ColorType = 'primary' | 'blue' | 'green' | 'yellow' | 'red';
type Size = 'medium' | 'large';
type Shape = 'circle' | 'round'; // TODO: circle 스타일

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  colorType?: ColorType;
  size?: Size;
  shape?: Shape;
  loading?: boolean;
  icon?: React.ReactNode;
}

/**
 *?: css 파일은 컴포넌트 외부에 선언되는데, PREFIX가 붙은 class 선택자는 어떻게 가져올 수 있을까?
 * => 전역변수 생성 후, getter 함수 작성해야할 듯. setter는 config에서만 할 수 있도록?
 * => 이건 config 만들 때 같이 해야할 듯
 */
const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const {
    colorType = 'primary',
    size = 'medium',
    shape = 'round',
    disabled,
    loading,
    icon,
    className,
    children,
    ...buttonProps
  } = props;
  const BUTTON_PREFIX = `${GLOBAL_PREFIX}-btn`;
  const generateButtonCls = generateClasses(BUTTON_PREFIX);

  return (
    <button
      ref={ref}
      className={generateButtonCls(
        [colorType, shape === 'circle' ? 'circle' : '', loading ? 'loading' : ''],
        className,
      )}
      css={css(ButtonDefaultStyles, ButtonColorTypeStyles[colorType], ButtonSizeStyles[size])}
      disabled={disabled || loading}
      {...buttonProps}>
      {
        loading && <span className={generateButtonCls(['icon', 'loading-icon'])}>loading icon</span> // TODO: loading icon 추가
      }
      {!loading && icon && <span className={generateButtonCls(['icon'])}>{icon}</span>}
      {!loading && <span className={generateButtonCls(['inner'])}>{children}</span>}
    </button>
  );
});

export default Button;

const ButtonDefaultStyles = css({
  padding: '14px 20px',

  display: 'inline-flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: 8,

  border: 'none',
  borderRadius: 300,

  transitionProperty: 'background-color, color',
  transitionDuration: '150ms',
  transitionTimingFunction: 'ease-in-out',

  cursor: 'pointer',

  '&:disabled': {
    backgroundColor: Colors.primary[400],
    color: Colors.primary[100],

    cursor: 'not-allowed',
    '&:hover': {
      backgroundColor: Colors.primary[400],
      color: Colors.primary[100],
    },
    '&:active': {
      backgroundColor: Colors.primary[400],
      color: Colors.primary[100],
    },
  },
});

const ButtonColorTypeStyles: { [key in ColorType]: ReturnType<typeof css> } = {
  primary: css({
    backgroundColor: Colors.primary[800],
    color: Colors.primary[100],
    '&:hover': {
      backgroundColor: Colors.primary[200],
      color: Colors.primary[800],
    },
    '&:active': {
      backgroundColor: Colors.primary[300],
      color: Colors.primary[800],
    },
  }),
  blue: css({
    backgroundColor: Colors.blue[500],
    color: Colors.primary[100],
    '&:hover': {
      backgroundColor: Colors.blue[100],
    },
    '&:active': {
      backgroundColor: Colors.blue[300],
    },
  }),
  green: css({
    backgroundColor: Colors.green[500],
    color: Colors.primary[100],
    '&:hover': {
      backgroundColor: Colors.green[100],
    },
    '&:active': {
      backgroundColor: Colors.green[300],
    },
  }),
  yellow: css({
    backgroundColor: Colors.yellow[500],
    color: Colors.primary[100],
    '&:hover': {
      backgroundColor: Colors.yellow[100],
    },
    '&:active': {
      backgroundColor: Colors.yellow[300],
    },
  }),
  red: css({
    backgroundColor: Colors.red[500],
    color: Colors.primary[100],
    '&:hover': {
      backgroundColor: Colors.red[100],
    },
    '&:active': {
      backgroundColor: Colors.red[300],
    },
  }),
};

const ButtonSizeStyles: { [key in Size]: ReturnType<typeof css> } = {
  large: css({
    width: '100%',
    height: 48,
  }),
  medium: css({
    minWidth: 120,
    maxWidth: 150,
    height: 48,
  }),
};
