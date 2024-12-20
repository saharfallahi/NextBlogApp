"use client";
import useMoveBack from "@/hooks/useMoveBack";
// import useMoveBack from "@/hook/useMoveBack";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";



function NotFound() {
  const moveBack = useMoveBack();

// const router=useRouter();

  return (
    <div className="h-screen">
      <div className="container xl:max-w-screen-xl">
        <div className="flex justify-center pt-10">
          <div>
            <p className="text-xl font-bold text-red-600 mb-8">
              هیچ پستی با این مشخصات یافت نشد
            </p>
            <Link href="/blogs" className="text-secondary-500">رفتن به صفحه پست ها</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
export default NotFound;
