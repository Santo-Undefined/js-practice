const USER_LIST = ["root", "santo", "admin"]
let USER = USER_LIST[0];
const DIRECTORY = "folder";

const su_ = function (arg) {       // switch user
    if (!USER_LIST.includes(arg)){
      console.log("su: unknown login: ",arg);
    } 
    else {
      USER = arg;
    }
}
const clear = function() {
  console.clear();
}
const cmdError = function(arg) {   // if the command is not found
  console.log("zsh: command not found: ",arg);
}

function findcmdDef(cmd) {
  switch (cmd) {
    case "su-": return su_;
    case "clear": return clear;
    default: return cmdError;
  }
}

function excuteCommand(cmd, args) {
  const cmdDef = findcmdDef(cmd);
  return cmdDef(args);
}

function spiltUsrInput(input){
  const usrCmd = input.trim();
  if(!usrCmd.includes(" ")) {
    return [usrCmd, usrCmd]
  }
  const cmd = usrCmd.slice(0, usrCmd.indexOf(" "))
  const arg = usrCmd.slice(usrCmd.indexOf(" ") + 1)
  return [cmd, arg];
}

function shell(){
  const usrCmd = spiltUsrInput(prompt(`✅ ${USER}@mac ${DIRECTORY} %`));
  excuteCommand(usrCmd[0], usrCmd[1]);
}

function main() {
  while(true) {
    shell();
  }
}

main();
