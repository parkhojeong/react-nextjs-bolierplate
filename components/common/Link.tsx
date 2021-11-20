import NextLink, { LinkProps as NextLinkProps } from 'next/link';
import { PropsWithChildren } from 'react';

export type LinkProps = NextLinkProps;

function Link(props: PropsWithChildren<LinkProps>): JSX.Element {
  return <NextLink {...props}>{props.children}</NextLink>;
}

export default Link;
