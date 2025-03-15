import { NotificationProps } from './Notification';

type Observer = (toastProps: ToastProps) => void;

export interface ToastProps extends NotificationProps {
  autoDismiss?: boolean;
  dismissTime?: number;
}

class ToastSubject {
  private observers: Observer[] = [];

  addObserver(observer: Observer) {
    this.observers.push(observer);
  }

  removeObserver(observer: Observer) {
    this.observers = this.observers.filter((o) => o !== observer);
  }

  notifyObservers(toastProps: ToastProps) {
    this.observers.forEach((observer) => observer(toastProps));
  }
}

const toastSubject = new ToastSubject();
export default toastSubject;

// 외부에서 호출하는 함수 (간단한 Wrapper)
export const showToast = (toastProps: ToastProps) => {
  toastSubject.notifyObservers({
    autoDismiss: toastProps.autoDismiss ?? true,
    dismissTime: toastProps.dismissTime ?? 4000,
    ...toastProps,
  });
};
