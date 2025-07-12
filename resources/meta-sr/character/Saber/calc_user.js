export const details = [{
  title: '当前遗器套装',
  dmg: ({ artis , attr, calc, talent }) => {
    return {
      avg: artis ,
      type: 'text'
    }
  }
},{
  title: '[A]风王结界-技能伤害',
  dmg: ({ talent }, dmg) => dmg(talent.a['技能伤害'], 'a')
},{
  title: '[A+]解放的金色王权-大于三敌人伤害',
  params: { Q: false,A: true,B: false,C: false,D: false},
  dmg: ({ talent }, dmg) => dmg(talent.a2['技能伤害'], 'a')
},{
  title: '[A+]解放的金色王权-等于二敌人伤害',
  params: { Q: false,A: true,B: false,C: false,D: false},
  dmg: ({ talent }, dmg) => dmg(talent.a2['技能伤害'] + talent.a2['额外伤害'], 'a')
},{
  title: '[A+]解放的金色王权-仅剩一敌人伤害',
  params: { Q: false,A: true,B: false,C: false,D: false},
  dmg: ({ talent }, dmg) => dmg(talent.a2['技能伤害'] + talent.a2['额外伤害2'], 'a')
},{
  title: '[E-炉心共鸣:0]风王铁锤-目标伤害',
  params: { Q: false,A: true,B: false,C: false,D: false},
  dmg: ({ talent }, dmg) => dmg(talent.e['技能伤害'], 'e')
},{
  title: '[E-炉心共鸣:0]风王铁锤-相邻目标伤害',
  params: { Q: false,A: true,B: false,C: false,D: false},
  dmg: ({ talent }, dmg) => dmg(talent.e['相邻目标伤害'], 'e')
},{
  title: '[E-炉心共鸣:1]风王铁锤-目标伤害',
  check: ({ cons }) => cons < 2,
  params: { Q: false,A: false,B: true,C: false,D: false},
  dmg: ({ talent }, dmg) => dmg(talent.e['技能伤害'] + talent.e['倍率提高'] * 1, 'e')
},{
  title: '[E-炉心共鸣:1]风王铁锤-相邻目标伤害',
  check: ({ cons }) => cons < 2,
  params: { Q: false,A: false,B: true,C: false,D: false},
  dmg: ({ talent }, dmg) => dmg(talent.e['相邻目标伤害'] + talent.e['倍率提高'] * 1, 'e')
},{
  title: '[E-炉心共鸣:5]风王铁锤-目标伤害',
  check: ({ cons }) => cons < 2,
  params: { Q: false,A: false,B: false,C: true,D: false},
  dmg: ({ talent }, dmg) => dmg(talent.e['技能伤害'] + talent.e['倍率提高'] * 5, 'e')
},{
  title: '[E-炉心共鸣:5]风王铁锤-相邻目标伤害',
  check: ({ cons }) => cons < 2,
  params: { Q: false,A: false,B: false,C: true,D: false},
  dmg: ({ talent }, dmg) => dmg(talent.e['相邻目标伤害'] + talent.e['倍率提高'] * 5, 'e')
},{
  title: '[E-炉心共鸣:10]风王铁锤-目标伤害',
  check: ({ cons }) => cons < 2,
  dmgKey: 'AE',
  params: { Q: false,A: false,B: false,C: false,D: true},
  dmg: ({ talent }, dmg) => dmg(talent.e['技能伤害'] + talent.e['倍率提高'] * 10, 'e')
},{
  title: '[E-炉心共鸣:10]风王铁锤-相邻目标伤害',
  check: ({ cons }) => cons < 2,
  params: { Q: false,A: false,B: false,C: false,D: true},
  dmg: ({ talent }, dmg) => dmg(talent.e['相邻目标伤害'] + talent.e['倍率提高'] * 10, 'e')
},{
  title: '[E-炉心共鸣:1]风王铁锤-目标伤害',
  check: ({ cons }) => cons > 1,
  params: { Q: false,A: false,B: true,C: false,D: false},
  dmg: ({ talent }, dmg) => dmg(talent.e['技能伤害'] + 1 * 1.07 * talent.e['倍率提高'] * 1, 'e')
},{
  title: '[E-炉心共鸣:1]风王铁锤-相邻目标伤害',
  check: ({ cons }) => cons > 1,
  params: { Q: false,A: false,B: true,C: false,D: false},
  dmg: ({ talent }, dmg) => dmg(talent.e['相邻目标伤害'] + 1 * 1.07 * talent.e['倍率提高'] * 1, 'e')
},{
  title: '[E-炉心共鸣:5]风王铁锤-目标伤害',
  check: ({ cons }) => cons > 1,
  params: { Q: false,A: false,B: false,C: true,D: false},
  dmg: ({ talent }, dmg) => dmg(talent.e['技能伤害'] + 1 * 1.35 * talent.e['倍率提高'] * 5, 'e')
},{
  title: '[E-炉心共鸣:5]风王铁锤-相邻目标伤害',
  check: ({ cons }) => cons > 1,
  params: { Q: false,A: false,B: false,C: true,D: false},
  dmg: ({ talent }, dmg) => dmg(talent.e['相邻目标伤害'] + 1 * 1.35 * talent.e['倍率提高'] * 5, 'e')
},{
  title: '[E-炉心共鸣:10]风王铁锤-目标伤害',
  check: ({ cons }) => cons > 1,
  dmgKey: 'AE',
  params: { Q: false,A: false,B: false,C: false,D: true},
  dmg: ({ talent }, dmg) => dmg(talent.e['技能伤害'] + 1 * 1.70 * talent.e['倍率提高'] * 10, 'e')
},{
  title: '[E-炉心共鸣:10]风王铁锤-相邻目标伤害',
  check: ({ cons }) => cons > 1,
  params: { Q: false,A: false,B: false,C: false,D: true},
  dmg: ({ talent }, dmg) => dmg(talent.e['相邻目标伤害'] + 1 * 1.70 * talent.e['倍率提高'] * 10, 'e')
},{
  title: '[Q]风王铁锤-全体伤害',
  params: { Q: true,A: false,B: false,C: false,D: false},
  dmg: ({ talent }, dmg) => dmg(talent.q['技能伤害'], 'q')
},{
  title: '[Q]风王铁锤-单段伤害',
  params: { Q: true,A: false,B: false,C: false,D: false},
  dmg: ({ talent }, dmg) => dmg(talent.q['随机伤害'], 'q')
},{
  title: '[Q]风王铁锤-十段伤害',
  params: { Q: true,A: false,B: false,C: false,D: false},
  dmg: ({ talent }, dmg) => dmg(talent.q['随机伤害'] * 10, 'q')
},{
  title: '[Q]风王铁锤-总共伤害',
  params: { Q: true,A: false,B: false,C: false,D: false},
  dmg: ({ talent }, dmg) => dmg(talent.q['技能伤害'] + talent.q['随机伤害'] * 10, 'q')
}]

