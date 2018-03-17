import React, { Component } from 'react';
import GoogleAnalytics from 'react-ga';

GoogleAnalytics.initialize('UA-115400336-1', {debug: true});

const withTracker = (WrappedComponent, options = {}) => {
  const trackPage = page => {
    GoogleAnalytics.set({
      page,
      userId: 'Mat',
      ...options,
    });
    GoogleAnalytics.pageview(page);
  };

  return class extends Component {
    componentDidMount() {
      const page = this.props.location.pathname;
      // console.log(page);
      trackPage(page);
    }

    componentWillReceiveProps(nextProps) {
      const currentPage = this.props.location.pathname;
      const nextPage = nextProps.location.pathname;

      if (currentPage !== nextPage) {
        // console.log(nextPage);
        trackPage(nextPage);
      }
    }

    render() {
      return <WrappedComponent {...this.props} />
    }
  };
};

export default withTracker;