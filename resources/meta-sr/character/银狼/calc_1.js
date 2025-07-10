export const details = [{
  title: '触发特效后生命值',
  params: { team: false },
  dmg: ({ attr, calc }) => {
    return {
      avg: Math.min(calc(attr.hp) * 1)
    }
  }
}, {
  title: '触发特效后攻击力',
  params: { team: false },
  dmg: ({ attr, calc }) => {
    return {
      avg: Math.min(calc(attr.atk) * 1)
    }
  }
}, {
  title: '触发特效后防御力',
  params: { team: false },
  dmg: ({ attr, calc }) => {
    return {
      avg: Math.min(calc(attr.def) * 1)
    }
  }
}, {
  title: '触发特效后速度',
  params: { team: false },
  dmg: ({ attr, calc }) => {
    return {
      avg: Math.min(calc(attr.speed) * 1)
    }
  }
}, {
  title: '触发特效后暴击率',
  params: { team: false },
  dmg: ({ attr, calc }) => {
    return {
      avg: Math.min(calc(attr.cpct) * 1)
    }
  }
}, {
  title: '触发特效后暴击伤害',
  params: { team: false },
  dmg: ({ attr, calc }) => {
    return {
      avg: Math.min(calc(attr.cdmg) * 1)
    }
  }
}, {
  title: '触发特效后击破特攻',
  params: { team: false },
  dmg: ({ attr, calc }) => {
    return {
      avg: Math.min(calc(attr.stance) * 1)
    }
  }
}, {
  title: '触发特效后效果命中',
  params: { team: false },
  dmg: ({ attr, calc }) => {
    return {
      avg: Math.min(calc(attr.effPct) * 1)
    }
  }
}, {
  title: '触发特效后效果抵抗',
  params: { team: false },
  dmg: ({ attr, calc }) => {
    return {
      avg: Math.min(calc(attr.effDef) * 1)
    }
  }
}, {
  title: '触发特效后充能效率',
  params: { team: false },
  dmg: ({ attr, calc }) => {
    return {
      avg: Math.min(calc(attr.recharge) * 1)
    }
  }
}, {
  title: '当前遗器套装',
  dmg: ({ artis , attr, calc, talent }) => {
    return {
      avg: artis ,
      type: 'text'
    }
  }
},{
  title: '普攻伤害',
  params: { team: false },
  dmg: ({ talent }, dmg) => dmg(talent.a['技能伤害'], 'a')
}, {
  title: '战技伤害',
  params: { team: false },
  dmg: ({ talent }, dmg) => dmg(talent.e['技能伤害'], 'e')
}, {
  title: '终结技伤害',
  dmgKey: 'AE',
  params: { team: false },
  dmg: ({ talent, cons }, dmg) => {
    let addDmg = (cons * 1 >= 4) ? 1 : 0
    return dmg(talent.q['技能伤害'] + addDmg, 'q')
  }
}, {
  title: '对10韧性敌人量子击破纠缠伤害',
  dmg: ({ calc, attr }, { reaction }) => {
    return {
      avg: reaction('entanglement').avg * 5 * (10 + 2) / 4
    }
}},  {
  title: '希银布罗 普攻伤害',
  params: { team: true },
  dmg: ({ talent }, dmg) => dmg(talent.a['技能伤害'], 'a')
}, {
  title: '希银布罗 战技伤害',
  params: { team: true },
  dmg: ({ talent }, dmg) => dmg(talent.e['技能伤害'], 'e')
}, {
  title: '希银布罗 终结技',
  params: { team: true },
  dmg: ({ talent, cons }, dmg) => {
    let addDmg = (cons * 1 >= 4) ? 1 : 0
    return dmg(talent.q['技能伤害'] + addDmg, 'q')
  }
}]

export const mainAttr = 'atk,cpct,cdmg,effPct'
export const defDmgKey = 'AE'

export const defParams = {
  team: true
}

export const buffs = [{
  title: '银狼天赋：防御力缺陷降低敌方防御力[enemyDef]%',
  data: {
    enemyDef: ({ talent }) => talent.t['防御力降低'] * 100
  }
}, {
  title: '银狼战技：添加弱点降低对方对应属性抗性[kx]%',
  data: {
    kx: ({ talent }) => talent.e['全属性抗性降低'] * 100
  }
}, {
  title: '银狼终结技：释放终结技降低敌方防御[enemyDef]%',
  data: {
    enemyDef: ({ talent }) => talent.q['防御力降低'] * 100
  }
}, {
  title: '银狼2命：敌方受到的伤害提高20%',
  cons: 2,
  data: {
    enemydmg: 20
  }
}, {
  title: '银狼6命：敌方有5个负面Buff造成的伤害提高100%',
  cons: 6,
  data: {
    dmg: 100
  }
}, {
  check: ({ cons, params, attr }) =>  attr.effPct >= 10 && attr.effPct < 20,
  title: '行迹-旁注：攻击力提高10%',
  data: {
    atkPct: 10
  }
}, {
  check: ({ cons, params, attr }) =>  attr.effPct >= 20 && attr.effPct < 30,
  title: '行迹-旁注：攻击力提高20%',
  data: {
    atkPct: 20
  }
}, {
  check: ({ cons, params, attr }) =>  attr.effPct >= 30 && attr.effPct < 40,
  title: '行迹-旁注：攻击力提高30%',
  data: {
    atkPct: 30
  }
}, {
  check: ({ cons, params, attr }) =>  attr.effPct >= 40 && attr.effPct < 50,
  title: '行迹-旁注：攻击力提高40%',
  data: {
    atkPct: 40
  }
}, {
  check: ({ cons, params, attr }) =>  attr.effPct >= 50,
  title: '行迹-旁注：攻击力提高50%',
  data: {
    atkPct: 50
  }
}, {
  check: ({ cons, params }) =>  params.team === true,
  title: '布洛妮娅 贝洛伯格进行曲：攻击力提升[atk]%,暴击伤害提升[cdmg]%',
  data: {
    atk: 55,
    cdmg: 68.768
  }
}, {
  check: ({ cons, params }) =>  params.team === true,
  title: '布洛妮娅 行迹-军势：造成的伤害提升[dmg]%',
  data: {
    dmg: 10
  }
}, {
  check: ({ cons, params }) => ((cons == 6) && params.team === true),
  title: '罗刹光锥 棺的回响⁵：速度提高[speedPct]%',
  data: {
    speedPct: 20
  }
}, {
  check: ({ cons, params }) => ((cons < 6 && cons > 1) && params.team === true),
  title: '罗刹光锥 棺的回响³：速度提高[speedPct]%',
  data: {
    speedPct: 16
  }
}, {
  check: ({ cons, params }) => cons <= 1 && params.team === true,
  title: '罗刹光锥 棺的回响¹：速度提高[speedPct]%',
  data: {
    speedPct: 12
  }
}]
