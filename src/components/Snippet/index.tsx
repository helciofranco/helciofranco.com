import { useMemo } from 'react';

import Highlight, { defaultProps } from 'prism-react-renderer';
import vsDark from 'prism-react-renderer/themes/vsDark';

import { Pre, Token, Line } from './styles';
import { Props } from './types';

const Snippet = ({ code, language = 'typescript' }: Props) => {
  const trimmed = useMemo<string>(() => code.trim(), [code]);

  return (
    <Highlight
      Prism={defaultProps.Prism}
      theme={vsDark}
      code={trimmed}
      language={language}
    >
      {({ tokens, getTokenProps }) => (
        <Pre>
          {tokens.map((line, i) => (
            <Token key={i}>
              {line.map((token, key) => (
                <Line key={key} {...getTokenProps({ token, key })} />
              ))}
            </Token>
          ))}
        </Pre>
      )}
    </Highlight>
  );
};

export default Snippet;
