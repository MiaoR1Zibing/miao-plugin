export const details = [{
  title: '卡厄斯兰那生命值上限',
  params: { Ultimate: true },
  dmg: ({ attr, calc }) => {
    return {
      avg: Math.min(calc(attr.hp))
    }
  }
}, {
  title: '卡厄斯兰那攻击力',
  params: { Ultimate: true },
  dmg: ({ attr, calc }) => {
    return {
      avg: Math.min(calc(attr.atk))
    }
  }
}, {
  title: '支柱•死星天裁(4毁伤)',
  params: { Ultimate: true },
  dmg: ({ attr, calc, talent, cons }, { basic }) => {
    let basicDmg = basic(calc(attr.atk)*talent.e2['技能伤害'], 'e')
    let numavg = basicDmg.avg
    let numdmg = basicDmg.dmg
    if (cons > 5){
      numavg *= 1.35
      numdmg *= 1.35
    }
    return{
      avg: numavg,
      dmg: numdmg
    }
  }
}, {
  title: '灾厄•弑魂焚诏(5层对5)',
  params: { Ultimate: true },
  dmg: ({ attr, calc, talent }, { basic }) => basic(calc(attr.atk)*(talent.e1['技能伤害']*5 + talent.e1['随机伤害']*4)*(1+0.2*5), 'e')
}, {
  title: '创生•血棘渡亡(对主目标)',
  params: { Ultimate: true },
  dmg: ({ attr, calc, talent }, { basic }) => basic(calc(attr.atk)*talent.a2['技能伤害'], 'a')
}]

export const defDmgIdx = 2
export const mainAttr = 'atk,cpct,cdmg'

export const buffs = [{
  title: '天赋-此身为炬：暴击伤害提高[cdmg]%',
  data: {
    cdmg: ({ talent }) => talent.t['暴伤提高'] * 100
  }
}, {
  check: ({ params }) => params.Ultimate === true,
  title: '天赋-命运•此躯即神：攻击力提高[atkPct]%,生命上限提高[hpPct]%',
  data: {
    atkPct: ({ talent }) => talent.t2['攻击力提高'],
    hpPct: ({ talent }) => talent.t2['生命上限提高']
  }
}, {
  title: '行迹-身承炎炬万千：造成的伤害提高45%',
  tree: 2,
  data: {
    dmg: 45
  }
}, {
  title: '行迹-照见英雄本色：造成的伤害提高[atkPct]%',
  tree: 3,
  data: {
    atkPct: 100
  }
}, {
  check: ({ params }) => params.Ultimate === true,
  title: '白厄1魂：暴击伤害提高40%',
  cons: 1,
  data: {
    cdmg: 40
  }
}, {
  check: ({ params }) => params.Ultimate === true,
  title: '白厄2魂：物理属性抗性穿透提高20%',
  cons: 2,
  data: {
    kx: 20
  }
}, {
  check: ({ params }) => params.Ultimate === true,
  title: '白厄6魂：附加总伤害值36%的真实伤害',
  cons: 6
}]

export const createdBy = '77惨惨77'
