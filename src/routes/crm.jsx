import UsersListings from "views/crm/Ed-Dashboard/UsersListings.jsx";
import AboutChancellorsListings from "views/crm/Ed-Dashboard/AboutChancellorsListings.jsx";
import AboutTeachersListings from "views/crm/Ed-Dashboard/AboutTeachersListings.jsx";
import AwardsAndRecognitionsListings from "views/crm/Ed-Dashboard/AwardsAndRecognitionsListings.jsx";
import FeaturedListings from "views/crm/Ed-Dashboard/FeaturedListings.jsx";
import TestimonialsListings from "views/crm/Ed-Dashboard/TestimonialsListings.jsx";
// import Customer from 'views/crm/Dashboard/Customer.jsx';
import AddEditAboutChancellorsListings from "views/crm/Ed-Dashboard/AddEditAboutChancellorsListings.jsx";
import AddEditAboutTeacherListings from "views/crm/Ed-Dashboard/AddEditAboutTeachersListings.jsx";
import AddEditAwardsAndRecognitionsListings from "views/crm/Ed-Dashboard/AddEditAwardsAndRecognitionsListings.jsx";
import AddEditFeaturedListings from "views/crm/Ed-Dashboard/AddEditFeaturedListings.jsx";
import AddEditTestimonialsListings from "views/crm/Ed-Dashboard/AddEditTestimonialsListings.jsx";

// import AddEvent from "views/crm/Events/AddEvent.jsx";

import AddBlog from "../views/blog/Blog/AddBlog.jsx";
import Blogs from "../views/blog/Blog/Blogs.jsx";
import EditBlog from "../views/blog/Blog/EditBlog.jsx";
import AddEvent from "../views/blog/Events/AddEvent.jsx";
import EditEvent from "../views/blog/Events/EditEvent.jsx";
import Events from "../views/blog/Events/Events.jsx";
import ContactInfoListings from "../views/crm/Ed-Dashboard/ContactInfoListings.jsx";
import UpdatePackage from "../views/crm/Packages/UpdatePackage.js";
import CounsellerPackageList from "../views/crm/Packages/Counseller.js";
import VendorPackageList from "../views/crm/Packages/Vendor.js";
import CandidatePackageList from "../views/crm/Packages/Candidate.js";
import InstitutePackageList from "../views/crm/Packages/Recruiter.js";

var BASEDIR = process.env.REACT_APP_BASEDIR;

