import CrmLayout from "layouts/Crm.jsx";
import GeneralLayout from "layouts/General.jsx";
import LoginPage from "layouts/LoginPage.jsx";

var BASEDIR = process.env.REACT_APP_BASEDIR;

var indexRoutes = [
  // { path: BASEDIR+"/login", name: "Login", component: LoginPage },
  { path: BASEDIR + "/register", name: "Register", component: LoginPage },

  // { path: BASEDIR+"/lockscreen", name: "Lockscreen", component: BlankPage },
  // { path: BASEDIR+"/403", name: "403", component: BlankPage },
  // { path: BASEDIR+"/404", name: "404", component: BlankPage },
  // { path: BASEDIR+"/405", name: "405", component: BlankPage },
  // { path: BASEDIR+"/408", name: "408", component: BlankPage },
  // { path: BASEDIR+"/500", name: "500", component: BlankPage },
  // { path: BASEDIR+"/503", name: "503", component: BlankPage },
  // { path: BASEDIR+"/offline", name: "Offline", component: BlankPage },

  // { path: BASEDIR+"/hospital", name: "Hospital Dashboard", component: HospitalLayout },
  // { path: BASEDIR+"/music", name: "Music Dashboard", component: MusicLayout },
  // { path: BASEDIR+"/social", name: "Social Dashboard", component: SocialLayout },
  { path: BASEDIR + "/crm", name: "CRM Dashboard", component: CrmLayout },
  // { path: BASEDIR+"/freelance", name: "Freelance Dashboard", component: FreelanceLayout },
  // { path: BASEDIR+"/university", name: "University Dashboard", component: UniversityLayout },
  // { path: BASEDIR+"/ecommerce", name: "Ecommerce Dashboard", component: EcommerceLayout },
  // { path: BASEDIR+"/blog", name: "Blog Dashboard", component: BlogLayout },

  // { path: BASEDIR+"/defaultlayout", name: "Default Layout", component: DefaultLayout },
  // { path: BASEDIR+"/foldedmenu", name: "Folded Menu", component: FoldedMenu },
  // { path: BASEDIR+"/transparentlayout", name: "Folded Menu", component: TransparentLayout },
  // { path: BASEDIR+"/lightmenu", name: "Light Menu", component: LightMenu },
  // { path: BASEDIR+"/chatopen", name: "Chat Open", component: ChatOpen },
  // { path: BASEDIR+"/layout1", name: "Layout 1", component: Layout1 },
  // { path: BASEDIR+"/layout2", name: "Layout 2", component: Layout2 },
  // { path: BASEDIR+"/layout3", name: "Layout 3", component: Layout3 },
  // { path: BASEDIR+"/layout4", name: "Layout 4", component: Layout4 },
  // { path: BASEDIR+"/layout5", name: "Layout 5", component: Layout5 },
  // { path: BASEDIR+"/layout6", name: "Layout 6", component: Layout6 },
  // { path: BASEDIR+"/layout7", name: "Layout 7", component: Layout7 },
  // { path: BASEDIR+"/layout8", name: "Layout 8", component: Layout8 },
  // { path: BASEDIR+"/layout9", name: "Layout 9", component: Layout9 },
  // { path: BASEDIR+"/layout10", name: "Layout 10", component: Layout10 },
  // { path: BASEDIR+"/layout11", name: "Layout 11", component: Layout11 },
  // { path: BASEDIR+"/layout12", name: "Layout 12", component: Layout12 },
  // { path: BASEDIR+"/layout13", name: "Layout 13", component: Layout13 },
  // { path: BASEDIR+"/layout14", name: "Layout 14", component: Layout14 },
  // { path: BASEDIR+"/layout15", name: "Layout 15", component: Layout15 },

  { path: BASEDIR + "/", name: "Home", component: GeneralLayout },
  { path: "/", name: "Home", component: GeneralLayout },
];

export default indexRoutes;
