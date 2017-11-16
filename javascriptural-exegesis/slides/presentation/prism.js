import { css } from 'react-emotion';

export default css`
  background: #2a2a2a;
  color: #f9f9f9;

  & .token.comment,
  & .token.prolog,
  & .token.doctype,
  & .token.cdata {
    color: #909090;
  }

  & .token.punctuation {
    color: #bebec5;
  }

  & .token.operator,
  & .token.boolean,
  & .token.number {
    color: #a77afe;
  }

  & .token.property,
  & .token.function {
    color: #f9f9f9;
  }

  & .token.attr-name,
  & .token.string {
    color: #e6d06c;
  }
  & .token.entity,
  & .token.url,
  & .language-css .token.string,
  & .language-scss .token.string,
  & .style .token.string,
  & .token.string {
    color: #e6d06c;
  }
  & .token.selector,
  & .token.inserted {
    color: #a6e22d;
  }
  & .token.atrule,
  & .token.attr-value,
  & .token.keyword,
  & .token.important,
  & .token.deleted {
    color: #ef3b7d;
  }
  & .token.regex,
  & .token.statement {
    color: #76d9e6;
  }
  & .token.important,
  & .token.statement,
  & .token.bold {
    font-weight: bold;
  }
  & .token.entity {
    cursor: help;
  }
  & .token.italic {
    font-style: italic;
  }
  & {
    color: #f9f9f9;
  }
  & .token.tag {
    color: #ef3b7d;
  }
  & .token.attr-name {
    color: #a6e22d;
  }
  & .token.attr-value {
    color: #e6d06c;
  }
  & .token.style,
  & .token.script {
    color: #76d9e6;
  }
  & .token.script .token.keyword {
    color: #76d9e6;
  }
`;
