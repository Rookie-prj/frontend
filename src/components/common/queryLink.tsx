import React, { PropsWithChildren } from 'react';
import { Link, useLocation } from 'react-router-dom';

interface QueryLinkProps {
  extraQuery?: Record<string, string>;
  preserveQuery?: boolean;
  scroll?: boolean;
}

function QueryLink({
  extraQuery,
  preserveQuery = true,
  children,
}: PropsWithChildren<QueryLinkProps>) {
  const location = useLocation();

  const searchParams = new URLSearchParams(location.search);
  const existingQuery: Record<string, string> = Object.fromEntries(searchParams.entries());

  const finalQuery = preserveQuery ? { ...existingQuery, ...extraQuery } : extraQuery || {};

  const queryString = new URLSearchParams(finalQuery).toString();

  const targetPath = `${location.pathname}${queryString ? `?${queryString}` : ''}`;

  return <Link to={targetPath}>{children}</Link>;
}

export default QueryLink;
