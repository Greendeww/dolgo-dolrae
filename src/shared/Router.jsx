import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../pages/user/Login";
import KakaoLogin from "../pages/user/KakaoLogin";
import SignUp from "../pages/user/SignUp";
import Select from "../pages/tourist/Select";
import List from "../pages/tourist/List";
import Detail from "../pages/tourist/Detail";
import DetailRevise from "../componenets/details/DetailRevise";
import DetailForm from "../componenets/details/DetailForm";
import Main from "../pages/tourist/Main";
import Random from "../pages/tourist/Random";
import RndLocation from "../componenets/random/RndLocation";
import RandomSelect from "../componenets/random/RandomSelect";
import RandomList from "../componenets/random/RandomList";
import MyPage from "../pages/mypage/MyPage";
import MyPageChange from "../pages/mypage/MyPageChange";
import AmendmentRequest from "../pages/request/AmendmentRequest";
import RegistrationRequest from "../pages/request/RegistrationRequest";
import Administrator from "../pages/manager/Administrator";
import RequestEdit from "../pages/manager/RequestPost";
import RequestDetail from "../pages/manager/RequestDetail";
import RequestPost from "../pages/manager/RequestEdit";
import SearchPage from "../pages/tourist/SearchPage";
import Maps from "../componenets/maps/Maps";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/mypage/change" element={<MyPageChange />} />
        <Route path="/AmendmentRequest" element={<AmendmentRequest />} />
        <Route path="/RegistrationRequest" element={<RegistrationRequest />} />
        <Route path="/administrator" element={<Administrator />} />
        <Route path="/request/detail" element={<RequestDetail />} />
        <Route path="/request/edit" element={<RequestEdit />} />
        <Route path="/request/post" element={<RequestPost />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/oauth/callback/kakao" element={<KakaoLogin />} />
        <Route path="/select" element={<Select />} />
        <Route path="/list" element={<List />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/detail/update/:placeId/:id" element={<DetailRevise />} />
        <Route path="/detail/form/:id" element={<DetailForm />} />
        <Route path="/random" element={<Random />} />
        <Route path="/rndlocation" element={<RndLocation />} />
        <Route path="/rndselect/:si/:area" element={<RandomSelect />} />
        <Route path="/rnd" element={<RandomList />} />
        <Route path="/search/:title" element={<SearchPage />} />
        <Route path="/maps" element={<Maps />} />
      </Routes>
    </BrowserRouter>
  );

}

export default Router;
