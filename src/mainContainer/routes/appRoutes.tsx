import TradePage from "../screens/home"
import MarketPage from "../screens/trade"
import Contact from "../screens/contact"
import BitDetails from "../screens/bitDetails";


export enum AppRoutes {
    Home = "/",
    ABOUT = "/About",
    CONTACT = "/Contact",
    BITDETAILS = "/Home/bitDetails",
}

export const PublicRoutes = [
    {
      path: AppRoutes.Home,
      component: <MarketPage/>,
    },
    {
      path: AppRoutes.ABOUT,
      component: <TradePage/>,
    },
    {
      path: AppRoutes.CONTACT,
      component: <Contact/>,
    },
    {
      path: AppRoutes.BITDETAILS,
      component: <BitDetails/>,
    },
  ];