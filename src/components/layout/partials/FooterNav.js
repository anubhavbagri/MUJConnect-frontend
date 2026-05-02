import React from 'react';
import classNames from 'classnames';

const FooterNav = ({ className, ...props }) => {
  const classes = classNames('footer-nav', className);

  return (
    <nav {...props} className={classes}>
      <ul className="list-reset">
        <li>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://forms.gle/feedback"
          >
            Provide your valuable feedback!
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default FooterNav;
