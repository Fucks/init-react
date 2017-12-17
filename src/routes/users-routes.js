import UserListContainer from 'views/user-list-container';
import UserFormContainer from 'views/user-form-container';

export const route = [
  {
      name: 'usuários',
      path: '/users',
      menu: true,
      component : UserListContainer
  },
  {
      name: 'usuários',
      path: '/users/new',
      component: UserFormContainer
  }
]
