/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true
};

module.exports = {
  images: {
    remotePatterns: [
      {
        hostname: 'fakestoreapi.com'
      },
      {
        hostname: 'journie-users-profile-image-bucket.s3.eu-north-1.amazonaws.com'
      }
    ]
  }
};
