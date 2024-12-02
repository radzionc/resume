import { Text } from '@lib/ui/text'
import { useInfiniteQuery } from '@tanstack/react-query'
import { range } from '@lib/utils/array/range'
import { PaginatedView } from '@lib/ui/pagination/PaginatedView'
import { usePaginatedResultItems } from '@lib/ui/query/hooks/usePaginatedResultItems'
import { TableLayout } from '@lib/ui/layout/TableLayout'
import { Fragment } from 'react'
import { DemoPage } from '@demo/app/components/DemoPage'
import { makeDemoPage } from '@demo/app/layout/makeDemoPage'

interface QueryItemsParams {
  startAt: number
}

interface Item {
  name: string
  price: number
}

const resultsPerPage = 5

const queryItems = async ({ startAt = 0 }: QueryItemsParams) => {
  await new Promise((resolve) => setTimeout(resolve, Math.random() * 2000))

  const items: Item[] = range(resultsPerPage).map((index) => ({
    name: `Item #${index + startAt}`,
    price: Math.round(Math.random() * 1000),
  }))

  return {
    items,
    nextItem: startAt + resultsPerPage,
  }
}

export default makeDemoPage(() => {
  const { data, isLoading, isFetchingNextPage, fetchNextPage, isFetched } =
    useInfiniteQuery({
      queryKey: ['items'],
      initialPageParam: 0,
      queryFn: async ({ pageParam }) => {
        if (pageParam === null) return

        const result = await queryItems({ startAt: pageParam })

        return result
      },
      refetchOnMount: true,
      getNextPageParam: (lastPage) => lastPage?.nextItem || null,
    })

  const items = usePaginatedResultItems(data, (response) => response.items)
  const noItems = isFetched && items.length < 1

  return (
    <DemoPage title="Infinite Scroll" youtubeVideoId="mZfDvfs2GtI">
      <TableLayout
        gridTemplateColumns="120px 80px"
        columnNames={['Name', 'Price']}
      >
        <PaginatedView
          onRequestToLoadMore={fetchNextPage}
          isLoading={isLoading || isFetchingNextPage}
        >
          {noItems && !isLoading ? (
            <Text>No items 😴</Text>
          ) : (
            items.map(({ name, price }) => (
              <Fragment key={name}>
                <Text>{name}</Text>
                <Text color="supporting">${price}</Text>
              </Fragment>
            ))
          )}
        </PaginatedView>
      </TableLayout>
    </DemoPage>
  )
})
