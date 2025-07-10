export const details = [{
  title: '触发特效后生命值',
  params: { zp: true , team: false },
  dmg: ({ attr, calc }) => {
    return {
      avg: Math.min(calc(attr.hp) * 1)
    }
  }
}, {
  title: '触发特效后攻击力',
  params: { zp: true , team: false },
  dmg: ({ attr, calc }) => {
    return {
      avg: Math.min(calc(attr.atk) * 1)
    }
  }
}, {
  title: '触发特效后防御力',
  params: { zp: true , team: false },
  dmg: ({ attr, calc }) => {
    return {
      avg: Math.min(calc(attr.def) * 1)
    }
  }
}, {
  title: '触发特效后速度',
  params: { zp: true , team: false },
  dmg: ({ attr, calc }) => {
    return {
      avg: Math.min(calc(attr.speed) * 1)
    }
  }
}, {
  title: '触发特效后暴击率',
  params: { zp: true , team: false },
  dmg: ({ attr, calc }) => {
    return {
      avg: Math.min(calc(attr.cpct) * 1)
    }
  }
}, {
  title: '触发特效后暴击伤害',
  params: { zp: true , team: false },
  dmg: ({ attr, calc }) => {
    return {
      avg: Math.min(calc(attr.cdmg) * 1)
    }
  }
}, {
  title: '触发特效后击破特攻',
  params: { zp: true , team: false },
  dmg: ({ attr, calc }) => {
    return {
      avg: Math.min(calc(attr.stance) * 1)
    }
  }
}, {
  title: '触发特效后效果命中',
  params: { zp: true , team: false },
  dmg: ({ attr, calc }) => {
    return {
      avg: Math.min(calc(attr.effPct) * 1)
    }
  }
}, {
  title: '触发特效后效果抵抗',
  params: { zp: true , team: false },
  dmg: ({ attr, calc }) => {
    return {
      avg: Math.min(calc(attr.effDef) * 1)
    }
  }
}, {
  title: '触发特效后充能效率',
  params: { zp: true , team: false },
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
  params: { zp: false },
  dmg: ({ talent, attr }, { basic }) => basic(attr.hp * talent.a['技能伤害'], 'a')
}, {
  title: '转魄 普攻',
  params: { zp: true },
  dmg: ({ talent, attr }, { basic }) => basic(attr.hp * talent.a['技能伤害'], 'a')
}, {
  title: '战技伤害',
  params: { zp: false },
  dmg: ({ talent, attr }, { basic }) => basic(attr.hp * talent.e['技能伤害'], 'e')
}, {
  title: '转魄 战技主目标',
  dmgKey: 'AE',
  params: { zp: true },
  dmg: ({ talent, attr }, { basic }) => basic(attr.hp * talent.e2['目标伤害'], 'e')
}, {
  title: '转魄 战技相邻目标',
  params: { zp: true },
  dmg: ({ talent, attr }, { basic }) => basic(attr.hp * talent.e2['相邻目标伤害'], 'e')
}, {
  check: ({ cons }) => cons >= 2,
  title: 'Q后强化战技主目标',
  params: { c2: true , zp: true },
  dmg: ({ talent, attr }, { basic }) => basic(attr.hp * talent.e2['目标伤害'], 'e')
}, {
  title: '终结技 主目标',
  params: { zp: false },
  dmg: ({ talent, attr }, { basic }) => basic(attr.hp * talent.q['目标伤害'], 'q')
}, {
  title: '终结技 相邻目标',
  params: { zp: false },
  dmg: ({ talent, attr }, { basic }) => basic(attr.hp * talent.q['相邻目标伤害'], 'q')
}, {
  title: '转魄 终结技主目标',
  params: { zp: true },
  dmg: ({ talent, attr }, { basic }) => basic(attr.hp * talent.q['目标伤害'], 'q')
}, {
  title: '转魄 终结技相邻目标',
  params: { zp: true },
  dmg: ({ talent, attr }, { basic }) => basic(attr.hp * talent.q['相邻目标伤害'], 'q')
}, {
  title: '[镜花缇风]转魄 战技主目标',
  params: { zp: true , team: true },
  dmg: ({ talent, attr }, { basic }) => basic(attr.hp * talent.e2['目标伤害'], 'e')
}, {
  title: '[镜花缇风]转魄 战技相邻目标',
  params: { zp: true , team: true },
  dmg: ({ talent, attr }, { basic }) => basic(attr.hp * talent.e2['相邻目标伤害'], 'e')
}, {
  check: ({ cons }) => cons >= 2,
  title: '[镜花缇风]Q后强化战技主目标',
  params: { c2: true , zp: true , team: true },
  dmg: ({ talent, attr }, { basic }) => basic(attr.hp * talent.e2['目标伤害'], 'e')
}, {
  title: '[镜花缇风]终结技 主目标',
  params: { zp: false , team: true },
  dmg: ({ talent, attr }, { basic }) => basic(attr.hp * talent.q['目标伤害'], 'q')
}, {
  title: '[镜花缇风]终结技 相邻目标',
  params: { zp: false , team: true },
  dmg: ({ talent, attr }, { basic }) => basic(attr.hp * talent.q['相邻目标伤害'], 'q')
}, {
  title: '[镜花缇风]转魄 终结技主目标',
  params: { zp: true , team: true },
  dmg: ({ talent, attr }, { basic }) => basic(attr.hp * talent.q['目标伤害'], 'q')
}, {
  title: '[镜花缇风]转魄 终结技相邻目标',
  params: { zp: true , team: true },
  dmg: ({ talent, attr }, { basic }) => basic(attr.hp * talent.q['相邻目标伤害'], 'q')
}]


