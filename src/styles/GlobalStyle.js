import { createGlobalStyle } from 'styled-components';

const Global = createGlobalStyle`
	html {
		font-size: 62.5%
		box-sizing: border-box;
	}
	*, *:before, *:after {
		padding: 0;
		margin: 0;
		box-sizing: inherit;
	}
    body * {
        transition: 0.2s;
        font-family: 'Nunito', sans-serif;
      }
	h1, h2, h3, h4, h5, h6 {
        font-weight: normal;
        font-family: 'Ubuntu', sans-serif;
	}
	a {
		text-decoration: none;
		cursor: pointer;
		color: #0095f6;
	}
	ul {
		  list-style-type: none
    }
    .link {
        border: none;
        background-color: transparent;
        cursor: pointer;
        font-size: inherit;
    }

    .active {
        border-bottom: 3px solid navy;
    }
	.subtext {
		color: grey;
	  }
	.small {
	font-size: 12px;
	}
	.bold {
		font-weight: bold;
	}
	.black {
		color: black;
	}
	*:focus {
	  outline: none;
	}
`;

export default Global;
