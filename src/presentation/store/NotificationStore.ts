import { Dispatch, SetStateAction } from 'react';

import { NotificationProps } from '../types/Notification';

export type NotificationData = Omit<NotificationProps, 'onRemove'>;

export class NotificationStore {
  private static instance: NotificationStore;

  private notifications: NotificationData[];

  private setState: Dispatch<SetStateAction<NotificationData[]>> | undefined;

  private constructor() {
    this.notifications = [];
  }

  static getInstance(): NotificationStore {
    if (!NotificationStore.instance) {
      NotificationStore.instance = new NotificationStore();
    }
    return NotificationStore.instance;
  }

  subscribe(setState: Dispatch<SetStateAction<NotificationData[]>>): void {
    this.setState = setState;
  }

  add(value: NotificationData): void {
    this.notifications = [...this.notifications, value];
    this.setState?.(this.notifications);
  }

  remove(id: string): void {
    this.notifications = this.notifications.filter(
      notification => notification.id !== id,
    );
    this.setState?.(this.notifications);
  }

  get(): NotificationData[] {
    return this.notifications;
  }
}
