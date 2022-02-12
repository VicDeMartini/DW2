module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '9205aba29d90704b7504115aabcd11dc'),
  },
});
