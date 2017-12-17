import React from 'react';

import {route as userRoutes} from './users-routes';

export const appRoutes = [
  //add module routers
  ...userRoutes,

  //Custom routers
  {
      name: 'team',
      path: '/team',
      menu: true,
      component : ({location}) => (<h2>{location.pathname}</h2>)

  },
  {
      name: 'channels',
      path: '/channels',
      menu: true,
      component : ({location}) => (<h2>{location.pathname}</h2>)

  },
  {
      name: 'cases',
      path: '/cases',
      menu: true,
      component : ({location}) => (<h2>{location.pathname}</h2>)

  },
  {
      name: 'content',
      path: '/content',
      menu: true,
      component : ({location}) => (<h2>{location.pathname}</h2>)

  },
  {
      name: 'apps',
      path: '/apps',
      menu: true,
      component : ({location}) => (<h2>{location.pathname}</h2>)

  }
];
