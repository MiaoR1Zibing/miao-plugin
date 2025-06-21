import { usefulAttr } from "../../artifact/artis-mark.js"

export default function ({ cons, rule, def }) {
  let particularAttr = { ...usefulAttr['风堇'] }
  if (cons > 3) {
    particularAttr.dmg = 75;
    return rule('风堇-高命', particularAttr);
  }
  if (cons == 6) {
    particularAttr.cdmg = 100;
    particularAttr.dmg = 75;
    return rule(`风堇-满命`, particularAttr)
  }
  return def(usefulAttr['风堇'])
}