export const defDmgKey = 'AE'
export const mainAttr = 'atk,cpct,cdmg'

export const buffs = [{
  check: ({ cons, params }) => params.A === true,
  title: '星之冠冕：暴击伤害提高[cdmg]%',
  data: {
    cdmg: 50
  }
},{
  check: ({ cons, params }) => params.B === true,
  title: '星之冠冕：暴击伤害提高[cdmg]%',
  data: {
    cdmg: 50 + 4
  }
},{
  check: ({ cons, params }) => params.C === true,
  title: '星之冠冕：暴击伤害提高[cdmg]%',
  data: {
    cdmg: 50 + 4 * 5
  }
},{
  check: ({ cons, params }) => params.D === true,
  title: '星之冠冕：暴击伤害提高[cdmg]%',
  data: {
    cdmg: 50 + 4 * 10
  }
},{
  title: '龙之骑士：暴击率提高20%',
  data: {
    cpct: 20
  }
}, {
  title: '龙之炉心：伤害提高[dmg]%',
  data: {
    dmg: ({ talent, attr }) => talent.t['伤害提高'] * 100
  }
}, {
  title: 'Saber1魂：终结技伤害提高60%',
  cons: 1,
  data: {
    qDmg: 60
  }
}, {
  check: ({ cons, params }) => params.A === true,
  title: 'Saber2魂_1：无视目标[ignore]%的防御力',
  cons: 2,
  data: {
    ignore: 1 * 0
  }
}, {
  check: ({ cons, params }) => params.B === true,
  title: 'Saber2魂_2：无视目标[ignore]%的防御力',
  cons: 2,
  data: {
    ignore: 1
  }
}, {
  check: ({ cons, params }) => params.C === true,
  title: 'Saber2魂_3：无视目标[ignore]%的防御力',
  cons: 2,
  data: {
    ignore: 1 * 5
  }
}, {
  check: ({ cons, params }) => params.D === true,
  title: 'Saber2魂_4：无视目标[ignore]%的防御力',
  cons: 2,
  data: {
    ignore: 1 * 10
  }
}, {
  title: 'Saber4魂：风属性抗性穿透提高20%',
  cons: 4,
  data: {
    kx: 20
  }
}, {
  check: ({ cons, params }) => params.Q === true,
  title: 'Saber6魂：终结技伤害的风属性抗性穿透提高20%',
  cons: 6,
  data: {
    kx: 20
  }
}]

export const createdBy = 'Ehya丶Calc'
