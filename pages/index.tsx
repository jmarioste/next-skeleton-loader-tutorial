import type { NextPage } from "next";
import SkeletonCircle from "../components/skeleton/SkeletonCircle";
import SkeletonLoader from "../components/skeleton/SkeletonLoader";
import SkeletonRectangle from "../components/skeleton/SkeletonRectangle";

const Home: NextPage = () => {
  return (
    <div className="container mx-auto">
      <SkeletonLoader className="flex gap-2 my-10 w-80">
        <SkeletonCircle size={48} />
        <SkeletonRectangle
          lines={3}
          unEqualWidth
          gap={8}
          className="bg-gray-200 rounded-md"
        />
      </SkeletonLoader>
      <SkeletonLoader className="w-80">
        <SkeletonRectangle height={100} className="bg-gray-200 rounded-md" />
      </SkeletonLoader>
    </div>
  );
};

export default Home;
