import { withSentry } from '@sentry/nextjs'
import { NextApiRequest, NextApiResponse } from 'next'
import { getAllSplGovernanceProgramIds } from './tools/realms'
export const config = {
  runtime: 'experimental-edge',
};
// Returns unique spl-governance program ids
const handler = (req: NextApiRequest, res: NextApiResponse) => {
  const cluster = req.query.cluster?.toString() || undefined
  res.status(200).json(getAllSplGovernanceProgramIds(cluster))
}

export default withSentry(handler)
