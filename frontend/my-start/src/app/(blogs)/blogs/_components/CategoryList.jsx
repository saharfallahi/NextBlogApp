import Link from "next/link";

async function CategoryList() {
  // await new Promise((res) => {
  //     setTimeout(() => res(), 2000);
  //   });
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/category/list`);
  const {
    data: { categories },
  } = await res.json();
  // console.log(categories);

  return (
    <ul>
      <li><Link href="/blogs">همه</Link></li>
      {categories.map((category) => {
        return (
          <li key={category._id}>
            <Link href={`/blogs/category/${category.slug}`}>
              {category.title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

export default CategoryList;
