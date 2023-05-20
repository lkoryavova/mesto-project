const config = {
    baseUrl: 'https://nomoreparties.co/v1/plus-cohort-24',
    headers: {
      authorization: '665a484f-7a32-43f2-b793-9f53818a755f',
      'Content-Type': 'application/json'
    }
  }

// Загрузка информации о пользователе с сервера
// export const getUserProfile = () => {
//     return fetch(`${config.baseUrl}/users/me`, {
//         headers: config.headers
//     })
//         .then(res => {
//             if (res.ok) {
//                 return res.json();
//             }

//             // если ошибка, отклоняем промис
//             return Promise.reject(`Ошибка: ${res.status}`);
//         });
// }

// Загрузка карточек с сервера
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

