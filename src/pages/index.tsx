import { type NextPage } from "next";

import { api } from "~/utils/api";

const Home: NextPage = () => {
  const hello = api.example.test.useQuery({ age: 5 });

  return (
    <p className="text-2xl">
      {hello.data
        ? hello.data.text
        : "Loading tRPC query..."}
    </p>
  );
};

export default Home;
