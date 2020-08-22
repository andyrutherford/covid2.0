import { createGlobalStyle } from 'styled-components';

const Global = createGlobalStyle`

:root {
  }
	html, body {
		font-size: 62.5%
		box-sizing: border-box;
		height: 100%;
		background: ${(props) => props.theme.colors.background}

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
        font-family: 'Nunito', sans-serif;
	}
	a {
		text-decoration: none;
		cursor: pointer;
		color: var(--secondaryText);
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

	.page-header {
		display: flex;
		align-items: center;
	}

	@media (max-width: 1500px) {
		.page-header {
			padding-left: 50px;
			margin-bottom: 10px;
		}
	}
	@media (max-width: 600px) {
		.page-header {
			padding-top: 5px;
			padding-left: 60px;
		}
	}
`;

export default Global;
