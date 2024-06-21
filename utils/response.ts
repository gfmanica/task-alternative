import { redirect } from 'next/navigation';

export const isNotAuthenticated = (response: Response) => {
  return response.status === 403 || response.status === 401;
};

export const checkAuthenticity = (response: Response) => {
  if (isNotAuthenticated(response)) {
    redirect('/');
  }
};
