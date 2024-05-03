const PROFILE_PATH = "/profile";
const CONTACT_PATH = "/contact/*"; // không nên sử dụng kiểu này code tiện nhưng sau này link sẽ rất khó quản lý
export const PATH = {
  home: "/",
  register: "/register",
  contact: {
    layout: CONTACT_PATH,
    index: "/",
    controlForm: "/component",
  },
  course: "/course",
  team: "/team",
  payment: "/payment",
  coin: "/coin",
  project: "/project",
  faq: "/faq",
  course: "/course",
  signin: "/signin",
  signup: "/signup",
  resetPassword: "/reset-password",

  profile: {
    index: PROFILE_PATH,
    course: PROFILE_PATH + "/course",
    project: PROFILE_PATH + "/project",
    payment: PROFILE_PATH + "/payment",
    coin: PROFILE_PATH + "/coin",
    history: PROFILE_PATH + "/history",
  },
};
