import { Outlet, useLocation, useNavigation } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import { ClipLoader } from "react-spinners";
const Home = () => {
  const navigation = useNavigation();
  const location=useLocation()
  console.log(location)
  return (
    <div>
      <Header></Header>
      {navigation.state === "loading" ? 
        <div>
          <ClipLoader
            color={"#FAD59A"}
            loading={true}
            size={75}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      : 
        <Outlet></Outlet>
      }

      <Footer></Footer>
    </div>
  );
};

export default Home;
