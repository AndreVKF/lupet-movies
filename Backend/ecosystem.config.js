module.exports = {
  apps: [
    {
      name: "movies_database",
      script: "./src/index.js",
      instances: "max",
      env: {
        NODE_ENV: "development",
      },
      env_production: {
        NODE_ENV: "production",
      },
    },
  ],
}
