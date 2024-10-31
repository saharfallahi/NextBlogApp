export async function middlewareAuth(req) {
  const accessToken = await req.cookies.get("accessToken");
  const refreshToken = await req.cookies.get("refreshToken");

  const options = {
    method: "GET",
    credentials: "include",
    headers: {
      cookie: `${accessToken?.name}=${accessToken?.value}; ${refreshToken?.name}=${refreshToken?.value}`,
    },
  };

  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/user/profile`, options);
  const { data } = await res.json();
  const { user } = data || {};
  // console.log(user);
  return user;
}
