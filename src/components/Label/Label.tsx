/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';
import { Colors } from '../../constants/colors';
import { GLOBAL_PREFIX } from '../../constants/prefix';
import { generateClasses } from '../../utils';

type ColorType = 'primary' | 'white' | 'blue' | 'green' | 'yellow' | 'red';
type Size = 'small' | 'medium';

export interface LabelProps extends React.ButtonHTMLAttributes<HTMLSpanElement> {
  colorType?: ColorType;
  light?: boolean;
  size?: Size;
}

const Label = (props: LabelProps) => {
  const { colorType = 'primary', light = true, size = 'small', className, ...labelProps } = props;
  const LABEL_PREFIX = `${GLOBAL_PREFIX}-label`;
  const generateLabelCls = generateClasses(LABEL_PREFIX);

  return (
    <span
      className={generateLabelCls([colorType, light, size], className)}
      css={css(LabelDefaultStyles, getLabelColorStyles(colorType, light), LabelSizeStyles[size])}
      {...labelProps}
    />
  );
};

export default Label;

const LabelDefaultStyles = css({
  padding: '0px 10px',

  display: 'inline-flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: 10,

  border: 'none',
  borderRadius: 100,

  fontWeight: '500',
  lineHeight: '22px',
});

const LabelColorTypeStyles: { [key in ColorType]: { light: ReturnType<typeof css>; bold: ReturnType<typeof css> } } = {
  // primary - light: primary_GR1, bold: primary_BK
  // white - light: primary_GR2, bold: primary_WH  로 생각하고 만들었습니다.
  primary: {
    light: css({
      backgroundColor: Colors.primary[300],
      color: Colors.primary[800],
    }),
    bold: css({
      backgroundColor: Colors.primary[800],
      color: Colors.primary[100],
    }),
  },
  white: {
    light: css({
      backgroundColor: Colors.primary[600],
      color: Colors.primary[100],
    }),
    bold: css({
      backgroundColor: Colors.primary[200],
      color: Colors.primary[800],
    }),
  },
  blue: {
    light: css({
      backgroundColor: Colors.blue[100],
      color: Colors.blue[500],
    }),
    bold: css({
      backgroundColor: Colors.blue[500],
      color: Colors.primary[100],
    }),
  },
  green: {
    light: css({
      backgroundColor: Colors.green[100],
      color: Colors.green[500],
    }),
    bold: css({
      backgroundColor: Colors.green[500],
      color: Colors.primary[100],
    }),
  },
  yellow: {
    light: css({
      backgroundColor: Colors.yellow[100],
      color: Colors.yellow[500],
    }),
    bold: css({
      backgroundColor: Colors.yellow[500],
      color: Colors.primary[100],
    }),
  },
  red: {
    light: css({
      backgroundColor: Colors.red[100],
      color: Colors.red[500],
    }),
    bold: css({
      backgroundColor: Colors.red[500],
      color: Colors.primary[100],
    }),
  },
};

const getLabelColorStyles = (colorType: ColorType, light: boolean) => {
  return light ? LabelColorTypeStyles[colorType].light : LabelColorTypeStyles[colorType].bold;
};

const LabelSizeStyles: { [key in Size]: ReturnType<typeof css> } = {
  small: css({
    fontSize: 12,
  }),
  medium: css({
    fontSize: 14,
    padding: '2px 12px',
  }),
};
