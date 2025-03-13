
import { versions as _versions } from 'process';

let no_versions = 0;


const versions = _versions;

for (let key in versions) {
    console.log(key + ":" + versions[key]);
    no_versions++;
}

console.log("Total no of values available = " + no_versions);
