import fetch from "isomorphic-fetch";

const environments = {
  "dev-o": [
    "https://www.regions.com/RDCResources/Content/com-regions-dotcom.min.css",
    "https://www.regions.com/RDCResources/Content/com-regions-dotcom-print.min.css",
    "https://www.regions.com/RDCResources/Scripts/com-regions-dotcom-application.min.js",
    "https://www.regions.com/RDCResources/Scripts/com-regions-dotcom-libs.min.js"
  ],
  "dev-a": ["app.min.css", "print.min.css", "app.min.js", "libs.min.js"],
  "dev-qa": ["app.min.css", "print.min.css", "app.min.js", "libs.min.js"],
  "prod-a": ["app.min.css", "print.min.css", "app.min.js", "libs.min.js"],
  "prod-b": ["app.min.css", "print.min.css", "app.min.js", "libs.min.js"]
};

function fetchFile() {}
function checkVer() {}

function getReleases(env) {
  return Promise.all(
    environments[env].map(url => {
      console.log(url);
      fetch(url).then(resp => resp.text());
    })
  ).then(texts => {
    texts;
  });
  // pass files to parser to check version
}

const results = getReleases("dev-o");
return results;
