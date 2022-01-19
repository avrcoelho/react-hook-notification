import { Colors } from './Colors';
import { NotificationThemes } from './NotificationThemes';
import { NotificationTypes } from './NotificationTypes';

export const colorsIcon = {
  [NotificationThemes.Colored]: {
    [NotificationTypes.Info]: Colors.White,
    [NotificationTypes.Warning]: Colors.White,
    [NotificationTypes.Success]: Colors.White,
    [NotificationTypes.Error]: Colors.White,
    [NotificationTypes.Default]: Colors.White,
  },
  [NotificationThemes.Light]: {
    [NotificationTypes.Info]: Colors.Blue,
    [NotificationTypes.Warning]: Colors.Yellow,
    [NotificationTypes.Success]: Colors.Green,
    [NotificationTypes.Error]: Colors.Red,
    [NotificationTypes.Default]: Colors.White,
  },
  [NotificationThemes.Dark]: {
    [NotificationTypes.Info]: Colors.Blue,
    [NotificationTypes.Warning]: Colors.Yellow,
    [NotificationTypes.Success]: Colors.Green,
    [NotificationTypes.Error]: Colors.Red,
    [NotificationTypes.Default]: Colors.White,
  },
};

export const colorsIconButtonClose = {
  [NotificationThemes.Colored]: Colors.Grey,
  [NotificationThemes.Light]: Colors.White,
  [NotificationThemes.Dark]: Colors.Black,
};
