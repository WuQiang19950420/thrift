export let BASE_URL = '';
export const TIME_OUT = 10000;

if (process.env.NODE_ENV === 'development') {
  BASE_URL = '/api';
} else if (process.env.NODE_ENV === 'production') {
  BASE_URL = 'https://ash.keira.cn';
} else {
  BASE_URL = '';
}
