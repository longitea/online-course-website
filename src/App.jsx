import React from "react";
import { Route, Routes } from "react-router-dom";
import { PATH } from "./config/path";
import MainLayout from "./layouts/MainLayout";
import ProfileLayout from "./layouts/ProfileLayout";
import ErrorPage from "./pages/404";
import Coin from "./pages/coin";
import Course from "./pages/course";
import Faq from "./pages/faq";
import Home from "./pages/home";
import { ControlForm } from "./pages/input-form";
import Payment from "./pages/payment";
import Profile from "./pages/profile";
import MyCoin from "./pages/profile/coin";
import MyCourse from "./pages/profile/course";
import CoinHistory from "./pages/profile/history";
import MyPayment from "./pages/profile/payment";
import MyProject from "./pages/profile/project";
import Project from "./pages/project";
import ResetPassword from "./pages/reset-password";
import SignIn from "./pages/signin";
import SignUp from "./pages/signup";
import Team from "./pages/team";

export default function App() {
  return (
    <div>
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path={PATH.register} element={<ControlForm />} />

          <Route path={PATH.course} element={<Course />} />
          <Route path={PATH.team} element={<Team />} />
          <Route path={PATH.project} element={<Project />} />
          <Route path={PATH.faq} element={<Faq />} />
          <Route path={PATH.payment} element={<Payment />} />
          <Route path={PATH.coin} element={<Coin />} />
          <Route path={PATH.signin} element={<SignIn />} />
          <Route path={PATH.signup} element={<SignUp />} />
          <Route path={PATH.resetPassword} element={<ResetPassword />} />

          <Route path={PATH.profile.index} element={<ProfileLayout />}>
            <Route index element={<Profile />} />
            <Route path={PATH.profile.course} element={<MyCourse />} />
            <Route path={PATH.profile.project} element={<MyProject />} />
            <Route path={PATH.profile.payment} element={<MyPayment />} />
            <Route path={PATH.profile.coin} element={<MyCoin />} />
            <Route path={PATH.profile.history} element={<CoinHistory />} />
          </Route>

          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </div>
  );
}
