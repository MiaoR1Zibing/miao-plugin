export const details = [{
  title: '普攻伤害',
  dmg: ({ talent, calc, attr }, { basic }) => basic(calc(attr.hp) * talent.a['技能伤害'], 'a')
}, {
  title: '天赋追加攻击伤害',
  dmg: ({ talent, calc, attr }, { basic }) => basic(calc(attr.hp) * talent.t['追加攻击伤害'], 't')
}, {
  title: '终结技伤害',
  dmg: ({ talent, calc, attr }, { basic }) => basic(calc(attr.hp) * talent.q['技能伤害'], 'q')
}, {
  title: '单次结界附加伤害',
  dmg: ({ talent, cons, calc, attr }, { basic }) => {
    let num = cons > 1 ? 1.2 : 1
    return basic(calc(attr.hp) * talent.q['附加伤害'] * num, 'q')
  }
}, {
  title: '`起飞!`对5总伤',
  dmg: ({ talent, cons, calc, attr }, { basic }) => {
    let addiAttack = basic(calc(attr.hp) * talent.t['追加攻击伤害'], 't')
    let _ratio = cons > 1 ? 1.2 : 1
    let num = cons > 1 ? 6 : 5
    let attaAttack = basic(calc(attr.hp) * talent.q['附加伤害'] * _ratio * num, 'q')
    let numavg = addiAttack.avg * 5 + attaAttack.avg
    let numdmg = addiAttack.dmg * 5 + attaAttack.dmg
    if (cons > 0){
      numavg *= 1.24
      numdmg *= 1.24
    }
    return {
      avg: numavg,
      dmg: numdmg
    }
  }
}, {
  title: '生命上限提高参考值(4人)',
  dmg: ({ calc, attr }, { basic }) => {
    let _hpplus = calc(attr.hp) * 9 * 3 / 100
    return {avg: _hpplus}
  }
}]

export const defDmgIdx = 4
export const mainAttr = 'hp,cpct,cdmg'

export const buffs = [{
  title: '缇宝战技：当缇宝拥有【神启】时，我方全体目标全属性抗性穿透提高[kx]%',
  data: {
    kx: ({ talent }) => talent.e['抗性穿透提高'] * 100
  }
}, {
  title: '缇宝终结技：敌方目标受到的伤害提高[enemydmg]%',
  data: {
    enemydmg: ({ talent }) => talent.q['受到的伤害提高'] * 100
  }
}, {
  title: '行迹-城墙外的羊羔儿…：施放天赋的追加攻击后，缇宝造成的伤害提高72%，该效果最多叠加3层',
  tree: 1,
  data: {
    dmg: 72 * 3
  }
}, {
  title: '行迹-长翅膀的玻璃球！：缇宝的生命上限提高，提高数值等同于我方全体角色生命上限之和的9%(四角色)',
  tree: 2,
  data: {
    hpPlus: ({ calc, attr }) => calc(attr.hp) * 9 * 3 / 100  // 假设缇宝血量6000, 其他3个队友血量4000, 那么总血量:缇宝血量=3:1 
  }
}, {
  title: '缇宝4魂：【神启】持续期间，我方全体造成伤害时无视目标[ignore]%的防御',
  cons: 4,
  data: {
    ignore: 18
  }
}, {
  title: '缇宝6魂：天赋的追加攻击造成的伤害提高[tDmg]%',
  cons: 6,
  data: {
    tDmg: 729
  }
}]

export const createdBy = '冰翼 & 77惨惨77'
