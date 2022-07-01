

export interface Proposal{
    id:  number;
    description: string;
    status: string;
    proposer: string;
    details?: ProposalDetails;
}

type ProposalDetails = {
    votesUp: number;
    votesDown: number;
    countConducted: boolean;
}

const staticProposal: Proposal[] = [
    {
        id: 1,
        description: 'Should we start a burger joint?',
        status: 'Ongoing',
        proposer: '0xc3804990917BcE66E4960ec7A036227551F8B9F4'
    },
    {
        id: 2,
        description: 'Should We Move Hq to The United Kingdom or United States?',
        status: 'Accepted',
        proposer: '0xc3804990917BcE66E4960ec7A036227551F8B9F4',
        details: {
            votesUp: 10,
            votesDown: 7,
            countConducted: true
        }
    },
    {
        id: 3,
        description: 'Should Garnerly Beta version be launched Privately?',
        status: 'Rejected',
        proposer: '0xc3804990917BcE66E4960ec7A036227551F8B9F4'
    },
    {
        id: 4,
        description: 'Should we Choose to set up McDonalds instead of Five Guys in nigeria?',
        status: 'Ongoing',
        proposer: '0xc3804990917BcE66E4960ec7A036227551F8B9F4'
    },
]

export { staticProposal };
