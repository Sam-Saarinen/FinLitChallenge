const { exec } = require("child_process");

// Have to use Windows move command instead of mv""
exec("rmdir docs;", (error, stdout, stderr) => {
    if (error) {
        console.log(`error: ${error.message}`);
        return;
    }
    if (stderr) {
        console.log(`stderr: ${stderr}`);
        return;
    }
    console.log(`stdout: ${stdout}`);
});

// Have to use Windows move command instead of mv""
exec("move build docs;", (error, stdout, stderr) => {
    if (error) {
        console.log(`error: ${error.message}`);
        return;
    }
    if (stderr) {
        console.log(`stderr: ${stderr}`);
        return;
    }
    console.log(`stdout: ${stdout}`);
});

module.exports = ()=>{}; //Seems necessary to make a weird module error go away.