//define all ascripts
all_scripts = document.querySelectorAll("script");
// get the right one
let final_script;
let form_json;

for (const script of all_scripts) {
  if (script.innerHTML.includes("FB_PUBLIC_LOAD_DATA_")) {
    final_script = script.innerHTML;
  }
}
//format the data
const regex = /\[\s*"([^"]*)"\s*\]/g;

form_json = final_script.replaceAll("var FB_PUBLIC_LOAD_DATA_ = ", " ");
form_json = form_json.replaceAll("null", " ");
form_json = form_json.replaceAll(",", "");

let matches = Array.from(form_json.matchAll(regex));
let final = matches.map(match => match[1]);

const encoded = encodeURIComponent(final);

window.open("https://large-type.com/#" + encoded);
