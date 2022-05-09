# React Hook Notification

Add notifications in your React app. Types: success, error, warning, info or default

![Demo](demo.png)

## Storybook demo

[https://reverent-lalande-5e2160.netlify.app](https://reverent-lalande-5e2160.netlify.app/?path=/story/notification-example--notificaion)

## Install

```shell
npm install react-hook-notification
```

or

```shell
yarn add react-hook-notification
```

## Usage

```js
import React from 'react';
import { useNotification } from 'react-hook-notification';

export default function Component() {
  const notification = useNotification();

  return (
    <button
      type="button"
      onClick={() =>
        notification.success({
          text: 'Notification test',
        })
      }
    >
      Dispatch
    </button>
  );
}
```

### Props

| Property        | Type                                                                                | Required | Default   | Description                         |
| --------------- | ----------------------------------------------------------------------------------- | -------- | --------- | ----------------------------------- |
| text            | string                                                                              | yes      |           | Notification text                   |
| title           | string                                                                              | no       |           | Notification title                  |
| position        | top-right \| top-center \| top-left \| bottom-right \| bottom-center \| bottom-left | no       | top-right | Notification position               |
| theme           | colored \| light \| dark                                                            | no       | colored   | Notification theme                  |
| transition      | bounce \| flip \| fade \| slide \| zoom                                             | no       | bounce    | Notification transition             |
| delay           | number                                                                              | no       | 5000      | Notification delay in milliseconds  |
| showProgressBar | boolean                                                                             | no       | true      | Show or hide progress bar           |
| showButtonClose | boolean                                                                             | no       | true      | Show or hide close button           |
| closeOnClick    | boolean                                                                             | no       | true      | Close on click                      |
| showIcon        | boolean                                                                             | no       | true      | Show or hide icon                   |
| autoClose       | boolean                                                                             | no       | true      | Close notification after delay ends |
| pauseOnHover    | boolean                                                                             | no       | true      | Auto close pause on hover           |
| draggable       | boolean                                                                             | no       | true      | Enable or disable drag              |

## LICENSE

[![License](https://img.shields.io/badge/License-MIT-yellow?style=flat&logoColor=f00&link=https://opensource.org/licenses/MIT)](https://opensource.org/licenses/MIT)

Developed by: [André Coelho](https://andrecoelho.dev)
