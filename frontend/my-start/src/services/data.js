import setCookieOnReq from "@/utils/setCookieOnReq";
import { cookies } from "next/headers";
import { getAllUsersApi } from "./authService";
import { getCommentsApi } from "./commentService";
import { getPosts } from "./postServices";

export async function fetchCardData() {
  const cookieStore = cookies();
  const options = setCookieOnReq(cookieStore);

  try {
    const data = await Promise.all([
      getAllUsersApi(options),
      getCommentsApi(options),
      getPosts(),
    ]);
    const numberOfUsers = data[0]
    // const numberOfComments = Number(data[1].commentsCount ?? "0");
    // const numberOfPosts = Number(data[2].length ?? "0");

    console.log(numberOfUsers,"show ");
    
    // return {
    //   numberOfComments,
    //   numberOfPosts,
    //   numberOfUsers,
    // };
  } catch (error) {
    // console.log(error.response.data.message);

    // throw new Error("خطا در بارگذاری اطلاعات");
  }
}
