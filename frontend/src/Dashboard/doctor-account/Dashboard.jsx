import Loader from "../../components/loader/Loading"
import Error from "../../components/Error/Error"
import useGetProfile from "../../hooks/useFetchData"
import { BASE_URL } from "../../config";
import Tabs from "./Tabs";

const Dashboard = () => {
  
  const { data, loading, error } = useGetProfile(`${BASE_URL}/doctors/profile/me`)
  
  return <section>
    <div className="max-w-[1170px] px-5 mx-auto">
      {loading && !error && <Loader />}
      {error && !loading && <Error />}

      {

        !loading && !error && <div className="grid lg:grid-cols-3 gap-[30px] lg:gap-[50px]">
          <Tabs />
        </div>
      }
    </div>
  </section>;
};

export default Dashboard;
