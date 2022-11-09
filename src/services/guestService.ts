import { IGuestData, IGuestService } from './../interfaces/index';
export const guestService : IGuestService = {};

const url = 'http://localhost:5002';

guestService.postGuest = (guest: IGuestData) => {
  return fetch(`${url}/guests`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(guest)})
    .then(res => res.json())
    .then(data => data)
    .catch(e => e);
}