var dashRoutes = [
  //{ path: "#", name: "Main", type: "navgroup"},
  // {
  //   path: BASEDIR + "/crm/dashboard",
  //   name: "Dashboard",
  //   icon: "speedometer",
  //   badge: "",
  //   component: Crm,
  // },

  // {
  //   path: "#",
  //   name: "Customers",
  //   icon: "people",
  //   type: "dropdown",
  //   parentid: "customers",
  //   child: [
  //     { path: BASEDIR + "/crm/customers", name: "Customers" },
  //     { path: BASEDIR + "/crm/add-customer", name: "Add Customer" },
  //     { path: BASEDIR + "/crm/edit-customer", name: "Edit Customer" },
  //   ],
  // },
  // { path: BASEDIR + "/crm/customers", component: Customer, type: "child" },
  // {
  //   path: BASEDIR + "/crm/add-customer",
  //   component: AddCustomer,
  //   type: "child",
  // },
  // {
  //   path: BASEDIR + "/crm/edit-customer",
  //   component: EditCustomer,
  //   type: "child",
  // },

  // Users
  {
    path: "#",
    name: "Eduwizer Users",
    icon: "note",
    type: "dropdown",
    parentid: "users",
    child: [
      {
        path: BASEDIR + "/crm/users/list",
        name: "Users listing",
      },
      {
        path: BASEDIR + "/crm/users/contactlist",
        name: "Contact Info Listings",
      },
      
    ],
  },
  {
    path: "#",
    name: "Eduwizer Packages",
    icon: "note",
    type: "dropdown",
    parentid: "package",
    child: [
      {
        path: BASEDIR + "/crm/packages/counseller",
        name: "Counseller Package",
      },{
        path: BASEDIR + "/crm/packages/vendor",
        name: "Vendor Package",
      },{
        path: BASEDIR + "/crm/packages/candidate",
        name: "Candidate Package",
      },{
        path: BASEDIR + "/crm/packages/recruiter",
        name: "Recruiter Package",
      },      
    ],
  },
  {
    path: BASEDIR + "/crm/packages/counseller",
    component: CounsellerPackageList,
    type: "child",
  },
  {
    path: BASEDIR + "/crm/packages/vendor",
    component: VendorPackageList,
    type: "child",
  },
  {
    path: BASEDIR + "/crm/packages/candidate",
    component: CandidatePackageList,
    type: "child",
  },
  {
    path: BASEDIR + "/crm/packages/recruiter",
    component: InstitutePackageList,
    type: "child",
  },
  {
    path: BASEDIR + "/crm/packages/edit-package/:id",
    component: UpdatePackage,
    type: "child",
  },
  {
    path: BASEDIR + "/crm/users/list",
    component: UsersListings,
    type: "child",
  },
  {
    path: BASEDIR + "/crm/users/list",
    component: UsersListings,
    type: "child",
  },
  {
    path: BASEDIR + "/crm/users/list",
    component: UsersListings,
    type: "child",
  },
  {
    path: BASEDIR + "/crm/users/list",
    component: UsersListings,
    type: "child",
  },
  {
    path: BASEDIR + "/crm/users/contactlist",
    component: ContactInfoListings,
    type: "child",
  },

  {
    path: "#",
    name: "Eduwizer Blogs & Events",
    icon: "note",
    type: "dropdown",
    parentid: "blogs",
    child: [
      { path: BASEDIR + "/crm/blogs/list", name: "Blogs listing" },
      { path: BASEDIR + "/crm/events/list", name: "Events listing" },
      // { path: BASEDIR+"/crm/blogs/add", name: "Add a new blog"},
      // { path: BASEDIR+"/crm/blog/edit", name: "Edit a blog"}
    ],
  },

  { path: BASEDIR + "/crm/blogs/list", component: Blogs, type: "child" },
  { path: BASEDIR + "/crm/blogs/add", component: AddBlog, type: "child" },
  { path: BASEDIR + "/crm/blogs/edit", component: EditBlog, type: "child" },
  { path: BASEDIR + "/crm/events/list", component: Events, type: "child" },
  { path: BASEDIR + "/crm/events/add", component: AddEvent, type: "child" },
  {
    path: BASEDIR + "/crm/events/edit",
    component: EditEvent,
    type: "child",
  },

  //

  {
    path: "#",
    name: "Eduwizer Dashboard",
    icon: "note",
    type: "dropdown",
    parentid: "featured-listings",
    child: [
      {
        path: BASEDIR + "/crm/featured-listings/list",
        name: "Featured listing",
      },
      {
        path: BASEDIR + "/crm/about-teachers/list",
        name: "About Teachers / Lecturers / Administrators Listing",
      },
      {
        path: BASEDIR + "/crm/about-chancellors/list",
        name: "About Chancellors Listing",
      },
      {
        path: BASEDIR + "/crm/awards-and-recognitions/list",
        name: "Awards And Recognitions Listing",
      },
      {
        path: BASEDIR + "/crm/testimonials/list",
        name: "Testimonials",
      },
      // { path: BASEDIR+"/crm/blogs/add", name: "Add a new blog"},
      // { path: BASEDIR+"/crm/blog/edit", name: "Edit a blog"}
    ],
  },

  {
    path: BASEDIR + "/crm/featured-listings/list",
    component: FeaturedListings,
    type: "child",
  },
  {
    path: BASEDIR + "/crm/featured-listings/add",
    component: AddEditFeaturedListings,
    type: "child",
  },
  {
    path: BASEDIR + "/crm/featured-listings/edit/:id",
    component: AddEditFeaturedListings,
    type: "child",
  },

  {
    path: BASEDIR + "/crm/about-teachers/list",
    component: AboutTeachersListings,
    type: "child",
  },
  {
    path: BASEDIR + "/crm/about-teachers/add",
    component: AddEditAboutTeacherListings,
    type: "child",
  },
  {
    path: BASEDIR + "/crm/about-teachers/edit/:id",
    component: AddEditAboutTeacherListings,
    type: "child",
  },

  {
    path: BASEDIR + "/crm/about-chancellors/list",
    component: AboutChancellorsListings,
    type: "child",
  },
  {
    path: BASEDIR + "/crm/about-chancellors/add",
    component: AddEditAboutChancellorsListings,
    type: "child",
  },
  {
    path: BASEDIR + "/crm/about-chancellors/edit/:id",
    component: AddEditAboutChancellorsListings,
    type: "child",
  },

  {
    path: BASEDIR + "/crm/awards-and-recognitions/list",
    component: AwardsAndRecognitionsListings,
    type: "child",
  },
  {
    path: BASEDIR + "/crm/awards-and-recognitions/add",
    component: AddEditAwardsAndRecognitionsListings,
    type: "child",
  },
  {
    path: BASEDIR + "/crm/awards-and-recognitions/edit/:id",
    component: AddEditAwardsAndRecognitionsListings,
    type: "child",
  },

  {
    path: BASEDIR + "/crm/testimonials/list",
    component: TestimonialsListings,
    type: "child",
  },
  {
    path: BASEDIR + "/crm/testimonials/add",
    component: AddEditTestimonialsListings,
    type: "child",
  },
  {
    path: BASEDIR + "/crm/testimonials/edit/:id",
    component: AddEditTestimonialsListings,
    type: "child",
  },

  // {
  //   path: "#",
  //   name: "Leads",
  //   icon: "eyeglass",
  //   type: "dropdown",
  //   parentid: "leads",
  //   child: [
  //     { path: BASEDIR + "/crm/leads", name: "Leads" },
  //     { path: BASEDIR + "/crm/add-lead", name: "Add Lead" },
  //     { path: BASEDIR + "/crm/edit-lead", name: "Edit Lead" },
  //   ],
  // },
  // { path: BASEDIR + "/crm/leads", component: Lead, type: "child" },
  // { path: BASEDIR + "/crm/add-lead", component: AddLead, type: "child" },
  // { path: BASEDIR + "/crm/edit-lead", component: EditLead, type: "child" },

  // {
  //   path: "#",
  //   name: "Vendors",
  //   icon: "user",
  //   type: "dropdown",
  //   parentid: "vendors",
  //   child: [
  //     { path: BASEDIR + "/crm/vendors", name: "Vendors" },
  //     { path: BASEDIR + "/crm/add-vendor", name: "Add Vendor" },
  //     { path: BASEDIR + "/crm/edit-vendor", name: "Edit Vendor" },
  //   ],
  // },
  // { path: BASEDIR + "/crm/vendors", component: Vendor, type: "child" },
  // { path: BASEDIR + "/crm/add-vendor", component: AddVendor, type: "child" },
  // { path: BASEDIR + "/crm/edit-vendor", component: EditVendor, type: "child" },

  // {
  //   path: "#",
  //   name: "Reports",
  //   icon: "chart",
  //   type: "dropdown",
  //   parentid: "reports",
  //   child: [
  //     { path: BASEDIR + "/crm/reports-sales", name: "Sales" },
  //     { path: BASEDIR + "/crm/reports-customers", name: "Customers" },
  //     { path: BASEDIR + "/crm/reports-targets", name: "Targets" },
  //     { path: BASEDIR + "/crm/reports-vendors", name: "Vendors" },
  //   ],
  // },
  // {
  //   path: BASEDIR + "/crm/reports-sales",
  //   component: CrmReportsSales,
  //   type: "child",
  // },
  // {
  //   path: BASEDIR + "/crm/reports-customers",
  //   component: CrmReportsCustomers,
  //   type: "child",
  // },
  // {
  //   path: BASEDIR + "/crm/reports-targets",
  //   component: CrmReportsTargets,
  //   type: "child",
  // },
  // {
  //   path: BASEDIR + "/crm/reports-vendors",
  //   component: CrmReportsVendors,
  //   type: "child",
  // },

  // {
  //   path: "#",
  //   name: "Quotes",
  //   icon: "note",
  //   type: "dropdown",
  //   parentid: "quotes",
  //   child: [
  //     { path: BASEDIR + "/crm/quotes", name: "Quotes" },
  //     { path: BASEDIR + "/crm/add-quote", name: "Add Quote" },
  //     { path: BASEDIR + "/crm/edit-quote", name: "Edit Quote" },
  //   ],
  // },
  // { path: BASEDIR + "/crm/quotes", component: Quote, type: "child" },
  // { path: BASEDIR + "/crm/add-quote", component: AddQuote, type: "child" },
  // { path: BASEDIR + "/crm/edit-quote", component: EditQuote, type: "child" },

  // {
  //   path: "#",
  //   name: "Invoices",
  //   icon: "wallet",
  //   type: "dropdown",
  //   parentid: "invoices",
  //   child: [
  //     { path: BASEDIR + "/crm/invoices", name: "Invoices" },
  //     { path: BASEDIR + "/crm/add-invoice", name: "Add Invoice" },
  //     { path: BASEDIR + "/crm/edit-invoice", name: "Edit Invoice" },
  //   ],
  // },
  // { path: BASEDIR + "/crm/invoices", component: Invoice, type: "child" },
  // { path: BASEDIR + "/crm/add-invoice", component: AddInvoice, type: "child" },
  // {
  //   path: BASEDIR + "/crm/edit-invoice",
  //   component: EditInvoice,
  //   type: "child",
  // },

  // {
  //   path: "#",
  //   name: "Tickets",
  //   icon: "question",
  //   type: "dropdown",
  //   parentid: "tickets",
  //   child: [
  //     { path: BASEDIR + "/crm/tickets", name: "Tickets" },
  //     { path: BASEDIR + "/crm/add-ticket", name: "Add Ticket" },
  //     { path: BASEDIR + "/crm/edit-ticket", name: "Edit Ticket" },
  //   ],
  // },
  // { path: BASEDIR + "/crm/tickets", component: Ticket, type: "child" },
  // { path: BASEDIR + "/crm/add-ticket", component: AddTicket, type: "child" },
  // { path: BASEDIR + "/crm/edit-ticket", component: EditTicket, type: "child" },

  // {
  //   path: "#",
  //   name: "Contacts",
  //   icon: "phone",
  //   type: "dropdown",
  //   parentid: "contacts",
  //   child: [
  //     { path: BASEDIR + "/crm/contacts", name: "Contacts" },
  //     { path: BASEDIR + "/crm/add-contact", name: "Add Contact" },
  //     { path: BASEDIR + "/crm/edit-contact", name: "Edit Contact" },
  //   ],
  // },
  // { path: BASEDIR + "/crm/contacts", component: Contact, type: "child" },
  // { path: BASEDIR + "/crm/add-contact", component: AddContact, type: "child" },
  // {
  //   path: BASEDIR + "/crm/edit-contact",
  //   component: EditContact,
  //   type: "child",
  // },

  // {
  //   path: "#",
  //   name: "Users",
  //   icon: "user-female",
  //   type: "dropdown",
  //   parentid: "users",
  //   child: [
  //     { path: BASEDIR + "/crm/users", name: "Users" },
  //     { path: BASEDIR + "/crm/add-user", name: "Add User" },
  //     { path: BASEDIR + "/crm/edit-user", name: "Edit User" },
  //   ],
  // },
  // { path: BASEDIR + "/crm/users", component: User, type: "child" },
  // { path: BASEDIR + "/crm/add-user", component: AddUser, type: "child" },
  // { path: BASEDIR + "/crm/edit-user", component: EditUser, type: "child" },

  // {
  //   path: "#",
  //   name: "Events",
  //   icon: "event",
  //   type: "dropdown",
  //   parentid: "events",
  //   child: [
  //     { path: BASEDIR + "/crm/events", name: "Events" },
  //     { path: BASEDIR + "/crm/addevent", name: "Add Event" },
  //   ],
  // },
  // { path: BASEDIR + "/crm/events", component: CrmEvents, type: "child" },
  // { path: BASEDIR + "/crm/addevent", component: AddEvent, type: "child" },

  // {
  //   path: "#",
  //   name: "Mail Box",
  //   icon: "envelope",
  //   type: "dropdown",
  //   parentid: "mailbox",
  //   child: [
  //     { path: BASEDIR + "/crm/mail-inbox", name: "Inbox" },
  //     { path: BASEDIR + "/crm/mail-compose", name: "Compose" },
  //     { path: BASEDIR + "/crm/mail-view", name: "View" },
  //   ],
  // },
  // { path: BASEDIR + "/crm/mail-inbox", component: CrmMailinbox, type: "child" },
  // {
  //   path: BASEDIR + "/crm/mail-compose",
  //   component: CrmMailcompose,
  //   type: "child",
  // },
  // { path: BASEDIR + "/crm/mail-view", component: CrmMailview, type: "child" },

  // {
  //   path: "#",
  //   name: "Multi Purpose",
  //   icon: "layers",
  //   type: "dropdown",
  //   parentid: "multipurpose",
  //   child: [
  //     { path: BASEDIR + "/dashboard", name: "General" },
  //     { path: BASEDIR + "/hospital/dashboard", name: "Hospital" },
  //     { path: BASEDIR + "/music/dashboard", name: "Music" },
  //     { path: BASEDIR + "/crm/dashboard", name: "CRM" },
  //     { path: BASEDIR + "/social/dashboard", name: "Social Media" },
  //     { path: BASEDIR + "/freelance/dashboard", name: "Freelance" },
  //     { path: BASEDIR + "/university/dashboard", name: "University" },
  //     { path: BASEDIR + "/ecommerce/dashboard", name: "Ecommerce" },
  //     { path: BASEDIR + "/blog/dashboard", name: "Blog" },
  //   ],
  // },

  // { path: BASEDIR + "/dashboard", component: General, type: "child" },
  // { path: BASEDIR + "/hospital/dashboard", component: Hospital, type: "child" },
  // { path: BASEDIR + "/music/dashboard", component: Music, type: "child" },
  // { path: BASEDIR + "/crm/dashboard", component: Crm, type: "child" },
  // { path: BASEDIR + "/social/dashboard", component: Social, type: "child" },
  // {
  //   path: BASEDIR + "/freelance/dashboard",
  //   component: Freelance,
  //   type: "child",
  // },
  // {
  //   path: BASEDIR + "/university/dashboard",
  //   component: University,
  //   type: "child",
  // },
  // {
  //   path: BASEDIR + "/ecommerce/dashboard",
  //   component: Ecommerce,
  //   type: "child",
  // },
  // { path: BASEDIR + "/blog/dashboard", component: Blog, type: "child" },

  //{ redirect: true, path: BASEDIR+"/", pathTo: "/dashboard", name: "Dashboard" }
];
export default dashRoutes;
