export interface IGuestData {
  email: string;
  password: string;
  passwordRepeat: string;
}

export interface ILoginUserData {
  email: string;
  password: string;
}

export interface ISignUpForm {
  postGuest: (guest: IGuestData) => void
}

export interface ILoginForm {
  postLoginUser: (userData: ILoginUserData, user: string) => void
}

export interface IGuestService {
  postGuest?: (guest: IGuestData) => void
}