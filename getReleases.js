const environments = {
  "dev-o": ["app.min.css", "print.min.css", "app.min.js", "libs.min.js"],
  "dev-a": ["app.min.css", "print.min.css", "app.min.js", "libs.min.js"],
  "dev-qa": ["app.min.css", "print.min.css", "app.min.js", "libs.min.js"],
  "prod-a": ["app.min.css", "print.min.css", "app.min.js", "libs.min.js"],
  "prod-b": ["app.min.css", "print.min.css", "app.min.js", "libs.min.js"]
};

function fetchFile() {}
function checkVer() {}

function getReleases(env) {
  // get environments and loop
  environments[env].forEach(file => {
    console.log(env, file);
    return;
  });
  // pass files to parser to check version

  // return Promises.all();
}

const results = getReleases("dev-o");
return results;
