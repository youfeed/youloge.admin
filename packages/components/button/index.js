import yButton from './button.vue';

yButton.install = app => {
  app.component(yButton.name, yButton);
};

export default yButton;