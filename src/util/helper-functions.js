import React from 'react';

import {message} from 'antd';

export const postData = (call, params, _message) => {
  return new Promise( (resolve, reject) => {
    var hide = message.loading(_message, 0);

    call(params)
      .then(response => {
        hide();
        resolve(response);
      })
      .catch(err => {
        hide();
        reject(err);
      })
  })
}
