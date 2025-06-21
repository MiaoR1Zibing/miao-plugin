export const details = [{
  title: '普攻伤害',
  dmg: ({ talent }, dmg) => dmg(talent.a['技能伤害'], 'a')
}, {
  title: '天赋追加伤害',
  dmg: ({ talent }, dmg) => dmg(talent.t['技能伤害'], 't')
}, {
  title: '战技伤害-中心目标',
  dmg: ({ talent }, dmg) => dmg(talent.e['技能伤害'], 'e')
}, {
  title: '终结技0记录值保底伤害-对单',
  dmg: ({ talent, cons, attr }, dmg) => {
    let a_dmg = dmg(talent.q['技能伤害'], `q`)
    let b_dmg = dmg(talent.q['相邻目标伤害'], `q`)
    let _ratio = 0.12
    if (attr.speed >= 140) {
      _ratio *= attr.speed >= 170 ? 2 : 1.5
    }
    if (cons === 6) {
      _ratio *= 1.248
    } 
    if (cons > 0) {
      _ratio *= 1.5
    }
    let _dmg = {
      dmg: a_dmg.dmg+b_dmg.dmg+(2*a_dmg.dmg+b_dmg.dmg)*_ratio,
      avg: a_dmg.avg+b_dmg.avg+(2*a_dmg.avg+b_dmg.avg)*_ratio
    }
    return _dmg
  }
}, {
  title: '4魂附加伤害',
  cons: 4,
  dmg: ({ talent }, dmg) => dmg(0.5)
}]

export const defDmgIdx = 1
export const mainAttr = 'atk,cdmg,speed'

export const buffs = [{
  check: ({ attr }) => attr.speed >= 140,
  title: '行迹-神行宝鞋：赛飞儿的速度大于等于 [_speed] 时，暴击率提高 [cpct]% ，获得的记录值提高 50% / 100% 。',
  tree: 1,
  data: {
    _speed: ({ attr }) => attr.speed >= 170 ? 170 : 140,
    cpct: ({ attr }) => attr.speed >= 170 ? 50 : 25
 }
}, {
  title: '行迹-三百侠盗：赛飞儿会记录我方目标对【老主顾】以外的敌方目标造成的非真实伤害的 8% ，不记录溢出伤害',
  tree: 2
}, {
  title: '行迹-偷天换日：天赋的追加攻击造成的暴击伤害提高 100% 。赛飞儿在场时，敌方全体目标受到的伤害提高 40%',
  tree: 3,
  data: {
    tCdmg: 100,
    enemydmg: 40
  }
}, {
  title: '赛飞儿记录的伤害值为原记录值的 150% 。施放天赋的追加攻击时，赛飞儿的攻击力提高 80% ，持续 2 回合',
  cons: 1,
  data: {
    atkPct: 80
 }
}, {
  title: '赛飞儿2魂：赛飞儿击中敌方目标时，有 120% 的基础概率使其受到的伤害提高 30% ，持续 2 回合',
  cons: 2,
  data: {
    enemydmg: 30
 }
}, {
  title: '赛飞儿4魂：【老主顾】受到我方目标攻击后，赛飞儿对其造成等同于赛飞儿 50% 攻击力的量子属性附加伤害',
  cons: 4
}, {
  title: '赛飞儿6魂：赛飞儿天赋的追加攻击造成的伤害提高 350% ，记录时额外记录该攻击造成的非溢出伤害的 16% 。施放终结技清空记录值后，返还本次清除记录值的 20% ',
  cons: 6,
  data: {
    tDmg: 350
 }
}]

export const createdBy = '77惨惨77'
