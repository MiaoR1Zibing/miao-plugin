export const details = [{
  title: '【雨过天晴】提供生命上限提高',
  params: { AfterRain: true },
  dmg: ({talent, cons, attr}) => {
    let upper = cons >= 1 ? 0.5 : 0
    let hpup = (attr.hp.base * (talent.q['生命提高·百分比生命'] + upper) + talent.q['生命提高·固定值'])
    return {avg: hpup}
  }
}, {
  title: '普攻伤害【雨过天晴】',
  params: { AfterRain: true },
  dmg: ({ talent, calc, attr }, { basic }) => {
    return basic(calc(attr.hp) * talent.a['技能伤害'], 'a')
  }
}, {
  title: '战技治疗量 - 对于单个目标【雨过天晴】',
  params: { AfterRain: true },
  dmg: ({ talent, calc, attr }, { heal }) => {
    let perHeal = heal(calc(attr.hp) * talent.e['治疗·百分比生命'] + talent.e['治疗·固定值'])
    let num = perHeal.avg
    return {
      avg: Math.floor(num)
    }
  }
}, {
  title: '战技新蕊保守增加 - 6目标【雨过天晴】',
  params: { AfterRain: true },
  dmg: ({ talent, calc, attr }, { heal }) => {
    let perHeal = heal(calc(attr.hp) * talent.e['治疗·百分比生命'] + talent.e['治疗·固定值'])
    let num = 6 * perHeal.avg
    if ( attr.weapon.name === '愿虹光永驻天空') {
      let servantHeal = heal(calc(attr.hp) * talent.mt['治疗·百分比生命'] + talent.mt['治疗·固定值'])
      num += 11 * servantHeal.avg
    }
    num = Math.floor( num / 340 )
    return {
      avg: num
    }
  }
}, {
  title: '首次终结技治疗量 - 对于单个目标',
  dmg: ({ talent, calc, attr }, { heal }) => {
    let perHeal = heal(calc(attr.hp) * talent.q['治疗·百分比生命'] + talent.q['治疗·固定值'])
    let num = perHeal.avg
    return {
      avg: Math.floor(num)
    }
  }
}, {
  title: '忆灵技伤害 - 7人队对单 (有烧血C)',
  params: { AfterRain: true, isServant: true },
  dmg: ({ talent, calc, cons, attr }, { heal, basic }) => {
    let dmg = 0
    let avg = 0
    // 雨过天晴下连续eq, 假设初始治疗值为0(实际应该更高, 不过暂时没想到按照什么基准给定初值)
    // 充能信息为: 开大5点, 小白马5点, a20点, e30点, 天赋召唤15点. 风堇受击一次15点, 忆灵回能1:1共享给风堇
    // 差不多想好了
    // 分析天赋"小伊卡会在任意目标回合开始时或行动后", 回合开始大概指的是dot类伤害触发立即回血, 常态下是行动后触发的
    // 考虑队友主动烧血, 遐蝶一次烧n-1个单位, 万敌等烧血C烧1个, 镜流烧n个单位, 符玄烧2个(受击自己也扣血)
    // 那么, 可分为包含全队烧血C与 不包含 2种
    // 3动一轮循环主动烧血计数, 就算他烧2次, 对应perHeal 2*7+2*6 = 26次(单位变化, 折中), 2+2*6-1 = 13次
    // 这时候按照累积状态, 烧血取18次治疗
    
    // 更新, 忘记计算风堇1魂队友攻击顺带的治疗了. 
    // 这部分怎么计算呢, 不妨考虑队伍 |遐蝶|缇宝|风堇|记忆主|, 满buff状态场上有7个单位, 其中绝大多数技能都是攻击
    // 考虑: 风堇3~4动循环内
    // 缇宝3次追击, 1次大招 --4次
    // 遐蝶2条死龙, 死龙攻击6+2次, 遐蝶攻击3+2次(加号是连携攻击) --13次
    // 记忆主3动, eqaa3次, 迷迷喷射2次 --5次
    // 风堇 qaee或者qaae, 前者4次, 后者6次, 算5次
    // 那么这个队伍总共27次, 算他9次.(考虑到追击队动数多但是烧血少, 应该两者相抵, 就这么算9次)

    // 考虑循环1: q[进状态]ae[退状态]e[召唤忆灵] (非风堇回合开大) 
    // 考虑情况1: [雨过天晴中断][召唤返还能量]
    //  5+5 + 20+5 + 30+5 + 30+15 = 105点能量, 需要充能绳+受击1次 或者 无充能绳受击2次
    
    // 考虑循环2: [状态保持]qeea
    // 考虑情况2: [雨过天晴持续]
    // 5+5 + 30+5 + 30+5 + 20+5 = 105点能量, 需要充能绳+受击1次 或者 无充能绳受击2次 

    // 那么观察以上, 充能缺口一致, 不妨假设一轮循环内全队都是受击3次, 平均有效受击2个单位

    // 情况1, 退状态时能白嫖1次治疗量的累积, 加上大招小白马冲3次
    // 受击触发perHeal, 2 + 2+6 + 2+6 = 18次治疗, 其中2次吃到了雨过天晴
    // 按照状态平均, 每次6次治疗 

    // 情况2, 加上大招小白马冲4次,
    // 受击触发perHeal, (2+6)*3 = 24次治疗, 都吃到了雨过天晴 
    // 按照状态平均, 每次6次治疗

    // 故受击取6次治疗
    
    // 治疗累积值
    
    // 小伊卡治疗单个其他单位治疗量
    let perHeal = heal(calc(attr.hp) * talent.mt['治疗·百分比生命'] + talent.mt['治疗·固定值'])
    let HealServant = perHeal.avg
    // 有专武情况下算上风堇放技能全队烧血治疗
    let cureDelta = 0
    if ( attr.weapon.name === '愿虹光永驻天空') {
      cureDelta += 13 * HealServant   // 11是因为, 我方一共7个目标的前提下, 天赋6次, 雨过天晴全体算7次
    }
    // 释放e
    let healE = heal(6*(calc(attr.hp) * talent.e['治疗·百分比生命'] + talent.e['治疗·固定值']) + 1 * (calc(attr.hp)*talent.e['小伊卡治疗·百分比生命']+talent.e['小伊卡治疗·固定值'])) 
    let nume = healE.avg + cureDelta
    // 释放q
    let healQ = heal(6*(calc(attr.hp) * talent.q['治疗·百分比生命'] + talent.q['治疗·固定值']) + 1 * (calc(attr.hp)*talent.q['小伊卡治疗·百分比生命']+talent.q['小伊卡治疗·固定值'])) 
    let numq = healQ.avg + cureDelta 
    // 风堇技能平均治疗
    let numEQ = (nume*2+numq*1)/3
    // 受击治疗量
    let numHit = 7 * HealServant
    // 队友主动烧血治疗量
    let numConsume = 18 * HealServant
    // 1魂攻击附加治疗量
    let HealCon1 = cons > 0 ? heal(calc(attr.hp)*0.08) : {avg: 0}
    let numCon1 = 6 * HealCon1.avg
    // 治疗累积值
    let cureAmount = numEQ + numHit + numConsume + numCon1
    // 计算稳定累积治疗值并乘0.8以参考 (经验值, 以代替等比数列的循环求和计算, 可改)
    //let exprVal = cons === 6 ? 0.8 : 0.4
    //let cureMaxRate = cons === 6 ? 8.33 : 2    // 6 ? 1/(1-0.88) : １/(1-0.5)
    cureAmount *= (cons === 6 ? 3.4 : 1.6)
    // 计算伤害
    let tmp = basic(cureAmount * talent.me['技能伤害'], 'me')
    dmg += tmp.dmg, avg += tmp.avg 
    return {
      dmg: dmg,
      avg: avg
    }
  }
}, {
  showDetail: true,
  title: '忆灵技伤害 - 6人队对单 (无烧血C)',
  params: { AfterRain: true, isServant: true },
  dmg: ({ talent, calc, cons, attr }, { heal, basic }) => {
    let dmg = 0
    let avg = 0 
    // 小伊卡治疗单个其他单位治疗量
    let perHeal = heal(calc(attr.hp) * talent.mt['治疗·百分比生命'] + talent.mt['治疗·固定值'])
    let HealServant = perHeal.avg
    // 有专武情况下算上风堇放技能全队烧血治疗
    let cureDelta = 0
    if ( attr.weapon.name === '愿虹光永驻天空') {
      cureDelta += 11 * HealServant   // 11是因为, 我方一共6个目标的前提下, 天赋5次, 雨过天晴全体算6次
    }
    // 释放e
    let healE = heal(5*(calc(attr.hp) * talent.e['治疗·百分比生命'] + talent.e['治疗·固定值']) + 1 * (calc(attr.hp)*talent.e['小伊卡治疗·百分比生命']+talent.e['小伊卡治疗·固定值'])) 
    let nume = healE.avg + cureDelta
    // 释放q
    let healQ = heal(5*(calc(attr.hp) * talent.q['治疗·百分比生命'] + talent.q['治疗·固定值']) + 1 * (calc(attr.hp)*talent.q['小伊卡治疗·百分比生命']+talent.q['小伊卡治疗·固定值'])) 
    let numq = healQ.avg + cureDelta 
    // 风堇技能平均治疗
    let numEQ = (nume*2+numq*1)/3
    // 受击治疗量
    let numHit = 7 * HealServant
    // 队友主动烧血治疗量
    let numConsume = 0
    // 1魂攻击附加治疗量
    let HealCon1 = cons > 0 ? heal(calc(attr.hp)*0.08) : {avg: 0}
    let numCon1 = 6 * HealCon1.avg
    // 治疗累积值
    let cureAmount = numEQ + numHit + numConsume + numCon1 
    // 计算稳定累积治疗值并乘0.8以参考 (经验值, 以代替等比数列的循环求和计算, 可改)
    //let exprVal = cons === 6 ? 0.8 : 0.4
    //let cureMaxRate = cons === 6 ? 8.33 : 2    // 6 ? 1/(1-0.88) : １/(1-0.5)
    cureAmount *= (cons === 6 ? 3.4 : 1.6)
    // 计算伤害
    let tmp = basic(cureAmount * talent.me['技能伤害'], 'me')
    dmg += tmp.dmg, avg += tmp.avg
    return {
      dmg: dmg,
      avg: avg
    }
  }
}, {
  title: '忆灵治疗跳数(连跳2次) - 对于单个目标',
  params: { AfterRain: true },
  dmg: ({ talent, calc, attr }, { heal }) => {
    let perHeal = heal(calc(attr.hp) * talent.mt['治疗·百分比生命'] + talent.mt['治疗·固定值'])
    return{
      avg: Math.floor(perHeal.avg)
    }
  }
}, {
  check: ({ cons }) => cons > 0,
  title: '一魂攻击回复 - 对于单个目标【雨过天晴】',
  params: { AfterRain: true },
  dmg: ({ calc, attr }, { heal }) => {
    let perHeal = heal(calc(attr.hp) * 0.08)
    return{
      avg: Math.floor(perHeal.avg)
    }
  }
}, {
  title: '风堇局内 - 最终生命提升值 | 最终生命值',
  params: { AfterRain: true }, 
  dmg: ({ calc, attr, cons, talent }) => {
    let upper = cons >= 1 ? 0.5 : 0
    let hpup = (attr.hp.base * (talent.q['生命提高·百分比生命'] + upper) + talent.q['生命提高·固定值'])
    if (calc(attr.speed) > 200) hpup += attr.hp.base * 0.2
    let hpfinal = calc(attr.hp)
    return { dmg: hpup, avg : Math.floor(hpfinal) }
  }
}]

