/**
 * ************************************
 *
 * @module next-persist
 * @author most-js
 * @description module that contains function to get state from cookies
 *              this version is run server side
 *
 * ************************************
 */
import cookie from 'cookie';

import { NextPageContext } from 'next';

interface Context extends NextPageContext {}

export default function getCookieStore(ctx) {
  const req = ctx.ctx.req;
  return cookie.parse(req.headers.cookie || '');
}
