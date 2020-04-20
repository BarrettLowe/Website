import React, { Component } from 'react';

class Footer extends Component {
  render() {

    if (this.props.data) {
      var networks = this.props.data.social.map(function (network) {
        return <li key={network.name}><a href={network.url}><i className={network.className}></i></a></li>
      });
      var credits = this.props.data.credits.map(function (cred) {
        return <li key={cred.name}> Thanks to <a title={cred.name} href={cred.link}>{cred.name}</a> for the orignal header photo!</li >
      });

    }

    return (
      <footer>

        <div className="row">
          <div className="twelve columns">
            <ul className="social-links">
              {networks}
            </ul>

            <ul className="copyright">
              <li>&copy; Copyright 2020 Barrett Lowe</li>
              <li>Design by <a title="Styleshout" href="http://www.styleshout.com/">Styleshout</a></li>
            </ul>
            <ul>
              {credits}
            </ul>


          </div>
          <div id="go-top"><a className="smoothscroll" title="Back to Top" href="#home"><i className="icon-up-open"></i></a></div>
        </div>
      </footer >
    );
  }
}

export default Footer;
