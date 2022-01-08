import { Dispatch, SetStateAction } from 'react';
import { Subject } from 'rxjs';

export class NotificationStore {
  private static instance: NotificationStore;

  private notifications: string[];

  private subject: Subject<string[]>;

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

  subscribe(setState: Dispatch<SetStateAction<string[]>>): void {
    this.subject.subscribe(setState);
    this.subject.next(this.notifications);
  }

  add(value: string): void {
    this.notifications = [...this.notifications, value];
    this.subject.next(this.notifications);
  }

  remove(value: string): void {
    this.notifications = this.notifications.filter(
      notification => notification !== value,
    );
    this.subject.next(this.notifications);
  }

  get(): string[] {
    return this.notifications;
  }
}
