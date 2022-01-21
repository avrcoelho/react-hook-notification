import { Dispatch, SetStateAction } from 'react';
import { Subject } from 'rxjs';

import { NotificationProps } from '../types/Notification';

export type NotificationData = Omit<NotificationProps, 'onRemove'>;

export class NotificationStore {
  private static instance: NotificationStore;

  private notifications: NotificationData[];

  private subject: Subject<NotificationData[]>;

  private constructor() {
    this.notifications = [];
    this.subject = new Subject();
  }

  static getInstance(): NotificationStore {
    if (!NotificationStore.instance) {
      NotificationStore.instance = new NotificationStore();
    }
    return NotificationStore.instance;
  }

  subscribe(setState: Dispatch<SetStateAction<NotificationData[]>>): void {
    this.subject.subscribe(setState);
    this.subject.next(this.notifications);
  }

  add(value: NotificationData): void {
    this.notifications = [...this.notifications, value];
    this.subject.next(this.notifications);
  }

  remove(id: string): void {
    this.notifications = this.notifications.filter(
      notification => notification.id !== id,
    );
    this.subject.next(this.notifications);
  }

  get(): NotificationData[] {
    return this.notifications;
  }
}
