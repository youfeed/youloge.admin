import Header from './header.vue';

Header.install = app => {
  app.component(Header.name, Header);
};

export default Header;