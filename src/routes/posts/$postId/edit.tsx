import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/posts/$postId/edit')({
  component: RouteComponent,
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

function RouteComponent() {
  const { postId } = Route.useLoaderData()

  return (
    <article className="p-4">
      <h2 className="mb-2 text-xl font-semibold">
        Edit Post with ID: {postId}
      </h2>
      <form onSubmit={(e) => e.preventDefault()} className="flex gap-2">
        <input
          type="text"
          placeholder="Update post title"
          className="rounded border border-gray-300 px-2 py-1"
        />
        <button
          type="submit"
          className="rounded bg-blue-500 px-2 py-1 text-white"
        >
          Update
        </button>
      </form>
    </article>
  )
}
