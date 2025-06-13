export const details = [{
  title: '普攻伤害',
  dmg: ({ talent }, dmg) => dmg(talent.a['技能伤害'], 'a')
}, {
  title: '忆灵弹射伤害-对单',
  params: { buff: true },
  dmg: ({ talent }, dmg) => {
    let dmg1 = dmg(talent.me['弹射攻击力百分比'], 'me') 
    let dmg2 = dmg(talent.me['群攻攻击力百分比'], 'me')
    return{
      dmg: dmg1.dmg + dmg2.dmg,
      avg: dmg1.avg + dmg2.avg
    }
  }
}, {
  title: '终结技伤害-对单',
  params: { Ulitmate: true },
  dmg: ({ talent }, dmg) => dmg(talent.q['技能伤害'], 'q')
}, {
  title: '忆灵生命值上限',
  dmg: ({ talent, attr, calc }) => {
    let masterHp = calc(attr.hp)
    let num = masterHp * talent.t['生命上限'] + talent.t['生命值']
    return {avg: num}
  }
}]

export const defDmgIdx = 2
export const mainAttr = 'atk,speed,cdmg'

export const buffs = [{
  title: '忆灵天赋：暴击伤害提高[cdmg]%',
  data: {
    cdmg: ({ talent }) => talent.mt['暴击伤害'] * 100 + talent.mt['额外暴击伤害'] * 100
  }
}, {
  check: ({ params }) => params.Ulitmate === true,
  title: '6命-神启的转呈者：终结技的暴击率固定为[cpct]%',
  cons: 6,
  data: {
    cpct: 100
  }
}]

export const createdBy = '77'
