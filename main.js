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

form_json = final_script.replaceAll("var FB_PUBLIC_LOAD_DATA_ = ", " ");
final_script = final_script.replaceAll("null", "");
alert(final_script);
//tobecontinued
