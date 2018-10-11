module.exports = (gitArgs = [], cmds = []) => {
  if (!gitArgs.length || gitArgs[0] === "(delete)") return;

  const { execSync } = require("child_process");
  const cmd = cmds.join(" ");

  execSync(cmd, {
    stdio: ["inherit", "inherit", "inherit"]
  });
};
