/** @jsxImportSource @emotion/react */

import { memo, useMemo } from 'react';
import Notification, { NotificationProps } from './Notification';

export const Toast = memo(({ ...props }: NotificationProps) => {
  const memoNotification = useMemo(() => <Notification {...props} />, [props]);

  return memoNotification;
});
