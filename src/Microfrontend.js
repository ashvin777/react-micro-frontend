import React, { PureComponent } from 'react';
import AssetsInjector from './Assets.Injector';
import AssetsApi from './Assets.Api';
import PropTypes from 'prop-types';

export default class Microfrontend extends PureComponent {
  state = {
    loading: true,
    loadingError: false
  };

  static propTypes = {
    name: PropTypes.string.isRequired,
    host: PropTypes.string.isRequired,
    loader: PropTypes.element,
    fallback: PropTypes.element
  };

  async componentDidMount() {
    const { name, host } = this.props;

    try {
      let { data: manifest } = await AssetsApi.getManifest(host);
      await AssetsInjector({ manifest, name, host });

      this.setState({ loading: false, loadingError: false });
      this.mountMicrofrontend();
    } catch (err) {
      this.setState({ loading: false, loadingError: true });
      console.error('Failed to load assets of microfrontend - ', name);
      console.error('Failed with error - ', err);
    }
  }

  componentWillUnmount() {
    this.unmountMicrofrontend();
  }

  mountMicrofrontend() {
    const { name } = this.props;
    if (window[`mount${name}`]) {
      window[`mount${name}`](this.getContainerName(), this.props);
    } else {
      this.setState({ loadingError: true });
      console.error('Mount method is not defined in microfrontend - ', name);
    }
  }

  unmountMicrofrontend() {
    const { name } = this.props;

    if (window[`unmount${name}`]) {
      window[`unmount${name}`](this.getContainerName());
    } else {
      this.setState({ loadingError: true });
      console.error('Unmount method is not defined in microfrontend - ', name);
    }
  }

  getContainerName() {
    const { name } = this.props;
    return `${name}-microfrontend-container`;
  }

  render() {
    let { loading, loadingError } = this.state;
    let { loader: Loader, fallback: Fallback } = this.props;

    return (
      <main id={this.getContainerName()}>
        {loading && Loader && <Loader />}
        {loadingError && Fallback && <Fallback />}
      </main>
    );
  }
}
