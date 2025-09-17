import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/posts/$postId/')({
  component: PostPage,
  loader: async ({ params }) => {
    await new Promise((resolve) => setTimeout(resolve, 1000))

    return { postId: params.postId }
  },

  pendingComponent: () => (
    <div className="animate-pulse p-2 text-gray-500">Loading post...</div>
  ),

  errorComponent: ({ error }) => (
    <div className="p-2 text-red-500">Error: {error.message}</div>
  ),
})

function PostPage() {
  const { postId } = Route.useLoaderData()

  return (
    <article className="p-4">
      <h2 className="mb-2 text-xl font-semibold">Post Details</h2>
      <div>
        <p className="text-gray-700">Post ID: {postId}</p>
        <Link
          className="text-blue-500 hover:underline"
          to="/posts/$postId/edit"
          params={{ postId }}
        >
          Edit Post
        </Link>
      </div>
    </article>
  )
}
