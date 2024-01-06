// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { withSentry } from '@sentry/nextjs'
import { NextApiRequest, NextApiResponse } from 'next'
export const config = {
  runtime: 'experimental-edge', // for Edge API Routes only
  unstable_allowDynamic: [
    '/lib/utilities.js', // allows a single file
    '/node_modules/function-bind/**', // use a glob to allow anything in the function-bind 3rd party module
  ],
}
const handler = (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json({ name: 'John Doe' })
}

export default withSentry(handler)
