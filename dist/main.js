(()=>{"use strict";var e={baseUrl:"https://nomoreparties.co/v1/plus-cohort-24",headers:{authorization:"665a484f-7a32-43f2-b793-9f53818a755f","Content-Type":"application/json"}},t=function(t,n){console.log(t,n),fetch("".concat(e.baseUrl,"/cards/likes/").concat(t),{method:"".concat(n),headers:e.headers,body:JSON.stringify({id:"".concat(t)})}).then((function(e){e.ok&&e.json().then((function(e){return e.likes.length}))}))};function n(e){e.classList.add("popup_opened")}function o(e){e.classList.remove("popup_opened")}function r(e){e.classList.add("form-profile__button_inactive")}var c=document.querySelector(".elements"),a=(document.querySelectorAll("#place-name, #place-way"),document.querySelector(".place-viewing__image")),l=document.querySelector(".place-viewing__caption"),i=(viewing.querySelector(".viewing-container").querySelector("#viewing-close"),document.querySelector("#place-name")),u=document.querySelector("#place-way");function s(e,o,r,c){var i=document.querySelector("#card-template").content.querySelector(".element").cloneNode(!0),u=i.querySelector(".element__image"),s=i.querySelector(".element__signature"),d=s.querySelector(".element__name"),f=s.querySelector(".element__choice-box"),m=f.querySelector(".element__choice-quantity");u.src="".concat(e),d.textContent="".concat(o),u.alt="".concat(o),m.textContent="".concat(c);var p=f.querySelector(".element__choice");p.addEventListener("click",(function(e){e.target.classList.toggle("element__choice_active"),p.classList.contains("element__choice_active")?m.textContent=t(r,"PUT"):m.textContent=t(r,"DELETE")}));var y=i.querySelector(".element__delete");return y.addEventListener("click",(function(){var e=y.closest(".element");console.log("Удаление карточки"),e.remove()})),u.addEventListener("click",(function(){a.src="".concat(e),a.alt="".concat(o),l.textContent="".concat(o),n(viewing)})),i}var d=function(e,t,n,o){c.append(s(e,t,n,o))};fetch("".concat(e.baseUrl,"/cards"),{headers:e.headers}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))})).then((function(e){e.forEach((function(e){d(e.link,e.name,e._id,e.likes.length)}))})).catch((function(e){console.log(e)}));var f=document.querySelector(".page"),m=f.querySelector(".content").querySelector(".profile").querySelector(".profile__container").querySelector(".profile__info"),p=m.querySelector(".profile__text"),y=m.querySelector(".profile__name-conteiner"),_=y.querySelector(".profile__name"),v=f.querySelector(".profile-popup"),S=f.querySelector("#place"),q=y.querySelector(".profile__edit-button"),h=document.forms["form-profile"],g=h.querySelector('[name="speсial"]'),b=h.querySelector('[name="name"]'),x=document.querySelectorAll(".popup"),E=document.querySelector(".profile__add-button"),C=document.querySelector("#place-button");(q.addEventListener("click",(function(){b.value=_.textContent,g.value=p.textContent,n(v)})),E.addEventListener("click",(function(){r(C),n(S)})),x.forEach((function(e){e.addEventListener("mousedown",(function(t){t.target===e&&o(e)}))})),x.forEach((function(e){document.addEventListener("keydown",(function(t){"Escape"===t.code&&e.classList.contains("popup_opened")&&o(e)}))})),document.querySelectorAll(".popup__close")).forEach((function(e){var t=e.closest(".popup");e.addEventListener("click",(function(){return o(t)}))}));var L=document.querySelector(".profile-popup"),k=document.querySelector(".form"),j=(document.querySelectorAll(".form"),document.querySelector(".form-profile__text-error")),w=k.querySelector(".form-profile__button"),A=document.querySelector("#place-button"),P=document.querySelector('[name="name"]'),U=document.querySelector('[name="speсial"]'),T=document.querySelector(".profile__name"),D=document.querySelector(".profile__text"),M=(k.querySelectorAll(".form-profile__button"),function(e,t,n){var o=e.querySelector(".".concat(t.id,"-error"));(t.textContent="")?o.textContent=j.textContent:o.textContent=n}),N=function(e,t){e.querySelector(".".concat(t.id,"-error")).textContent=""},O=function(e,t){!function(e){return e.some((function(e){return!e.validity.valid}))}(e)?(t.disabled=!1,function(e){e.classList.remove("form-profile__button_inactive")}(t)):(t.disabled=!0,r(t))},J=document.forms["form-profile"],V=document.forms["card-form"],z=document.querySelector(".profile__name"),H=document.querySelector(".profile__text"),B=document.querySelector(".profile__avatar");fetch("".concat(e.baseUrl,"/users/me"),{headers:e.headers}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))})).then((function(e){z.textContent=e.name,H.textContent=e.about,B.src=e.avatar})).catch((function(e){console.log(e)})),V.addEventListener("submit",(function(t){t.preventDefault();var n,r,a=i.value,l=u.value;c.prepend(s(l,a)),d(l,a,0),n=l,r=a,fetch("".concat(e.baseUrl,"/cards"),{method:"POST",headers:e.headers,body:JSON.stringify({name:"".concat(r),link:"".concat(n)})}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))})),o(place),t.target.reset()})),Array.from(document.querySelectorAll(".form")).forEach((function(e){e.addEventListener("submit",(function(e){e.preventDefault()})),function(e){var t=Array.from(e.querySelectorAll(".form-profile__text"));t.forEach((function(n){n.addEventListener("input",(function(){!function(e,t){t.validity.patternMismatch?t.setCustomValidity(t.dataset.errorMessage):t.setCustomValidity(""),t.validity.valid?N(e,t):M(e,t,t.validationMessage)}(e,n),function(e,t){t.validity.valid?N(e,t):M(e,t,t.validationMessage)}(e,n),O(t,w),O(t,A)}))}))}(e)})),J.addEventListener("submit",(function(t){t.preventDefault();var n,r,c=P.value,a=U.value;T.textContent=c,D.textContent=a,n=c,r=a,fetch("".concat(e.baseUrl,"/users/me"),{method:"PATCH",headers:e.headers,body:JSON.stringify({name:"".concat(n),about:"".concat(r)})}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))})),o(L)}))})();