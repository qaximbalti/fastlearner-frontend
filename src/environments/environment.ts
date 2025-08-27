export const environment = {
  production: true,
  isProductionServer: false,

  basePath: `https://staging.fastlearner.ai//`,
  loginUrl: `https://staging.fastlearner.ai/:8443/auth`,
  baseUrl: `https://staging.fastlearner.ai/:8443/api/v1/`,
  videoUrl: `https://staging.fastlearner.ai/:8443`,
  imageUrl: `https://staging.fastlearner.ai/:8443`,
  applicationCourseContentUrl: `https://staging.fastlearner.ai//student/course-content/`,
  applicationCourseDetailsUrl: `https://staging.fastlearner.ai//student/course-details/`,

  // Goolge Login Credentials
  googleClientId: '{{google-client-id}}',
  googleSecretKey: '{{google-secret-key}}',
};
