(()=>{"use strict";var e={baseUrl:"https://nomoreparties.co/v1/plus-cohort-24",headers:{authorization:"665a484f-7a32-43f2-b793-9f53818a755f","Content-Type":"application/json"}},t=function(t,n){console.log(t,n),fetch("".concat(e.baseUrl,"/cards/likes/").concat(t),{method:"".concat(n),headers:e.headers,body:JSON.stringify({id:"".concat(t)})}).then((function(e){e.ok&&e.json().then((function(e){return e.likes.length}))}))};function n(e){e.classList.add("popup_opened")}function o(e){e.classList.remove("popup_opened")}function c(e){e.classList.add("form-profile__button_inactive")}var r=document.querySelector(".elements"),a=(document.querySelectorAll("#place-name, #place-way"),document.querySelector(".place-viewing__image")),i=document.querySelector(".place-viewing__caption"),l=(viewing.querySelector(".viewing-container").querySelector("#viewing-close"),document.querySelector("#place-name")),u=document.querySelector("#place-way");function s(e,o,c,r){var l=document.querySelector("#card-template").content.querySelector(".element").cloneNode(!0),u=l.querySelector(".element__image"),s=l.querySelector(".element__signature"),d=s.querySelector(".element__name"),f=s.querySelector(".element__choice-box"),m=f.querySelector(".element__choice-quantity"),p=f.querySelector(".element__choice");u.src="".concat(e),d.textContent="".concat(o),u.alt="".concat(o),m.textContent="".concat(r.length),r.forEach((function(e){"b63e6496dcdc54028081a240"==e._id&&p.classList.add("element__choice_active")})),p.addEventListener("click",(function(e){e.target.classList.toggle("element__choice_active"),p.classList.contains("element__choice_active")?m.textContent=t(c,"PUT"):m.textContent=t(c,"DELETE")}));var _=l.querySelector(".element__delete");return _.addEventListener("click",(function(){var e=_.closest(".element");console.log("Удаление карточки"),e.remove()})),u.addEventListener("click",(function(){a.src="".concat(e),a.alt="".concat(o),i.textContent="".concat(o),n(viewing)})),l}fetch("".concat(e.baseUrl,"/cards"),{headers:e.headers}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))})).then((function(e){e.forEach((function(e){r.append(s(e.link,e.name,e._id,e.likes))}))})).catch((function(e){console.log(e)}));var d=document.querySelector(".page"),f=d.querySelector(".content").querySelector(".profile").querySelector(".profile__container").querySelector(".profile__info"),m=f.querySelector(".profile__text"),p=f.querySelector(".profile__name-conteiner"),_=p.querySelector(".profile__name"),y=d.querySelector(".profile-popup"),v=d.querySelector("#place"),S=p.querySelector(".profile__edit-button"),q=document.forms["form-profile"],h=q.querySelector('[name="speсial"]'),g=q.querySelector('[name="name"]'),b=document.querySelectorAll(".popup"),E=document.querySelector(".profile__add-button"),x=document.querySelector("#place-button");(S.addEventListener("click",(function(){g.value=_.textContent,h.value=m.textContent,n(y)})),E.addEventListener("click",(function(){c(x),n(v)})),b.forEach((function(e){e.addEventListener("mousedown",(function(t){t.target===e&&o(e)}))})),b.forEach((function(e){document.addEventListener("keydown",(function(t){"Escape"===t.code&&e.classList.contains("popup_opened")&&o(e)}))})),document.querySelectorAll(".popup__close")).forEach((function(e){var t=e.closest(".popup");e.addEventListener("click",(function(){return o(t)}))}));var L=document.querySelector(".profile-popup"),C=document.querySelector(".form"),k=(document.querySelectorAll(".form"),document.querySelector(".form-profile__text-error")),j=C.querySelector(".form-profile__button"),w=document.querySelector("#place-button"),A=document.querySelector('[name="name"]'),P=document.querySelector('[name="speсial"]'),U=document.querySelector(".profile__name"),T=document.querySelector(".profile__text"),D=(C.querySelectorAll(".form-profile__button"),function(e,t,n){var o=e.querySelector(".".concat(t.id,"-error"));(t.textContent="")?o.textContent=k.textContent:o.textContent=n}),M=function(e,t){e.querySelector(".".concat(t.id,"-error")).textContent=""},N=function(e,t){!function(e){return e.some((function(e){return!e.validity.valid}))}(e)?(t.disabled=!1,function(e){e.classList.remove("form-profile__button_inactive")}(t)):(t.disabled=!0,c(t))},O=document.forms["form-profile"],J=document.forms["card-form"],V=document.querySelector(".profile__name"),z=document.querySelector(".profile__text"),H=document.querySelector(".profile__avatar");fetch("".concat(e.baseUrl,"/users/me"),{headers:e.headers}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))})).then((function(e){V.textContent=e.name,z.textContent=e.about,H.src=e.avatar})).catch((function(e){console.log(e)})),J.addEventListener("submit",(function(t){t.preventDefault();var n,c,a=l.value;(n=u.value,c=a,fetch("".concat(e.baseUrl,"/cards"),{method:"POST",headers:e.headers,body:JSON.stringify({name:"".concat(c),link:"".concat(n)})}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}))).then((function(e){r.prepend(s(e.link,e.name,e._id,e.likes))})).catch((function(e){console.log(e)})),o(place),t.target.reset()})),Array.from(document.querySelectorAll(".form")).forEach((function(e){e.addEventListener("submit",(function(e){e.preventDefault()})),function(e){var t=Array.from(e.querySelectorAll(".form-profile__text"));t.forEach((function(n){n.addEventListener("input",(function(){!function(e,t){t.validity.patternMismatch?t.setCustomValidity(t.dataset.errorMessage):t.setCustomValidity(""),t.validity.valid?M(e,t):D(e,t,t.validationMessage)}(e,n),function(e,t){t.validity.valid?M(e,t):D(e,t,t.validationMessage)}(e,n),N(t,j),N(t,w)}))}))}(e)})),O.addEventListener("submit",(function(t){t.preventDefault();var n,c,r=A.value,a=P.value;U.textContent=r,T.textContent=a,n=r,c=a,fetch("".concat(e.baseUrl,"/users/me"),{method:"PATCH",headers:e.headers,body:JSON.stringify({name:"".concat(n),about:"".concat(c)})}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))})),o(L)}))})();