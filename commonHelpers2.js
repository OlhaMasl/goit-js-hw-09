import"./assets/modulepreload-polyfill-3cfb730f.js";const a={email:"",message:""},o="feedback-form-state",l=document.querySelector(".feedback-form"),r=document.querySelector("input"),n=document.querySelector("textarea");m();function s(e){e.preventDefault(),a.email=r.value.trim(),a.message=n.value.trim();const t=JSON.stringify(a);localStorage.setItem(o,t)}l.addEventListener("input",s);function c(e){e.preventDefault(),r.value===""||n.value===""?alert("Fill please all fields"):console.log(a),localStorage.removeItem(o),e.currentTarget.reset()}l.addEventListener("submit",c);function m(){const e=localStorage.getItem(o);if(e){const t=JSON.parse(e);r.value=t.email,n.value=t.message}}
//# sourceMappingURL=commonHelpers2.js.map
