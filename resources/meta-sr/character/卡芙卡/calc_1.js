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
  dmg: ({ talent }, dmg) => dmg(talent.a['技能伤害'], 'a')
}, {
  title: '战技主目标伤害',
  dmg: ({ talent }, dmg) => dmg(talent.e['单体伤害'], 'e')
}, {
  title: '战技相邻目标伤害',
  dmg: ({ talent }, dmg) => dmg(talent.e['相邻目标伤害'], 'e')
}, {
  title: '天赋追加伤害',
  dmg: ({ talent }, dmg) => dmg(talent.t['追加伤害'], 't')
}, {
  title: '终结技伤害',
  dmg: ({ talent }, dmg) => dmg(talent.q['技能伤害'], 'e')
}, {
  title: '触电战技结算伤害',
  dmgKey: 'AE',
  dmg: ({ talent , cons }, dmg ) => {
  let plusDot = cons >= 6 ? 1.56 : 0
  let cxsh1 = dmg((talent.q['回合持续伤害'] + plusDot) * talent.e['额外持续伤害'], 'dot', 'skillDot')
  return {
     avg: cxsh1.avg
  }
 }
}, {
  title: '触电伤害',
  dmg: ({ talent , cons }, dmg) => {
  let plusDot = cons >= 6 ? 1.56 : 0
  let cx = dmg((talent.q['回合持续伤害'] + plusDot) * talent.q['额外持续伤害'], 'dot', 'skillDot')
  return {
  avg: cx.avg
   }
 }
},{
  title: '触电持续伤害',
  dmg: ({ talent , cons }, dmg) => {
  let plusDot = cons >= 6 ? 1.56 : 0
  let cxsh = dmg((talent.q['回合持续伤害'] + plusDot) , 'dot', 'skillDot')
  return {
  avg: cxsh.avg
  }
 }
}]

export const mainAttr = 'atk,cpct,cdmg,speed'
export const defDmgKey = 'AE'

export const buffs = [
{
  title: '卡芙卡1命：目标受到的持续伤害提高30%',
  cons: 1,
  data: {
    dotDmg: 30
  }
}, {
  title: '卡芙卡2命：我方全体造成的持续伤害提高33%',
  cons: 2,
  data: {
    dotDmg: 33
  }
}]
