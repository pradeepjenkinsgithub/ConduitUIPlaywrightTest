module.exports = {
  use: {
    headless: true,
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    baseURL: 'https://conduit.mate.academy',
  },
  workers: 2,
  retries: 1,
  reporter: [['list'], ['html']],
};