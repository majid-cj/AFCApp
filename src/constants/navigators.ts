// navigation
export const UPDATE_ROOT_NAVIGATION = 'UPDATE_ROOT_NAVIGATION'
export const UPDATE_APP_NAVIGATION = 'UPDATE_APP_NAVIGATION'
export const UPDATE_AUTHENTICATION_NAVIGATION =
  'UPDATE_AUTHENTICATION_NAVIGATION'

// errors
export const SET_AUTH_ERROR = 'SET_AUTH_ERROR'
export const SET_GENERAL_ERROR = 'SET_GENERAL_ERROR'
export const CLEAR_ERRORS = 'CLEAR_ERRORS'

export enum ROOT_NAV_VIEW {
  SPLASH = 0,
  APP,
}

export enum APP_NAV_VIEW {
  HOME = 0,
  REGISTRATION,
}

export enum AUTH_NAV_VIEW {
  SPLASH = 0,
  SIGN_IN,
  SIGN_UP,
  OTP,
  FORGET_PASSWORD,
  RENEW_PASSWORD,
}
