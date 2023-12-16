import HomePageBody from "./modules/Body";
import Footer from "./modules/Footer";
import NavigationBar from "./modules/Navbar";

const Home = () => {
    return (
        <div>
                    <NavigationBar />
                    <HomePageBody />
                    <Footer />
        </div>
      );
}
 
export default Home;