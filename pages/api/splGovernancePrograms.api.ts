import { withSentry } from '@sentry/nextjs'
import { NextApiRequest, NextApiResponse } from 'next'
import { getAllSplGovernanceProgramIds } from './tools/realms'
export const config = {
  runtime: 'experimental-edge', // for Edge API Routes only
  unstable_allowDynamic: [
    '/lib/utilities.js', // allows a single file
    '/node_modules/function-bind/**', // use a glob to allow anything in the function-bind 3rd party module
  ],
}
// Returns unique spl-governance program ids
const handler = (req: NextApiRequest, res: NextApiResponse) => {
  const cluster = req.query.cluster?.toString() || undefined
  res.status(200).json(getAllSplGovernanceProgramIds(cluster))
}

export default withSentry(handler)
