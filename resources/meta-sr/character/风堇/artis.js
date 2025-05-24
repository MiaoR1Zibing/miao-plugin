import { usefulAttr } from "../../artifact/artis-mark.js"

export default function ({ cons, rule, def }) {
    if (cons > 3) {
        let particularAttr = JSON.parse(JSON.stringify(usefulAttr['风堇']));
        particularAttr.dmg = 75;
        return rule('风堇-高命', particularAttr);
    }
    return def(usefulAttr['风堇']);
}
