import { fetchCardData } from "@/services/data"

async function Profile() {
  // const {numberOfComments,numberOfPosts,numberOfUsers}=
  await fetchCardData();
  return (
    <div>
      <div className="grid gap-6 md:grid-cols-3 mb-8">
        {/* <div>{numberOfComments}</div> */}
        <div></div>
        <div></div>
      </div>
    </div>
  )
}

export default Profile