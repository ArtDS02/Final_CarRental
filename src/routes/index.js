import Home from '../component/pages/Home';
import ListCar from '../component/pages/ListCar/listCar';
import LuxuryCar from '../component/pages/ListCar/luxuryCar';
import SportCar from '../component/pages/ListCar/sportCar';
import CarDetail from '../component/pages/CarDetail/carDetail';
import DefaultLayout from "../component/Layout/DefaultLayout";
import AboutUs from "../component/pages/AboutUs/aboutUs";
import UserInfor from "../component/pages/Information/userInfor";
import Login from "../component/pages/Login/index2";
import SignUp from "../component/pages/SignUp/signUp";
import Recharge from "../component/pages/Recharge/recharge";
import RentBill from "../component/pages/RentBill/rentBill"
import OrderList from "../component/pages/OrderList/orderList";
import RechargeList from "../component/pages/Recharge/rechargeList";
import OrderListAfter from "../component/pages/OrderList/orderList2";
import AdminLayout from "../component/Layout/Admin";
import AdminHome from "../component/pages/Admin/index";
import AdminRequest from "../component/pages/Admin/request";
import AdminProduct from "../component/pages/Admin/product";
import AdminUser from "../component/pages/Admin/user";
import AdminRental from "../component/pages/Admin/rental";




// import SignUp from '~/component/pages/authen';
// import Profile from '~/component/pages/Profile';
// import Cart from '~/component/pages/Cart';
// import Product from '~/component/pages/Product';

const publicRoutes = [
    { path: '/admin', component: AdminHome, layout: AdminLayout},
    { path: '/adminUser', component: AdminUser, layout: AdminLayout},
    { path: '/rentalRequest', component: AdminRental, layout: AdminLayout},
    { path: '/product', component: AdminProduct, layout: AdminLayout},
    { path: '/request', component: AdminRequest, layout: AdminLayout},
    { path: '/', component: Home, layout: DefaultLayout},
    { path: '/userInfor', component: UserInfor, layout: DefaultLayout},
    { path: '/listcar', component: ListCar, layout: DefaultLayout},
    { path: '/luxury', component: LuxuryCar, layout: DefaultLayout},
    { path: '/sport', component: SportCar, layout: DefaultLayout},
    { path: '/recharge', component: Recharge, layout: DefaultLayout},
    { path: '/carDetail', component: CarDetail, layout: DefaultLayout},
    { path: '/rentBill', component: RentBill, layout: DefaultLayout},
    { path: '/orderList', component: OrderList, layout: DefaultLayout},
    { path: '/orderList1', component: OrderListAfter, layout: DefaultLayout},
    { path: '/rechargeList', component: RechargeList, layout: DefaultLayout},
    { path: '/aboutus', component: AboutUs, layout: DefaultLayout},
    { path: '/login', component: Login, layout: null},
    { path: '/signup', component: SignUp, layout: null},

    // { path: '/cart', component: Cart, layout: DefaultLayout},
    // { path: '/signup', component: SignUp, layout: DefaultLayout},
    // { path: '/profile', component: Profile, layout: null},
    // { path: '/product', component: Product, layout: DefaultLayout},


]

const privateRoutes = {

}

export {publicRoutes, privateRoutes}