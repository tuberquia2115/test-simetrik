import React from "react";
import PropTypes from "prop-types";
import { Global, css } from "@emotion/react";

const Layout = ({ children }) => {
  return (
    <>
      <Global
        styles={css`
          @import url("https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,700;1,300&family=Roboto:ital,wght@1,300;1,700&display=swap");
          :root {
            --primary: #9d3398;
            --primary-dark: #6c0069;
            --primary-light: #d065c9;
            --contrastText: #ffffff;
            --secondary: #ff5203;
            --secodary-dark: #c31200;
            --secondary-light: #ff863d;
            --error: #d50000;
            --warning: #ffcc00;
            --success: #2e7d32;
          }
          html,
          body {
            font-size: 100%;
            box-sizing: border-box;
            margin: 0px;
            padding: 0px;
          }
          h1,
          h2,
          h3,
          h4,
          h5,
          h6,
          p {
            margin: 0px;
            padding: 0px;
          }

          *,
          *:before,
          *:after {
            box-sizing: inherit;
          }

          body {
            height: 100%;
            width: 100%;
            font-family: "Open Sans", sans-serif;
            letter-spacing: 0.03em;
            line-height: 1.6;
          }

          img {
            max-width: 100%;
          }
        `}
      />
      <main>{children}</main>
    </>
  );
};

export default Layout;
Layout.propTypes = {
  children: PropTypes.node,
};
