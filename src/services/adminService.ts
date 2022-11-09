import { IAdminService, ILoginUserData } from './../interfaces/index';

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
  }
};