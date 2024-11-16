import { fetchCardData } from "@/services/data";
import Card from "app/(dashboard)/profile/_components/Card";

async function CardWrapper() {
  const { numberOfComments, numberOfPosts, numberOfUsers } =
    await fetchCardData();

//   await new Promise((resolve) => setTimeout(resolve, 5000));
  return (
    <div className="grid gap-6 md:grid-cols-3 mb-8">
      <Card title="نظرات" value={numberOfComments} type="comments" />
      <Card title="کاربران" value={numberOfUsers} type="users" />
      <Card title="پست ها" value={numberOfPosts} type="posts" />
    </div>
  );
}

export default CardWrapper;
