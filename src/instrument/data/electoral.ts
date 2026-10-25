/**
 * Canonical electoral data — typed, separated from presentation.
 * Source: IEBC 2022 gazetted register and Form 37D returns.
 */

export interface CountyElectorate {
  countyCode: string;
  countyName: string;
  registeredVoters2022: number;
  turnout2022Pct: number;
  votesCast2022: number;
  winner2022Name: string;
  winner2022Votes: number;
  winner2022SharePct: number;
  source: string;
  vintage: string;
}

/** Official IEBC 2022 figures for Mombasa County (001) */
export const mombasaElectorate: CountyElectorate = {
  countyCode: '001',
  countyName: 'Mombasa',
  registeredVoters2022: 641_913,
  turnout2022Pct: 34.1,
  votesCast2022: 218_876, // consistent with 34.1% of 641913 ≈ 218,876
  winner2022Name: 'Abdulswamad Shariff Nassir',
  winner2022Votes: 119_083,
  winner2022SharePct: 54.09,
  source: 'IEBC Gazetted Voter Register 2022; IEBC Form 37D Gubernatorial Declaration 2022',
  vintage: '2022-08',
};

/**
 * Named model: Turnout Path
 * Votes required = Registered × (Turnout%/100) × (TargetShare%/100)
 */
export function computeTurnoutPath(
  registered: number,
  turnoutPct: number,
  targetSharePct: number
): {
  votesCast: number;
  winningVotes: number;
  surplusVs2022Winner: number;
} {
  const votesCast = Math.round((registered * turnoutPct) / 100);
  const winningVotes = Math.round((votesCast * targetSharePct) / 100);
  const surplusVs2022Winner = winningVotes - mombasaElectorate.winner2022Votes;
  return { votesCast, winningVotes, surplusVs2022Winner };
}
