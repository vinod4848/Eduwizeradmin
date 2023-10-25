import axios from "./axios"; // importing axios from customAxios

export function getTestAPI(id, params) {
  return axios.get(`/test/${id}`, { params });
}

export function uploadCVAPI(formData) {
  return axios.post("/uploadResume", formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
}

export function login(body) {
  return axios.post("/eduwizer/login", body);
}

export function getAllUsers() {
  return axios.get("/eduwizer/getUsers");
}
export function getAllContacts() {
  return axios.get("/eduwizer/contact-messages");
}
export function deleteUserById(emailId) {
  return axios.delete(`/eduwizer/deleteUsers/${emailId}`);
}

export function editBlogs(body) {
  return axios.post("/admin/eduwizer/updateBlogs", body);
}

export function getBlogs() {
  return axios.get("/admin/eduwizer/getBlogs");
}

export function addBlogs(data) {
  return axios.post("/admin/eduwizer/addBlogs", data);
}

export function deleteBlogs(body) {
  return axios.post("/admin/eduwizer/removeBlogs", body);
}

export function editPackage(_id, updatedPackageData) {
  return axios.put(`/updatepackage/${_id}`, updatedPackageData);
}

export function getPackage() {
  return axios.get("/packages");
}
export function getPackageById(id) {
  return axios.get(`/package/${id}`);
}
export function getPackageByCounseller() {
  return axios.get("/packages/counsellor");
}
export function getPackageByVendor() {
  return axios.get("/packages/vendor");
}
export function getPackageByCandidate() {
  return axios.get("/packages/candidate");
}
export function getPackageByInstitute() {
  return axios.get("/packages/institute");
}
export function addPackage(data) {
  return axios.post("/createpackage", data);
}

export function deletePackage(_id) {
  return axios.delete(`/deletepackage/${_id}`);
}

export function editEvents(body) {
  return axios.post("/admin/eduwizer/updateEvents", body);
}

export function getEvents() {
  return axios.get("/admin/eduwizer/getEvents");
}

export function addEvents(data) {
  return axios.post("/admin/eduwizer/addEvents", data);
}

export function deleteEvents(body) {
  return axios.post("/admin/eduwizer/removeEvents", body);
}

export function getTeachers() {
  return axios.get("/admin/eduwizer/getTeachers");
}

export function getTeacherById(teacherId) {
  return axios.get(`/admin/eduwizer/getTeachers?teacherId=${teacherId}`);
}

export function deleteTeacher(body) {
  return axios.post("/admin/eduwizer/removeTeachers", body);
}

export function addTeacher(body) {
  return axios.post("/admin/eduwizer/addTeachers", body);
}

export function updateTeacher(body) {
  return axios.post("/admin/eduwizer/updateTeachers", body);
}

// about chancellors

export function getAboutChancellors() {
  return axios.get("/admin/eduwizer/getAboutChancellors");
}

export function getAboutChancellorById(aboutChancellorId) {
  return axios.get(
    `/admin/eduwizer/getAboutChancellors?aboutChancellorId=${aboutChancellorId}`
  );
}

export function deleteAboutChancellor(body) {
  return axios.post("/admin/eduwizer/removeAboutChancellors", body);
}

export function addAboutChancellor(body) {
  return axios.post("/admin/eduwizer/addAboutChancellors", body);
}

export function updateAboutChancellor(body) {
  return axios.post("/admin/eduwizer/updateAboutChancellors", body);
}

// featured lists

export function getFeaturedLists() {
  return axios.get("/admin/eduwizer/getFeaturedLists");
}

export function getFeaturedListById(featuredListId) {
  return axios.get(
    `/admin/eduwizer/getFeaturedLists?featuredListId=${featuredListId}`
  );
}

export function deleteFeaturedList(body) {
  return axios.post("/admin/eduwizer/removeFeaturedLists", body);
}

export function addFeaturedList(body) {
  return axios.post("/admin/eduwizer/addFeaturedLists", body);
}

export function updateFeaturedList(body) {
  return axios.post("/admin/eduwizer/updateFeaturedLists", body);
}

// awards and recognitions

export function getAwardsAndRecognitions() {
  return axios.get("/admin/eduwizer/getAwardsAndRecognitions");
}

export function getAwardsAndRecognitionById(awardsAndRecognitionId) {
  return axios.get(
    `/admin/eduwizer/getAwardsAndRecognitions?awardsAndRecognitionId=${awardsAndRecognitionId}`
  );
}

export function deleteAwardsAndRecognition(body) {
  return axios.post("/admin/eduwizer/removeAwardsAndRecognitions", body);
}

export function addAwardsAndRecognition(body) {
  return axios.post("/admin/eduwizer/addAwardsAndRecognitions", body);
}

export function updateAwardsAndRecognition(body) {
  return axios.post("/admin/eduwizer/updateAwardsAndRecognitions", body);
}

// testimonials

export function getTestimonials() {
  return axios.get("/admin/eduwizer/getTestimonials");
}

export function getTestimonialById(testimonialId) {
  return axios.get(
    `/admin/eduwizer/getTestimonials?testimonialId=${testimonialId}`
  );
}

export function deleteTestimonial(body) {
  return axios.post("/admin/eduwizer/removeTestimonials", body);
}

export function addTestimonial(body) {
  return axios.post("/admin/eduwizer/addTestimonials", body);
}

export function updateTestimonial(body) {
  return axios.post("/admin/eduwizer/updateTestimonials", body);
}
