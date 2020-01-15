import React from "react"
import { MDXProvider } from "@mdx-js/react"
import Highlight, { defaultProps } from "prism-react-renderer";

const components = {
  h1: ({ children }) => (
    <h1 style={{ color: '#fff'}}>{children}</h1>
  ),
  h2: ({ children }) => (
    <h2 style={{ color: '#fff'}}>{children}</h2>
  ),
  hr: () => (<hr style={{ backgroundColor: 'hsla(0, 100%, 100%, 0.8)' }}/>),
  pre: ({ children }) => {
    const className = children.props.className || '';
    const lang = className.match(/language-(?<lang>.*)/) || 'js'
    return (
      <Highlight
          {...defaultProps}
          code={children.props.children}
          language={lang.groups ? lang.groups.lang : lang}>
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <pre className={className} style={style}>
        {tokens.map((line, i) => (
          <div {...getLineProps({ line, key: i })}>
            {line.map((token, key) => (
              <span {...getTokenProps({ token, key })} />
            ))}
          </div>
        ))}
      </pre>
        )}
      </Highlight>
    );
  },
};

export const wrapRootElement = ({ element }) => {
  return (
    <MDXProvider components={components}>
      {element}
    </MDXProvider>
  )
}
