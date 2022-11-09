export interface IGuestData {
  email: string;
  password: string;
  passwordRepeat: string;
}

export interface IForm {
  postGuest: (guest: IGuestData) => void
}

export interface IGuestService {
  postGuest?: (guest: IGuestData) => void
}