export const details = [{
  title: '触发特效后生命值',
  params: { teamA: false },
  dmg: ({ attr, calc }) => {
    return {
      avg: Math.min(calc(attr.hp) * 1)
    }
  }
}, {
  title: '触发特效后攻击力',
  params: { teamA: false },
  dmg: ({ attr, calc }) => {
    return {
      avg: Math.min(calc(attr.atk) * 1)
    }
  }
}, {
  title: '触发特效后防御力',
  params: { teamA: false },
  dmg: ({ attr, calc }) => {
    return {
      avg: Math.min(calc(attr.def) * 1)
    }
  }
}, {
  title: '触发特效后速度',
  params: { teamA: false },
  dmg: ({ attr, calc }) => {
    return {
      avg: Math.min(calc(attr.speed) * 1)
    }
  }
}, {
  title: '触发特效后暴击率',
  params: { teamA: false },
  dmg: ({ attr, calc }) => {
    return {
      avg: Math.min(calc(attr.cpct) * 1)
    }
  }
}, {
  title: '触发特效后暴击伤害',
  params: { teamA: false },
  dmg: ({ attr, calc }) => {
    return {
      avg: Math.min(calc(attr.cdmg) * 1)
    }
  }
}, {
  title: '触发特效后击破特攻',
  params: { teamA: false },
  dmg: ({ attr, calc }) => {
    return {
      avg: Math.min(calc(attr.stance) * 1)
    }
  }
}, {
  title: '触发特效后效果命中',
  params: { teamA: false },
  dmg: ({ attr, calc }) => {
    return {
      avg: Math.min(calc(attr.effPct) * 1)
    }
  }
}, {
  title: '触发特效后效果抵抗',
  params: { teamA: false },
  dmg: ({ attr, calc }) => {
    return {
      avg: Math.min(calc(attr.effDef) * 1)
    }
  }
}, {
  title: '触发特效后充能效率',
  params: { teamA: false },
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
  dmg: ({ talent, attr }, { basic }) => basic(talent.a['技能伤害'] * attr.hp, 'a')
}, {
   title: '强化普攻伤害',
   dmgKey: 'AE',
   dmg: ({ talent, attr }, { basic }) => basic(talent.a2['生命倍率'] * attr.hp, 'a')
}, {
   title: '强化普攻相邻伤害',
   dmg: ({ talent, calc, attr, cons }, { basic }) => {
     const zz = talent.a2['生命倍率·相邻目标']
     const hp = calc(attr.hp)
     return basic( ( zz * hp ) , 'a' )
   }
}, {
   title: '满buff终结技伤害',
   dmg: ({ talent, calc, attr, cons }, { basic }) => {
     const zz = talent.q['生命倍率']
     const ss = talent.q['已损失生命值倍率']
     const hp = calc(attr.hp)
     return basic( ( zz * hp  ) + ( ss * hp * 0.9 ) , 'q' )
   }
}, {
   title: '满buff终结技相邻伤害',
   dmg: ({ talent, calc, attr, cons }, { basic }) => {
     const zz = talent.q['生命倍率·相邻目标']
     const ss = talent.q['已损失生命值倍率·相邻目标']
     const hp = calc(attr.hp)
     return basic( ( zz * hp  ) + ( ss * hp * 0.9 ) , 'q' )
   }
}, {
   title: '天赋追击伤害',
   dmg: ({ talent, calc, attr, cons }, { basic }) => {
     const ss = talent.t['生命倍率']
     const hp = calc(attr.hp)
     return basic( ( ss * hp  ) , 't' )
   }
}, {
   title: '[刃罗布银]强化普攻伤害',
   params: { teamA: true },
   dmg: ({ talent, attr }, { basic }) => basic(talent.a2['生命倍率'] * attr.hp, 'a')
}, {
   title: '[刃罗布银]强化普攻相邻伤害',
   params: { teamA: true },
   dmg: ({ talent, calc, attr, cons }, { basic }) => {
     const zz = talent.a2['生命倍率·相邻目标']
     const hp = calc(attr.hp)
     return basic( ( zz * hp ) , 'a' )
   }
}, {
   title: '[刃罗布银]满buff终结技伤害',
   params: { teamA: true },
   dmg: ({ talent, calc, attr, cons }, { basic }) => {
     const zz = talent.q['生命倍率']
     const ss = talent.q['已损失生命值倍率']
     const hp = calc(attr.hp)
     return basic( ( zz * hp  ) + ( ss * hp * 0.9 ) , 'q' )
   }
}, {
   title: '[刃罗布银]满buff终结技相邻伤害',
   params: { teamA: true },
   dmg: ({ talent, calc, attr, cons }, { basic }) => {
     const zz = talent.q['生命倍率·相邻目标']
     const ss = talent.q['已损失生命值倍率·相邻目标']
     const hp = calc(attr.hp)
     return basic( ( zz * hp  ) + ( ss * hp * 0.9 ) , 'q' )
   }
}, {
   title: '[刃罗布银]天赋追击伤害',
   params: { teamA: true },
   dmg: ({ talent, calc, attr, cons }, { basic }) => {
     const ss = talent.t['生命倍率']
     const hp = calc(attr.hp)
     return basic( ( ss * hp ) , 't' )
   }
}]

