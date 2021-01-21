module.exports = {
  async rewrites() {
    return [
      {
        source: "/:path",
        destination: "http://localhost:5000/:path",
      },
    ];
  },
  images: {
    domains: ["picsum.photos", "i.picsum.photos"],
  },
};
