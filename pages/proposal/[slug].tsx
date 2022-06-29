import React from 'react'
import { useRouter } from "next/router";
import { Proposal } from '../../components/imports'


const SingleProposal: React.FC = (): JSX.Element => {

const router = useRouter();

const { slug } = router.query;

  return (
    <div>
        <Proposal slug={slug} />
    </div>
  )
}

export default SingleProposal;