import React from "react";
import { Route, Routes } from "react-router-dom";
import Course from "./pages/course";
import ErrorPage from "./pages/404";
import Home from "./pages/home";
import Team from "./pages/team";
import Project from "./pages/project";
import Faq from "./pages/faq";
import Payment from "./pages/payment";
import Coin from "./pages/coin";
import SignIn from "./pages/signin";
import SignUp from "./pages/signup";
import ResetPassword from "./pages/reset-password";
import Profile from "./pages/profile";
import MyCourse from "./pages/profile/course";
import ProfileLayout from "./layouts/ProfileLayout";
import MyProject from "./pages/profile/project";
import CoinHistory from "./pages/profile/history";
import MyCoin from "./pages/profile/coin";
import MyPayment from "./pages/profile/payment";
import MainLayout from "./layouts/MainLayout";
import { Contact, ContactComponent, ControlForm } from "./pages/input-form";
import { PATH } from "./config/path";

export default function App() {
  return (
    <div>
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path={PATH.register} element={<ControlForm />} />
          <Route path={PATH.contact.layout} element={<InputFormLayout />} />

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

export const InputFormLayout = () => {
  return (
    <Routes>
      <Route path={PATH.contact.index} element={<Contact />} />
      <Route path={PATH.contact.controlForm} element={<ContactComponent />} />
    </Routes>
  );
};
