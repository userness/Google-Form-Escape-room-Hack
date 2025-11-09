# Escape Room Hack

Do NOT use this for evil, this was just to be a fun coding project.

```
javascript:(function()%7B%2F%2Fdefine%20all%20ascripts%0Aall_scripts%20%3D%20document.querySelectorAll(%22script%22)%3B%0A%2F%2F%20get%20the%20right%20one%0Alet%20final_script%3B%0Alet%20form_json%3B%0A%0Afor%20(const%20script%20of%20all_scripts)%20%7B%0A%20%20if%20(script.innerHTML.includes(%22FB_PUBLIC_LOAD_DATA_%22))%20%7B%0A%20%20%20%20final_script%20%3D%20script.innerHTML%3B%0A%20%20%7D%0A%7D%0A%2F%2Fformat%20the%20data%0Aconst%20regex%20%3D%20%2F%5C%5B%5Cs*%22(%5B%5E%22%5D*)%22%5Cs*%5C%5D%2Fg%3B%0A%0Aform_json%20%3D%20final_script.replaceAll(%22var%20FB_PUBLIC_LOAD_DATA_%20%3D%20%22%2C%20%22%20%22)%3B%0Aform_json%20%3D%20form_json.replaceAll(%22null%22%2C%20%22%20%22)%3B%0Aform_json%20%3D%20form_json.replaceAll(%22%2C%22%2C%20%22%22)%3B%0A%0Alet%20matches%20%3D%20Array.from(form_json.matchAll(regex))%3B%0Alet%20final%20%3D%20matches.map(match%20%3D%3E%20match%5B1%5D)%3B%0A%0Aconst%20encoded%20%3D%20encodeURIComponent(final)%3B%0A%0Awindow.open(%22https%3A%2F%2Flarge-type.com%2F%23%22%20%2B%20encoded)%3B%7D)()%3B
```
