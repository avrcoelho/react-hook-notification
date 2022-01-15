export type ContainerTheme =
  | 'default-colored'
  | 'info-colored'
  | 'warning-colored'
  | 'success-colored'
  | 'error-colored'
  | 'default-light'
  | 'info-light'
  | 'warning-light'
  | 'success-light'
  | 'error-light'
  | 'default-dark'
  | 'info-dark'
  | 'warning-dark'
  | 'success-dark'
  | 'error-dark';

export type IconTheme = Exclude<
  ContainerTheme,
  'default-colored' | 'default-light' | 'default-dark'
>;
