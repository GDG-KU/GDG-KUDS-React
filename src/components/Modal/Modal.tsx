/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';
import { clsx } from '../../utils';
import { PREFIX_CLS } from '../ConfigProvider/context';

type IconSize = 'sm' | 'lg';

export interface ModalProps extends React.HTMLAttributes<HTMLDivElement> {
  isOpen: boolean;
  icon?: React.ReactNode;
  iconSize?: IconSize;
  header: React.ReactNode;
  footer: React.ReactNode;
}

const prefixCls = `${PREFIX_CLS}-modal`;

const Modal = ({ className, isOpen, icon, iconSize, header, children, footer, ...dialogProps }: ModalProps) => {
  const modalCls = clsx(
    {
      [`${prefixCls}`]: !!isOpen,
      [`${prefixCls}-icon-${iconSize}`]: !!icon,
    },
    className,
  );

  if (!isOpen) return <></>;
  else
    return (
      <>
        <div className={`${prefixCls}-backdrop`} css={BackdropStyle}>
          <div className={modalCls} css={ModalStyle} {...dialogProps}>
            {icon && iconSize === 'sm' && (
              <div className={`${prefixCls}-container-with-icon`}>
                <div className={`${prefixCls}-icon`}>{icon}</div>
                <div className={`${prefixCls}-container`}>
                  <div className={`${prefixCls}-header`}>{header}</div>
                  {children && <div className={`${prefixCls}-children`}>{children}</div>}
                  <div className={`${prefixCls}-footer`}>{footer}</div>
                </div>
              </div>
            )}

            {!(icon && iconSize === 'sm') && (
              <div className={`${prefixCls}-container`}>
                {icon && <div className={`${prefixCls}-icon`}>{icon}</div>}
                <div className={`${prefixCls}-header`}>{header}</div>
                {children && <div className={`${prefixCls}-children`}>{children}</div>}
                <div className={`${prefixCls}-footer`}>{footer}</div>
              </div>
            )}
          </div>
        </div>
      </>
    );
};

export default Modal;

const lg_iconStyle = css({
  display: 'inline-flex',
  justifyContent: 'center',
  alignItems: 'center',

  width: '106px',
  height: '106px',
  borderRadius: '53px',
  backgroundColor: 'var(--yellow-100)',
});

const sm_iconStyle = css({
  display: 'inline-flex',
  justifyContent: 'center',
  alignItems: 'center',

  width: '56px',
  height: '56px',
  borderRadius: '8px',
  backgroundColor: 'var(--yellow-100)',
});

const BackdropStyle = css({
  width: '100%',
  height: '100%',
  position: 'fixed',
  top: '0',
  left: '0',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
});

const ModalStyle = css({
  padding: '24px 32px',
  minWidth: '440px',
  minHeight: '200px',

  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  backgroundColor: 'white',

  border: 'none',
  borderRadius: '32px',

  boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.10)',

  [`.${prefixCls}-container`]: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '14px',
  },

  [`.${prefixCls}-header`]: {
    color: 'var(--primary-900)',
    fontSize: 24,
    fontWeight: '700',
    wordWrap: 'break-word',
    textAlign: 'center',
  },

  [`.${prefixCls}-children`]: {
    marginBottom: 10,
  },

  [`.${prefixCls}-footer`]: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  [`.${prefixCls}-container-with-icon`]: {
    display: 'flex',
    flexDirection: 'row',
    gap: 26,

    [`.${prefixCls}-container`]: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'start',
      gap: '14px',

      [`.${prefixCls}-footer`]: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'flex-end',
      },
    },
  },

  [`&.${prefixCls}-icon-lg`]: {
    [`.${prefixCls}-icon`]: lg_iconStyle,
  },

  [`&.${prefixCls}-icon-sm`]: {
    [`.${prefixCls}-icon`]: sm_iconStyle,
  },
});
