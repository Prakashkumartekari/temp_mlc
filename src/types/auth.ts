export interface LoginPostProps {
  mobileNumber: string;
}
export interface SignInWithOTPProps {
  mobileNumber: string;
  request_id: string;
  OTP: string;
}
export interface GetLoginProps {
  userDocId: string;
  username: string;
  roles: any[];
  type: string;
  token: string;
  refreshToken: string;
  exp: number;
}
export interface MenuOptionsToShow {
  DASHBOARD: string[];
  HUMAN_RESOURCE: string[];
  VOTER: string[];
  INSTITUTE: string[];
}
export interface initialAuthSliceStateProps {
  login_data: GetLoginProps;
}
