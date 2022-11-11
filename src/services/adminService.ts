import { IAdminService, ILoginUserData, ItemAttributes } from './../interfaces/index';

const url = 'https://afternoon-fortress-29327.herokuapp.com';

export const adminService : IAdminService = {
  postLoginAdmin: (admin: ILoginUserData): Promise<any> => {
    return fetch(`${url}/api/admin/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(admin)})
      .then(res => res.json())
      .then(data => data)
      .catch(e => e);
  },

  createCompany: (token: string, company: ItemAttributes): Promise<any> => {
    return fetch(`${url}/api/admin/company`, {
      method: 'POST',
      headers: {
        'Authorization' : `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(company)})
      .then(res => res.json())
      .then(data => data)
      .catch(e => e);
  },

  editCompany: (token: string, company: ItemAttributes): Promise<any> => {
    return fetch(`${url}/api/admin/company`, {
      method: 'PUT',
      headers: {
        'Authorization' : `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(company)})
      .then(res => res.json())
      .then(data => data)
      .catch(e => e);
  },

  deleteCompany: (token: string, NIT: string): Promise<any> => {
    return fetch(`${url}/api/admin/company/${NIT}`, {
      method: 'DELETE',
      headers: {
        'Authorization' : `Bearer ${token}`
      }
    })
    .then(res => res.json())
    .then(data => data)
    .catch(e => e);
  },

  createItem: (token: string, item: ItemAttributes): Promise<any> => {
    return fetch(`${url}/api/admin/product`, {
      method: 'POST',
      headers: {
        'Authorization' : `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(item)})
      .then(res => res.json())
      .then(data => data)
      .catch(e => e);
  },
};