export const defDmgIdx = 6
export const mainAttr = 'hp,speed,cdmg'

export const buffs = [{
  check: ({ params }) => params.AfterRain === true,
  title: '终结技-飞入晨昏的我们：终结技施放时，使我方全体目标生命上限提高 [hpPlus] 点',
  data: {
    hpPlus: ({ talent, attr, cons }) =>{
      let upper = cons >= 1 ? 0.5 : 0
      let hpup = (attr.hp.base * (talent.q['生命提高·百分比生命'] + upper) + talent.q['生命提高·固定值']) 
      return hpup
    }
  }
},{ 
  check: ({ params }) => params.isServant === true,
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
  title: '行迹-暴风停歇2：根据超出 200 的部分的速度提高了 [heal]% 的治疗量',
  tree: 3,
  sort: 9,
  check: ({ calc, attr }) => calc(attr.speed) > 200,
  data: {
    heal: ({ calc, attr }) => {
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
  title: '风堇1魂：处于【雨过天晴】状态时，我方全体目标生命上限额外提高 50% ，并且施放攻击后立即回复等同于风堇 8% 生命上限的生命值',
  cons: 1
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
    cdmg: ({ attr, calc }) => {
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
    _me: 12,
    kx: 20
  }
}]

export const createdBy = '77惨惨77'
