import React, { useContext } from "react";
import { useRouter } from "next/router";
import { Proposal } from "../../components/imports";
import { BlockChainContext } from "../../context/BlockChainContext";
import { Loader } from "../../components/imports";

const SingleProposal: React.FC = (): JSX.Element => {
  const router = useRouter();
  const { loading } = useContext(BlockChainContext);

  if (loading) {
    return <Loader />;
  }

  const { slug } = router.query;

  return (
    <div>
      <Proposal slug={slug} />
    </div>
  );
};

export default SingleProposal;
