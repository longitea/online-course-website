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

export default function App() {
  return (
    <div>
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="/register" element={<ControlForm />} />
          <Route path="/contact/*" element={<InputFormLayout />} />

          <Route path="/course" element={<Course />} />
          <Route path="/team" element={<Team />} />
          <Route path="/project" element={<Project />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/coin" element={<Coin />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/reset-password" element={<ResetPassword />} />

          <Route path="/profile" element={<ProfileLayout />}>
            <Route index element={<Profile />} />
            <Route path="/profile/course" element={<MyCourse />} />
            <Route path="/profile/project" element={<MyProject />} />
            <Route path="/profile/payment" element={<MyPayment />} />
            <Route path="/profile/coin" element={<MyCoin />} />
            <Route path="/profile/history" element={<CoinHistory />} />
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
      <Route path="/" element={<Contact />} />
      <Route path="component" element={<ContactComponent />} />
    </Routes>
  );
};
