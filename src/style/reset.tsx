import { Global, css } from '@emotion/react';

export default function GlobalStyle() {
  return (
    <Global
      styles={css`
        *,
        *::before,
        *::after {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          font-family: 'Pretendard', sans-serif;
        }
        @media (min-width: 375px) {
          #root,
          .Nav,
          .showNav {
            width: 375px;
          }
        }

        @media (max-width: 500px) {
          #root,
          .Nav,
          .showNav {
            width: 100vw;
          }
        }

        #root {
          box-shadow: rgba(100, 100, 111, 0.5) 0px 7px 29px 0px;
          margin: 0 auto;
          min-height: 100vh;
          position: relative;
        }

        html,
        body {
          align-items: center;
          display: flex;
          justify-content: center;
          min-height: 100vh;
          font-family: 'Pretendard', sans-serif;
        }

        a {
          color: inherit;
          text-decoration: none;
        }
        button,
        input,
        select,
        textarea {
          background: transparent;
          border: 0;
        }
        button:focus,
        input:focus,
        select:focus,
        textarea:focus {
          box-shadow: none;
          outline: none;
        }
        a,
        button {
          cursor: pointer;
        }
        ul,
        ol {
          padding-left: 0;
          list-style: none;
        }
      `}
    />
  );
}
