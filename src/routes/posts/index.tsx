import { createFileRoute, Link } from '@tanstack/react-router'

type Post = {
  id: string
  title: string
  body: string
}

export const Route = createFileRoute('/posts/')({
  component: PostsPage,
  validateSearch: (search) => ({
    q: typeof search.q === 'string' ? search.q : '',
  }),
  loaderDeps: ({ search: { q } }) => ({ q }),
  loader: async ({ deps: { q } }) => {
    const posts: Post[] = [
      { id: 'post1', title: 'Post 1', body: 'Body of post 1' },
      { id: 'post2', title: 'Post 2', body: 'Body of post 2' },
      { id: 'post3', title: 'Post 3', body: 'Body of post 3' },
    ]

    return {
      posts: posts.filter((post) =>
        post.id.toLowerCase().includes(q.toLowerCase())
      ),
    }
  },
})

function PostsPage() {
  const { posts } = Route.useLoaderData()

  return (
    <section className="p-4">
      <h1 className="mb-4 text-2xl font-semibold">Posts</h1>

      {posts.length === 0 ? (
        <p className="text-gray-500">No posts found.</p>
      ) : (
        <ul className="space-y-2">
          {posts.map((post) => (
            <li key={post.id}>
              <Link
                to="/posts/$postId"
                params={{ postId: post.id }}
                className="block rounded p-2 transition hover:bg-gray-100"
              >
                {post.title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </section>
  )
}
