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
  postGuest: (guest: IGuestData) => Promise<any>;
  postLoginGuest: (guest: ILoginUserData) => Promise<any>;
  getCompanies: (token: string) => Promise<any>;
  getCompany: (token: string, NIT: string) => Promise<any>;
}

export interface IAdminService {
  postLoginAdmin: (guest: ILoginUserData) => Promise<any>;
  createCompany: (token: string, company: ItemAttributes) => Promise<any>;
  editCompany: (token: string, company: ItemAttributes) => Promise<any>;
  deleteCompany: (token: string, NIT: string) => Promise<any>;
  createItem: (token: string, item: ItemAttributes) => Promise<any>;
  generatePDF: (token: string, NIT: string) => Promise<any>;
}

export interface Product {
  id: number;
  companyId: string;
  productName: string;
  quantity: number;
}

export interface ItemAttributes {
  NIT?: string;
  name?: string;
  address?: string;
  phone?: string;
  products?: Product[];
  productName?: string;
  quantity?: number;
  companyId?: string;
}

