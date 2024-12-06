import { GithubRepo } from '../GithubRepo'

export const getGithubRepoUrl = ({ owner, name }: GithubRepo) =>
  `https://github.com/${owner}/${name}`
