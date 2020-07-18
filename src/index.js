import ReactDOM from 'react-dom';
export { default as Microfrontend } from './Microfrontend';

export function register({ name, containerId, render }) {
  window[`mount${name}`] = (containerId, props = {}) => {
    ReactDOM.render(render(), document.getElementById(containerId));
  };

  window[`unmount${name}`] = (containerId) => {
    ReactDOM.unmountComponentAtNode(document.getElementById(containerId));
  };

  document.addEventListener('DOMContentLoaded', () => {
    window[`mount${name}`](containerId);
  });
}
