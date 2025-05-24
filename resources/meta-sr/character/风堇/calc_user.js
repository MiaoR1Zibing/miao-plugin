export const details = [{
  title: '【雨过天晴】提供生命上限提高',
  params: { AfterRain: true },
  dmg: ({talent, calc, cons, attr}) => {
    let upper = cons >= 1 ? 0.5 : 0
    let hpup = (attr.hp.base * (talent.q['生命提高·百分比生命'] + upper) + talent.q['生命提高·固定值']) 
    return {avg: hpup}
  }
}, {
  title: '【雨过天晴】普攻伤害',
  params: { AfterRain: true },
  dmg: ({ talent, calc, attr }, { basic }) => basic(calc(attr.hp) * talent.a['技能伤害'], 'a')
}, {
  title: '【雨过天晴】战技治疗量 - 对于单个目标',
  params: { AfterRain: true },
  dmg: ({ talent, calc, attr }, { heal }) => heal(calc(attr.hp) * talent.e['治疗·百分比生命'] + talent.e['治疗·固定值'])
}, {
  title: '无【雨过天晴】终结技治疗量 - 对于单个目标',
  dmg: ({ talent, calc, attr }, { heal }) => heal(calc(attr.hp) * talent.q['治疗·百分比生命'] + talent.q['治疗·固定值'])
}, {
  title: 'eq总伤 - 治6+对单【雨过天晴】',
  params: { AfterRain: true },
  dmg: ({ talent, calc, cons, attr }, { basic }) => {
    let cureAmount = (5*(calc(attr.hp) * talent.e['治疗·百分比生命'] + talent.e['治疗·固定值'])+(calc(attr.hp)*talent.e['小伊卡治疗·百分比生命']+talent.e['小伊卡治疗·固定值'])) * (1 + calc(attr.heal) / 100 + attr.heal.inc / 100)
    cureAmount += (5*(calc(attr.hp) * talent.q['治疗·百分比生命'] + talent.q['治疗·固定值'])+(calc(attr.hp)*talent.q['小伊卡治疗·百分比生命']+talent.q['小伊卡治疗·固定值'])) * (1 + calc(attr.heal) / 100 + attr.heal.inc / 100)
    let primaryDmg = basic(cureAmount * talent.me['技能伤害'])
    return {
      dmg: primaryDmg.dmg,
      avg: primaryDmg.avg
    }
  }
}, {
  title: '【雨过天晴】忆灵天赋治疗 - 单目标',
  params: { AfterRain: true },
  dmg: ({ talent, calc, cons, attr }, { heal }) => heal(2 * (calc(attr.hp) * talent.mt['治疗·百分比生命'] + talent.mt['治疗·固定值']))
}]

export const defDmgIdx = 4
export const mainAttr = 'hp,speed,cdmg'

export const buffs = [{
  check: ({params}) => params.AfterRain === true,
  title: '终结技-飞入晨昏的我们：终结技施放时，使我方全体目标生命上限提高 [hpPlus] 点',
  data: {
    hpPlus: ({ talent, attr, cons }) =>{
      let upper = cons >= 1 ? 0.5 : 0
      let hpup = (attr.hp.base * (talent.q['生命提高·百分比生命'] + upper) + talent.q['生命提高·固定值']) 
      return hpup
    }
  }
},{
  title: '天赋-疗愈世间的晨曦：提供治疗后, 小伊卡造成的伤害提高 [_dmmgup] %, 最多可叠加3层至 [dmg]%',
  data: {
    dmg: ({ talent }) => talent.t['伤害提高'] * 100 * 3, 
    _dmmgup: ({talent}) => talent.t['伤害提高'] * 100
  }
}, {
  title: '行迹-阴云莞尔：为什么庙算无遗暴击率-100%呢? 心海你看看人家风堇. (该行迹另一效果: 半血以下治疗量提高 25% , 未计入计算)',
  tree: 1,
  data: {
    cpctPlus: 1 * 100
  }
}, {
  title: '行迹-雷雨轻柔：风堇的效果抵抗提高 [effDefPlus]% 。施放战技和终结技时，解除我方全体目标的 1 个负面效果。',
  tree: 2,
  data: {
    effDefPlus: 50
  }
}, {
  title: '行迹-暴风停歇1：风堇的速度大于 200 时，她与小伊卡的生命上限提高 20%',
  tree: 3,
  data: {
    hpPct: ({ calc, attr }) => {
      let num = Math.min(Math.max(Math.floor(calc(attr.speed) - 200), 0), 200)
      if (num > 0) {
        return 20
      } else {
        return 0
      }
    }
  }
}, {
  check: ({calc, attr}) => {Math.floor(calc(attr.speed) - 200) > 0},
  title: '行迹-暴风停歇2：根据超出 200 的部分的速度提高了 [healInc]% 的治疗量',
  tree: 3,
  sort: 9,
  data: {
    healInc: ({ calc, attr }) => {
      let num = Math.min(Math.max(Math.floor(calc(attr.speed) - 200), 0), 200)
      if (num > 0) {
        return num
      } else {
        return 0
      }
    }
  }
}, {
  check: ({ params }) => params.AfterRain === true,
  title: '风堇1魂：处于【雨过天晴】状态时，我方全体目标生命上限额外提高 [hpPct]% ，并且施放攻击后立即回复等同于风堇 8% 生命上限的生命值',
  cons: 1,
  data: {
    hpPct: 50
  }
}, {
  title: '风堇2魂：我方目标生命值降低时，速度提高 [speedPct]% ，持续 2 回合',
  cons: 2,
  data: {
    speedPct: 30
  }
}, {
  title: '风堇4魂：行迹【暴风停歇】获得强化，每超过 1 点速度，风堇和小伊卡的暴击伤害额外提高 2%, 共提高 [cdmg] %',
  cons: 4,
  sort: 9,
  data: {
    cdmg: ({attr, calc}) => {
      let num = Math.min(Math.max(Math.floor(calc(attr.speed) - 200), 0), 200)
      if (num > 0) {
        return 2 * num
      } else {
        return 0
      }
    }
  }
}, {
  title: '风堇6魂：小伊卡施放忆灵技清空累计治疗数值改为 [_me]% ，小伊卡在场时，我方全体目标的全属性抗性穿透提高 [kx]%',
  cons: 6,
  data: {
    _me: 14,
    kx: 20
  }
}]

export const createdBy = '77惨惨77'
