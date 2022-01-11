const fs = require("fs");
const path = require("path");

const getEnv = () => {
  const envs = fs.readFileSync(path.join(__dirname, "../.env.test"), { encoding: "utf-8" });
  const parsedEnvs = envs.trim().split("\n").map((env) => env.trim().split("="));
  parsedEnvs.forEach((env) => {
    process.env[env[0]] = env[1];
  });
};

getEnv()