export const mainAttr = 'hp,atk,cpct,cdmg'
export const defDmgKey = 'AE'


export const buffs = [{
  title: '澹月转魄：转魄提升暴击率[xq1]%，消耗队友血量提升至多[xq2]%暴击伤害',
  data: {
    cpct: ({ params , talent }) => params.zp ? ( talent.t['暴击率提高'] * 100 ) : 0 ,
    cdmg: ({ params , talent }) => params.zp ? ( talent.t['暴击伤害提高'] * 500 ) : 0,
    xq1:({ talent }) => talent.t['暴击率提高'] * 100 ,
    xq2:({ talent }) => talent.t['暴击伤害提高'] * 500
  }
}, {
  title: '行迹：转魄状态下，效果抵抗提高35%，终结技造成的伤害提高20%，无视目标25%的防御力',
  tree: 3,
  data: {
    qDmg: ({ params }) => params.zp ? 20 : 0,
    effDef: ({ params }) => params.zp ? 35 : 0,
    ignore: ({ params }) => params.zp ? 25 : 0
  }
}, {
  title: '镜流1命：释放终结技或强化战技时，暴击伤害提高36%',
  cons: 1,
  data: {
    cdmg: ({ params }) => params.zp ? 36 : 0
  }
}, {
  title: '镜流2命：释放终结技下一次强化战技伤害提高80%',
  cons: 2,
  data: {
    eDmg: ({ params }) => params.c2 ? 80 : 0
  }
}, {
  title: '镜流4命：转魄状态下，提高100%暴击伤害',
  cons: 4,
  data: {
    cdmg: ({ params , talent }) => params.zp ? 100 : 0
  }
}, {
  title: '镜流6命：转魄状态下，冰属性抗性穿透提高30%',
  cons: 6,
  data: {
    kx: ({ params }) => params.zp ? 30 : 0
  }
}, {
  check: ({ cons, params }) => params.team === true,
  title: '缇宝 神启：全属性抗性穿透提高[atkPct]%',
  data: {
    kx: 24
  }
}, {
  check: ({ cons, params }) => params.team === true,
  title: '缇宝 结界：敌方目标受到的伤害提高[enemydmg]%',
  data: {
    enemydmg: 30
  }
}, {
  check: ({ cons, params }) => params.team === true,
  title: '缇宝 如果时间是一朵花：暴击伤害提高[cdmg]%',
  data: {
    cdmg: 48
  }
}, {
  check: ({ params }) =>  params.team === true,
  title: '花火(232+40爆伤) 梦游鱼：暴击伤害提升[cdmg]%',
  data: {
    cdmg: 110.28
  }
}, {
  check: ({ params }) =>  params.team === true,
  title: '花火 一人千役&谜诡&叙述性诡计：三层全体造成的伤害提升[dmg]%',
  data: {
    dmg: 48
  }
}, {
  check: ({ params }) => params.team === true,
  title: '花火 游戏尘寰：全体暴击率提升10%',
  data: {
    cpct: 10
  }
}, {
  check: ({ params }) => params.team === true,
  title: '花火 游戏尘寰：全体暴击伤害伤害提升24%',
  data: {
    cdmg: 28
  }
}, {
  check: ({ params }) => params.team === true,
  title: '风堇 雨过天晴：生命上限提高1380点',
  data: {
    hpPlus: 1380
  }
}]
