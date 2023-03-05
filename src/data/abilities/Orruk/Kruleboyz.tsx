import { Ability, AbilityType, BattleTraits } from '../../../models/Ability';
import { Phase, PhaseType, Turn } from '../../../models/Phase';

export const kruleboyzBattleTraits: BattleTraits = {
  Kruleboyz: [
    {
      name: 'Dirty Tricks',
      type: AbilityType.BattleTrait,
      phaseRules: [
        {
          type: PhaseType.Affects,
          phases: [Phase.Hero],
          turns: [Turn.Yours]
        }
      ],
      tags: ['Kruleboyz'],
      description: ''
    },
    {
      name: 'Kruleboyz Waagh!',
      type: AbilityType.BattleTrait,
      phaseRules: [
        { type: PhaseType.UsedIn, phases: [Phase.Combat], turns: [Turn.Yours, Turn.Opponents] }
      ],
      tags: ['Kruleboyz'],
      description:
        'Once per battle, in the combat phase, when you pick a friendly KRULEBOYZ general to fight, you can say that they are calling a Kruleboyz Waaagh!. If you do so, pick up to 2 other friendly KRULEBOYZ units wholly within 18” of that general and that have not yet fought in that combat phase. That general and the units you picked can fight one after the other in the order of your choice.'
    },
    {
      name: 'Venom-encrusted Weapons',
      type: AbilityType.BattleTrait,
      phaseRules: [
        {
          type: PhaseType.Affects,
          phases: [Phase.Combat, Phase.Shooting],
          turns: [Turn.Yours, Turn.Opponents]
        }
      ],
      tags: ['Kruleboyz'],
      description:
        'If the unmodified hit roll for an attack made by a KRULEBOYZ ORRUK model is 6, that attack causes a number of mortal wounds to the target equal to the weapon’s Damage characteristic and the attack sequence ends (do not make a wound roll or save roll). This ability has no effect on attacks made by a mount unless noted otherwise.'
    }
  ]
};
