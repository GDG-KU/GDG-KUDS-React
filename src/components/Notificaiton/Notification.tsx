/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';
import { clsx } from '../../utils';
import { PREFIX_CLS } from '../ConfigProvider/context';
import { IcBang, IcBell, IcCheck, IcInfo, IcX } from '../../icons';

type NotificationType = 'default' | 'info' | 'success' | 'warning' | 'error';
type Color = 'primary' | 'blue' | 'green' | 'yellow' | 'red';

const IcCircle = (notificationType: Exclude<NotificationType, 'default'>) => {
  const [icon, color] = defaultIcon[notificationType];
  return (
    <div css={{ width: 20, height: 20, padding: 2 }}>
      <div
        css={{
          width: 20,
          height: 20,

          background: `var(--${color}-500)`,
          borderRadius: 100,

          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        {icon}
      </div>
    </div>
  );
};

const defaultIcon: Record<Exclude<NotificationType, 'default'>, [React.ReactNode, string]> = {
  info: [<IcInfo />, 'blue'],
  success: [<IcCheck fill='white' stroke='none' />, 'green'],
  warning: [<IcBang />, 'yellow'],
  error: [<IcX stroke={`var(--primary-100)`} strokeWidth='1.2' />, 'red'],
};

export interface NotificationProps extends React.HTMLAttributes<HTMLDivElement> {
  notificationId: number;
  color?: Color;
  notificationType?: NotificationType;
  icon?: React.ReactNode;
  notificationTitle: React.ReactNode;
  onClose: () => void;
}

const prefixCls = `${PREFIX_CLS}-notification`;

const bellColor = (color: Color) => {
  if (color === 'primary') return 'var(--primary-800)';
  return `var(--${color}-500)`;
};

const Notification = ({
  className,
  notificationType = 'default',
  color = 'primary',
  icon,
  notificationTitle,
  children,
  onClose,
  ...notificationProps
}: NotificationProps) => {
  const notificationCls = clsx([`${prefixCls}-${notificationType}`], [`${prefixCls}-${color}`], className);

  return (
    <div className={`${notificationCls}`} css={NotificationStyle} {...notificationProps}>
      <div className={`${prefixCls}-wrapper`}>
        <div className={`${prefixCls}-header`}>
          <div className={`${prefixCls}-header-left`}>
            <div className={`${prefixCls}-icon`}>
              {icon ? (
                icon
              ) : notificationType != 'default' ? (
                IcCircle(notificationType)
              ) : (
                <IcBell color={bellColor(color)} />
              )}
            </div>
            <div className={clsx([`${prefixCls}-title`], [`${color}-title`])}>{notificationTitle}</div>
          </div>
          <div className={`${prefixCls}-close`} onClick={onClose}>
            <IcX stroke={`var(--primary-600)`} />
          </div>
        </div>
        <div className={`${prefixCls}-body`}>{children}</div>
      </div>
    </div>
  );
};

export default Notification;

const baseStyle = css({
  minWidth: 320,
  maxWidth: 420,
  minHeight: 98,
  width: 'fit-content',

  backgroundColor: `var(--primary-100)`,

  border: 'none',
  borderRadius: 8,

  boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.15)',

  [`.${prefixCls}-wrapper`]: {
    display: 'flex',
    flexDirection: 'column',
    gap: 10,
    padding: 18,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',

    [`.${prefixCls}-header`]: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '100%',

      [`.${prefixCls}-header-left`]: {
        display: 'flex',
        gap: 16,
        alignItems: 'center',

        [`.${prefixCls}-icon`]: {
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',

          width: 24,
          height: 24,
        },

        [`.${prefixCls}-title`]: {
          display: 'flex',
          justifyContent: 'start',
          alignItems: 'center',
          // flex: 1,

          height: 28,

          fontSize: 20,
          fontWeight: '700',
          lineHeight: '28px',
        },
      },

      [`.${prefixCls}-close`]: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      },
    },

    [`.${prefixCls}-body`]: {
      display: 'block',
      marginLeft: 40,
      color: 'var(--primary-600)',
      fontSize: 16,
      fontWeight: '500',
      overflowWrap: 'break-word',
      whiteSpace: 'pre-wrap',
      lineHeight: '24px',
    },
  },
});

const colorStyles = ['blue', 'green', 'yellow', 'red'].map((color) =>
  css({
    [` .${color}-title`]: {
      color: `var(--${color}-500)`,
    },
  }),
);

const primaryTitleStyle = css({
  [` .primary-title`]: {
    color: 'var(--primary-800)',
  },
});

const notificationTypeStyles = ['info', 'success', 'warning', 'error'].map((notificationType) => {
  const [, color] = defaultIcon[notificationType as Exclude<NotificationType, 'default'>];
  return css({
    [`&.${prefixCls}-${notificationType}`]: {
      backgroundColor: `var(--${color}-100)`,
    },
  });
});

const NotificationStyle = css(baseStyle, ...colorStyles, primaryTitleStyle, ...notificationTypeStyles);
