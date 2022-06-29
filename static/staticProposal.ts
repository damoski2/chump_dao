

export interface Proposal{
    id: string | number;
    description: string;
    status: string;
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
        status: 'Ongoing'
    },
    {
        id: 2,
        description: 'Should We Move Hq to The United Kingdom or United States?',
        status: 'Accepted',
        details: {
            votesUp: 10,
            votesDown: 7,
            countConducted: true
        }
    },
    {
        id: 3,
        description: 'Should Garnerly Beta version be launched Privately?',
        status: 'Rejected'
    },
    {
        id: 4,
        description: 'Should we Choose to set up McDonalds instead of Five Guys in nigeria?',
        status: 'Ongoing'
    },
]

export { staticProposal };
