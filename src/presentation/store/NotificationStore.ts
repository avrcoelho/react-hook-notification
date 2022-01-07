import { Dispatch, SetStateAction } from 'react';
import { Subject } from 'rxjs';

export class NotificationStore {
  private static instance: NotificationStore;

  private notifications: string[];

  private subject: Subject<any>;

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

  subscribe(setState: Dispatch<SetStateAction<string[]>>) {
    this.subject.subscribe(setState);
  }

  add(value: string) {
    this.notifications.push(value);
    this.subject.next(this.notifications);
  }

  remove(value: string) {
    this.notifications = this.notifications.filter(
      notification => notification !== value,
    );
    this.subject.next(this.notifications);
  }

  get() {
    return this.notifications;
  }
}
