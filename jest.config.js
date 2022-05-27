module.exports = {
  reporters: [
    "default",
    [
      "testrail-jest-reporter",
      {
        project_id: A_PROJECT_ID_FROM_YOUR_TESTRAIL_PROJECT,
        baseUrl: process.env.TESTRAIL_URL,
        milestone: "A_MILESTONE_FROM_YOUR_TESTRAIL_PROJECT",
        suite_mode: "1/2/3",
        statuses: { pending: 7 },
      },
    ],
  ],
};
