import * as Constants from './Constants';
import {appStore as store} from 'stores/app-store';

import {users} from './../views/users';

export const fetchUsers = (_page) => {

  let fetchingPage = Object.assign({}, _page, {isFetching: true})

  let {page, limit, query} = _page;

  //filtra os resultados
  let data = users.filter(user => {
    if( user.name.toUpperCase().indexOf(query.toUpperCase()) >= 0 ){
      return true;
    }
  });

  //calcula o total de paginas
  _page.total = data.length;

  //pega apenas a pagina
  data = data.slice((page - 1) * limit, page * limit);

  _page.isFetching = false;

  store.dispatch({
    type: Constants.FETCH_USERS,
    payload: {
      page: _page,
      data,
    }
  });

}

export const addUser = (user) =>{

  return new Promise((resolve, reject) => {

    setTimeout(function(){
      let id = users.length + 1;
      user.id = id;

      users.push(user);

      store.dispatch({
        type: Constants.ADD_USER,
        payload: user
      })

      resolve();
    }, 5000)

  });
}
