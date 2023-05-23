const config = {
  baseUrl: 'https://nomoreparties.co/v1/plus-cohort-24',
  headers: {
    authorization: '665a484f-7a32-43f2-b793-9f53818a755f',
    'Content-Type': 'application/json'
  }
}

// Загрузка информации о пользователе с сервера
export const getUserProfile = () => {
  return fetch(`${config.baseUrl}/users/me`, {
    headers: config.headers
  })
    .then(res => {
      if (res.ok) {
        return res.json();
      }
      // если ошибка, отклоняем промис
      return Promise.reject(`Ошибка: ${res.status}`);
    });
}

// Редактирование профиля
export const editProfile = (name, about) => {
  return fetch(`${config.baseUrl}/users/me`, {
    method: 'PATCH',
    headers: config.headers,
    body: JSON.stringify({
      name: `${name}`,
      about: `${about}`
    })
  }).then(res => {
    if (res.ok) {
      return res.json();
    }
    // если ошибка, отклоняем промис
    return Promise.reject(`Ошибка: ${res.status}`);
  });
}

/** Загрузка карточек с сервера */
export const getInitialCards = () => {
  return fetch(`${config.baseUrl}/cards`, {
    headers: config.headers
  })
    .then(res => {
      if (res.ok) {
        return res.json();
      }

      // если ошибка, отклоняем промис
      return Promise.reject(`Ошибка: ${res.status}`);
    });
}

/** Добавление новой карточки на сервер */
export const submitNewCard = (src, name) => {
  return fetch(`${config.baseUrl}/cards`, {
    method: 'POST',
    headers: config.headers,
    body: JSON.stringify({
      name: `${name}`,
      link: `${src}`
    })
  }).then(res => {
    if (res.ok) {
      // console.log("Создана карточка", res.json());
      return res.json();
    }
    // если ошибка, отклоняем промис
    return Promise.reject(`Ошибка: ${res.status}`);
  });
}

/**
 * Постановка/удаление лайка.
 * Возвращается количество лайков (цифра)
 */
export const toggleLike = (id, method) => {
  console.log(id, method);
  return fetch(`${config.baseUrl}/cards/likes/${id}`, {
    method: `${method}`,
    headers: config.headers,
    body: JSON.stringify({
      id: `${id}`,
      // likes: `${likes}`
    })
  }).then(res => {
    if (res.ok) {
      return res.json();
    }
  });
}


// export const addLike = toggleLike(id, likes, 'PUT');
// export const deleteLike = toggleLike(id, likes, 'DELETE');

// // Cнятие лайка
// export const deliteLike = (_id, likes) => {
//   fetch(`${config.baseUrl}cards/likes/${_id}`, {
//     method: 'DELETE',
//     headers: config.headers,
//     body: JSON.stringify({
//       likes: `${likes}`,
//     })
//   }).then(res => {
//     if (res.ok) {
//       return res.json();
//     }
//   });
// }
