import { useQuery } from '@tanstack/react-query'
import { GithubRepo } from '../GithubRepo'
import { queryUrl } from '@lib/utils/query/queryUrl'

interface GitHubRepoResponse {
  stargazers_count: number
}

export function useGithubRepoQuery({ owner, name }: GithubRepo) {
  return useQuery({
    queryKey: ['repo', owner, name],
    queryFn: () =>
      queryUrl<GitHubRepoResponse>(
        `https://api.github.com/repos/${owner}/${name}`,
      ),
  })
}
