import{l as c}from"./1986dff3.js";import{r as e}from"./index.c153b984.js";function u(a,t){const[o,r]=e.exports.useState("loading"),s=JSON.stringify(t);return e.exports.useEffect(()=>{async function i(){try{r("loading"),await c(a,t),r("done")}catch{r("error")}}i()},[a,s,t]),o}export{u};
//# sourceMappingURL=97ec9106.js.map
