// import './style/index.scss';
import functions from "./functions/functions";
import components from "./components/components";

const install = function(app) {
  components.map((is) => {
    app.component(is.name, is);
  });
  functions.map(is=>{
    app.config.globalProperties[`$${is.name}`] = is;
  })
  // app.directive(key, directives[key])
};
// if(typeof window !== 'undefined' && window.Vue){ install(window.Vue) }
const Youloge = {
  install,
  name: 'Youloge',
  version: '0.1.0',
  ...components,
  ...functions
}
export {
  install,
  Youloge
}
export default Youloge;