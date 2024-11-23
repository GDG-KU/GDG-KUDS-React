import { GLOBAL_PREFIX } from '../../constants/prefix';
import { classNames } from '../../utils';

type BaseAttribute = Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type' | 'maxlength' | 'minlength' | 'multiple'>;

export interface CheckboxProps extends BaseAttribute {
  colorType?: 'primary';
  labelStyle?: React.CSSProperties;
}

const Checkbox = ({ name, labelStyle, className, children, ...checkboxProps }: CheckboxProps) => {
  const CHECKBOX_PREFIX = `${GLOBAL_PREFIX}_checkbox`;

  return (
    <label
      htmlFor={name}
      className={classNames([
        `${CHECKBOX_PREFIX}-wrapper`,
        {
          // TODO: classNames object 대응 필요. 이건 제가 할게요
          [`${CHECKBOX_PREFIX}-disabled`]: checkboxProps.disabled,
        },
      ])}
      style={labelStyle}>
      <span>
        <span
          className={classNames([
            CHECKBOX_PREFIX,
            {
              [`${CHECKBOX_PREFIX}-checked`]: checkboxProps.checked,
            },
            className,
          ])}>
          <input type='checkbox' id={name} className={classNames([`${CHECKBOX_PREFIX}-input`])} {...checkboxProps} />
          <span className={classNames([`${CHECKBOX_PREFIX}-inner`])} />
        </span>
      </span>
      {children && <span>{children}</span>}
    </label>
  );
};

export default Checkbox;