export const mainAttr = 'atk,cpct,cdmg,speed'
export const defDmgKey = 'AE'

export const buffs = [{
  title: '刃天赋：释放战技后造成的伤害提高[dmg]%',
  data: {
    dmg: ({ talent }) => talent.e['伤害提高'] * 100
  }
}, {
  title: '刃1命：强化普攻与终结技能造成的伤害提高90%生命值',
  cons: 1,
  data: {
    qPlus: ({ attr, calc }) => calc(attr.hp) * 0.9,
    aPlus: ({ attr, calc }) => calc(attr.hp) * 0.9
  }
}, {
  title: '刃2命：暴击率提升15%',
  cons: 2,
  data: {
    cpct: 15
  }
}, {
  title: '刃4命：生命值上限提升40%',
  cons: 4,
  data: {
    hpPct: 40
  }
}, {
  title: '刃6命：天赋造成的伤害值提升',
  cons: 6,
  data: {
    tPlus: ({ attr, calc }) => calc(attr.hp) * 0.5
  }
},{
  title: '行迹-坏劫隳亡：天赋造成的伤害提高20%',
  tree: 3,
  data: {
    tDmg: 20
  }
}, {
  check: ({ cons, params }) =>  params.teamA === true,
  title: '布洛妮娅 贝洛伯格进行曲：攻击力提升[atk]%,暴击伤害提升[cdmg]%',
  data: {
    atk: 55,
    cdmg: 68.768
  }
}, {
  check: ({ cons, params }) =>  params.teamA === true,
  title: '布洛妮娅 行迹-军势：造成的伤害提升[dmg]%',
  data: {
    dmg: 10
  }
}, {
  check: ({ cons, params }) => ((cons == 6) && params.teamA === true),
  title: '罗刹光锥 棺的回响⁵：速度提高[speedPct]%',
  data: {
    speedPct: 20
  }
}, {
  check: ({ cons, params }) => ((cons < 6 && cons > 1) && params.teamA === true),
  title: '罗刹光锥 棺的回响³：速度提高[speedPct]%',
  data: {
    speedPct: 16
  }
}, {
  check: ({ cons, params }) => cons <= 1 && params.teamA === true,
  title: '罗刹光锥 棺的回响¹：速度提高[speedPct]%',
  data: {
    speedPct: 12
  }
}, {
  check: ({ cons, params }) =>  params.teamA === true,
  title: '银狼 是否允许更改？：敌人元素抗性降低[kx]%',
  data: {
    kx: 10
  }
}, {
  check: ({ cons, params }) =>  params.teamA === true,
  title: '银狼 |账号已封禁|：敌人防御力降低[enemyDef]%',
  data: {
    enemyDef: 43
  }
}, {
  check: ({ cons, params }) =>  params.teamA === true,
  title: '银狼 等待程序相应...：敌人防御力降低[enemyDef]%',
  data: {
    enemyDef: 8
  }
}, {
  check: ({ cons, params }) =>  params.teamA === true,
  title: '银狼 行迹-旁注：抗性额外降低[kx]%',
  data: {
    kx: 3
  }
}, {
  check: ({ cons, params }) => ((cons == 6) && params.teamA === true),
  title: '银狼光锥 雨一直下⁵：敌人受到的伤害提升[dmg]%',
  data: {
    dmg: 20
  }
}, {
  check: ({ cons, params }) => ((cons < 6 && cons > 1) && params.teamA === true),
  title: '银狼光锥 雨一直下³：敌人受到的伤害提升[dmg]%',
  data: {
    dmg: 16
  }
}, {
  check: ({ cons, params }) => cons <= 1 && params.teamA === true,
  title: '银狼光锥 雨一直下¹：敌人受到的伤害提升[dmg]%',
  data: {
    dmg: 12
  }
}]
