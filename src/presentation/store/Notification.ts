import { Dispatch, SetStateAction } from 'react';
import { Subject } from 'rxjs';

export class Notification {
  private static instance: Notification;

  private notifications: string[];

  private subject: Subject<any>;

  private constructor() {
    this.notifications = [];
    this.subject = new Subject();
  }

  static getInstance(): Notification {
    if (!Notification.instance) {
      Notification.instance = new Notification();
    }
    return Notification.instance;
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
