import { IGuestData, IGuestService, ILoginUserData } from './../interfaces/index';

const url = 'https://afternoon-fortress-29327.herokuapp.com';

export const guestService : IGuestService = {
  postGuest: (guest: IGuestData): Promise<any> => {
    return fetch(`${url}/api/guest/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(guest)})
      .then(res => res.json())
      .then(data => data)
      .catch(e => e);
  },

  postLoginGuest: (guest: ILoginUserData): Promise<any> => {
    return fetch(`${url}/api/guest/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(guest)})
      .then(res => res.json())
      .then(data => data)
      .catch(e => e);
  },

  getCompanies: (token: string): Promise<any> => {
    return fetch(`${url}/api/guest/companies`, {
      headers: {
        'Authorization' : `Bearer ${token}`
      },
    })
      .then(res => res.json())
      .then(data => data)
      .catch(e => e);
  },

  getCompany: (token: string, NIT: string): Promise<any> => {
    return fetch(`${url}/api/guest/company/${NIT}`, {
      headers: {
        'Authorization' : `Bearer ${token}`
      },
    })
      .then(res => res.json())
      .then(data => data)
      .catch(e => e);
  }
};