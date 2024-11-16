import PostList from "../_components/PostList";
import { cookies } from "next/headers";
import setCookieOnReq from "@/utils/setCookieOnReq";
import { getPosts } from "@/services/postServices";
import queryString from "query-string";

// export const revalidate=0 ;
// export const experimental_ppr=true;

async function BlogPage({ searchParams }) {
  // console.log(searchParams);

  const queries = queryString.stringify(await searchParams);
  const cookieStore = await cookies();
  const options = setCookieOnReq(cookieStore);
  const {posts} = await getPosts(queries, options);
  // console.log(posts);
  const { search } = await searchParams;
  return (
    <div>
      {search ? (
        <p className="mb-4 text-secondary-700">
          {posts.length === 0 ? "هیچ پستی با این مشخصات پیدا نشد " :`نشان دادن ${posts.length} نتیجه برای `}
          <span className="font-bold">&quot;{search}&quot;</span>
        </p>
      ) : null}
      <PostList posts={posts} />
    </div>
  );
}

export default BlogPage;
