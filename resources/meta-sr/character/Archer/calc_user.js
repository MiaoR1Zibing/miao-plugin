export const details = [{
  title: '当前遗器套装',
  dmg: ({ artis , attr, calc, talent }) => {
    return {
      avg: artis ,
      type: 'text'
    }
  }
},{
  title: '[A]干将•莫邪-技能伤害',
  dmg: ({ talent }, dmg) => dmg(talent.a['技能伤害'], 'a')
},{
  title: '[E]伪•螺旋剑-零层伤害',
  params: { E: true,A: true,B: false,C: false,D: false},
  dmg: ({ talent }, dmg) => dmg(talent.e['技能伤害'], 'e')
},{
  title: '[E]伪•螺旋剑-一层伤害',
  params: { E: true,A: false,B: true,C: false,D: false},
  dmg: ({ talent }, dmg) => dmg(talent.e['技能伤害'], 'e')
},{
  title: '[E]伪•螺旋剑-二层伤害',
  dmgKey: 'AE',
  params: { E: true,A: false,B: false,C: true,D: false},
  dmg: ({ talent }, dmg) => dmg(talent.e['技能伤害'], 'e')
},{
  title: '[Q]无限剑制-技能伤害',
  dmg: ({ talent }, dmg) => dmg(talent.q['技能伤害'], 'q')
},{
  title: '[T]心眼（真）-技能伤害',
  dmg: ({ talent }, dmg) => dmg(talent.t['技能伤害'], 't')
}]

export const defDmgKey = 'AE'
export const mainAttr = 'atk,cpct,cdmg'

export const buffs = [{
  title: '守护者：暴击伤害提高60%',
  data: {
    cdmg: 60
  }
},{
  check: ({ cons, params }) => params.B === true,
  title: '回路连接：战技造成的伤害提高[dmg]%',
  data: {
    dmg: ({ talent, attr }) => talent.e['战技伤害提高'] * 100
  }
},{
  check: ({ cons, params }) => params.C === true,
  title: '回路连接：战技造成的伤害提高[dmg]%',
  data: {
    dmg: ({ talent, attr }) => talent.e['战技伤害提高'] * 200
  }
}, {
  title: 'Archer 2魂：施放终结技时，使敌方目标的量子属性的抗性降低[kx]%',
  cons: 2,
  data: {
    kx: 20
  }
}, {
  title: 'Archer 4魂：造成的终结技伤害提高[qDmg]%',
  cons: 4,
  data: {
    qDmg: 150
  }
}, {
  check: ({ params }) => params.cons6 === true,
  title: 'Archer 6魂：战技伤害无视20%的防御力',
  cons: 6,
  data: {
    ignore: 20
  }
}]

export const createdBy = 'Ehya丶Calc & 冰翼'
