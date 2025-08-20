import { Quest } from '@/types/quest';
import { Item } from '@/types/inventory';
import { Character } from '@/types/character';
import { Coins, Trophy } from 'lucide-react';

export const mockQuests: Quest[] = [
  {
    id: 1,
    title: "The Lost Artifact",
    description: "Venture into the ancient ruins to recover the mystical amulet that was stolen by goblins. The amulet is said to have the power to control time itself.",
    difficulty: "Easy",
    timeLimit: 30,
    goldReward: 150,
    xpReward: 200,
    specialRewards: ["Ancient Amulet", "Goblin Slayer Title", "Ruins Map Fragment"],
    minLevel: 1,
    location: "Forgotten Ruins",
    objectives: [
      {
        id: 1,
        title: "Find the entrance to the ruins",
        description: "The entrance is hidden behind a waterfall in the eastern part of the Misty Forest. Look for a path marked with ancient runes.",
        completed: false
      },
      {
        id: 2,
        title: "Defeat the goblin guards",
        description: "A group of goblin guards protect the entrance to the inner chamber. Defeat them to proceed further into the ruins.",
        completed: false
      },
      {
        id: 3,
        title: "Solve the ancient puzzle",
        description: "The door to the treasure room is locked with an ancient puzzle mechanism. Align the symbols correctly to unlock it.",
        completed: false
      },
      {
        id: 4,
        title: "Retrieve the amulet",
        description: "The amulet is placed on a pedestal in the center of the treasure room. Be careful of traps when approaching it.",
        completed: false
      }
    ]
  },
  {
    id: 2,
    title: "Dragon's Lair",
    description: "A fearsome dragon has been terrorizing the nearby village. Venture into its lair and defeat it to bring peace to the region.",
    difficulty: "Hard",
    timeLimit: 60,
    goldReward: 500,
    xpReward: 800,
    specialRewards: ["Dragon Scale Armor", "Dragon Slayer Title", "Fire Resistance Potion Recipe"],
    minLevel: 10,
    location: "Ember Mountain",
    objectives: [
      {
        id: 1,
        title: "Climb Ember Mountain",
        description: "The dragon's lair is located at the peak of Ember Mountain. Follow the treacherous path to reach the top.",
        completed: false
      },
      {
        id: 2,
        title: "Find the dragon's weakness",
        description: "Before confronting the dragon, discover its weakness by investigating its lair and talking to survivors of its attacks.",
        completed: false
      },
      {
        id: 3,
        title: "Defeat the dragon",
        description: "Confront the dragon in its lair and defeat it using its weakness. Be prepared for a challenging battle.",
        completed: false
      }
    ],
    requiredItems: ["Fire Resistance Potion", "Enchanted Sword"],
    recommendedStats: {
      attack: 15,
      defense: 12,
      magic: 10
    }
  },
  {
    id: 3,
    title: "The Haunted Manor",
    description: "A noble family has been plagued by supernatural occurrences in their manor. Investigate the source of the hauntings and put the restless spirits to rest.",
    difficulty: "Medium",
    timeLimit: 45,
    goldReward: 300,
    xpReward: 400,
    specialRewards: ["Ghostlight Lantern", "Spirit Whisperer Title", "Ectoplasm Sample"],
    minLevel: 5,
    location: "Ravenwood Estate",
    objectives: [
      {
        id: 1,
        title: "Interview the family members",
        description: "Speak with each member of the noble family to gather information about the hauntings and their history.",
        completed: false
      },
      {
        id: 2,
        title: "Explore the manor grounds",
        description: "Search the manor and its grounds for clues about the source of the supernatural activity.",
        completed: false
      },
      {
        id: 3,
        title: "Discover the family secret",
        description: "Uncover the dark secret that the family has been hiding, which is the cause of the hauntings.",
        completed: false
      },
      {
        id: 4,
        title: "Perform the cleansing ritual",
        description: "Using the knowledge you've gathered, perform a ritual to cleanse the manor and put the spirits to rest.",
        completed: false
      }
    ],
    requiredItems: ["Silver Mirror", "Blessed Candles"],
    recommendedStats: {
      magic: 8,
      luck: 6
    }
  },
  {
    id: 4,
    title: "The Alchemist's Request",
    description: "The town's alchemist needs rare ingredients for a powerful potion. Gather these ingredients from dangerous locations around the world.",
    difficulty: "Medium",
    timeLimit: 40,
    goldReward: 250,
    xpReward: 350,
    specialRewards: ["Potion of Invulnerability", "Alchemist's Apprentice Title", "Rare Recipe Book"],
    minLevel: 4,
    location: "Various Locations",
    objectives: [
      {
        id: 1,
        title: "Collect moonflowers from the Enchanted Grove",
        description: "Moonflowers only bloom at midnight in the Enchanted Grove, which is guarded by territorial fae creatures.",
        completed: false
      },
      {
        id: 2,
        title: "Obtain basilisk scales from the Sunless Caverns",
        description: "Venture into the Sunless Caverns to collect scales from a basilisk. Avoid its petrifying gaze.",
        completed: false
      },
      {
        id: 3,
        title: "Extract venom from the desert scorpion",
        description: "Travel to the Burning Sands to extract venom from the rare giant desert scorpion.",
        completed: false
      },
      {
        id: 4,
        title: "Return the ingredients to the alchemist",
        description: "Bring all collected ingredients back to the alchemist in town before they lose their potency.",
        completed: false
      }
    ]
  },
  {
    id: 5,
    title: "The Tournament of Champions",
    description: "Prove your worth by participating in the annual Tournament of Champions. Defeat opponents in various challenges to claim the grand prize.",
    difficulty: "Hard",
    timeLimit: 50,
    goldReward: 450,
    xpReward: 600,
    specialRewards: ["Champion's Crown", "Tournament Victor Title", "Enchanted Weapon of Choice"],
    minLevel: 8,
    location: "Royal Arena",
    objectives: [
      {
        id: 1,
        title: "Register for the tournament",
        description: "Visit the registration booth in the Royal Arena to sign up for the Tournament of Champions.",
        completed: false
      },
      {
        id: 2,
        title: "Win the archery contest",
        description: "Demonstrate your precision by hitting all targets in the archery competition.",
        completed: false
      },
      {
        id: 3,
        title: "Triumph in the melee combat round",
        description: "Defeat three opponents in succession in the melee combat round of the tournament.",
        completed: false
      },
      {
        id: 4,
        title: "Complete the magical challenge",
        description: "Solve a series of magical puzzles created by the court wizard as part of the tournament.",
        completed: false
      },
      {
        id: 5,
        title: "Defeat the reigning champion",
        description: "Face off against last year's champion in the final round of the tournament.",
        completed: false
      }
    ],
    recommendedStats: {
      attack: 12,
      defense: 10,
      magic: 8,
      luck: 8
    }
  },
  {
    id: 6,
    title: "The Merchant's Caravan",
    description: "Escort a wealthy merchant's caravan through bandit-infested territory to the neighboring kingdom.",
    difficulty: "Easy",
    timeLimit: 35,
    goldReward: 200,
    xpReward: 250,
    specialRewards: ["Merchant's Favor", "Foreign Trade Goods", "Map of Secret Trade Routes"],
    minLevel: 2,
    location: "Highroad Pass",
    objectives: [
      {
        id: 1,
        title: "Meet the merchant in town",
        description: "Find the merchant at the town square and agree on the terms for escorting his caravan.",
        completed: false
      },
      {
        id: 2,
        title: "Protect the caravan from bandits",
        description: "Fend off bandit attacks while traveling through the dangerous Highroad Pass.",
        completed: false
      },
      {
        id: 3,
        title: "Navigate the treacherous mountain path",
        description: "Guide the caravan safely through a narrow mountain path prone to rockslides.",
        completed: false
      },
      {
        id: 4,
        title: "Deliver the caravan to its destination",
        description: "Ensure the caravan reaches the neighboring kingdom's capital city intact.",
        completed: false
      }
    ]
  }
];

export const mockInventory: Item[] = [
  {
    id: 1,
    name: "Enchanted Sword",
    description: "A finely crafted sword imbued with magical energy.",
    type: "Weapon",
    rarity: "Rare",
    value: 350,
    stats: {
      attack: 15,
      magic: 5
    },
    equipped: true
  },
  {
    id: 2,
    name: "Dragon Scale Armor",
    description: "Armor forged from the scales of a defeated dragon. Provides excellent protection against fire.",
    type: "Armor",
    rarity: "Epic",
    value: 500,
    stats: {
      defense: 20,
      fireResistance: 50
    },
    equipped: true
  },
  {
    id: 3,
    name: "Health Potion",
    description: "A red potion that restores 50 health points when consumed.",
    type: "Potion",
    rarity: "Common",
    value: 25,
    useEffect: "Restored 50 health points."
  },
  {
    id: 4,
    name: "Mana Potion",
    description: "A blue potion that restores 30 mana points when consumed.",
    type: "Potion",
    rarity: "Common",
    value: 25,
    useEffect: "Restored 30 mana points."
  },
  {
    id: 5,
    name: "Ancient Amulet",
    description: "An amulet recovered from ancient ruins. It seems to slow down time around the wearer.",
    type: "Accessory",
    rarity: "Legendary",
    value: 1000,
    stats: {
      timeControl: 1,
      luck: 10
    }
  },
  {
    id: 6,
    name: "Scroll of Fireball",
    description: "A magical scroll that teaches the Fireball spell when used.",
    type: "Scroll",
    rarity: "Uncommon",
    value: 150,
    useEffect: "Learned the Fireball spell!"
  },
  {
    id: 7,
    name: "Ghostlight Lantern",
    description: "A special lantern that reveals invisible spirits and hidden passages.",
    type: "Tool",
    rarity: "Rare",
    value: 200,
    stats: {
      spiritSight: 1
    }
  },
  {
    id: 8,
    name: "Rusty Dagger",
    description: "A worn dagger that has seen better days. Still sharp enough to be useful.",
    type: "Weapon",
    rarity: "Common",
    value: 15,
    stats: {
      attack: 5
    }
  },
  {
    id: 9,
    name: "Wand of Lightning",
    description: "A wand that channels electrical energy. Can cast lightning bolts.",
    type: "Wand",
    rarity: "Rare",
    value: 300,
    stats: {
      magic: 12,
      lightningDamage: 20
    }
  },
  {
    id: 10,
    name: "Healing Herbs",
    description: "Medicinal herbs that can be used to treat wounds and ailments.",
    type: "Health",
    rarity: "Common",
    value: 10,
    useEffect: "Restored 20 health points and cured poison status."
  }
];

export const mockCharacter: Character = {
  name: "Eldrin",
  class: "Battlemage",
  level: 7,
  xp: 1450,
  gold: 875,
  currentHealth: 120,
  maxHealth: 150,
  stats: {
    attack: 14,
    defense: 12,
    magic: 18,
    luck: 8,
    enemiesDefeated: 127
  },
  skills: [
    {
      name: "Arcane Blast",
      description: "Channel magical energy into a powerful blast that damages enemies in a small area.",
      level: 3,
      type: "Offensive"
    },
    {
      name: "Flame Strike",
      description: "Engulf your weapon in magical flames, adding fire damage to your attacks.",
      level: 2,
      type: "Enhancement"
    },
    {
      name: "Mana Shield",
      description: "Create a protective barrier that absorbs damage at the cost of mana.",
      level: 2,
      type: "Defensive"
    },
    {
      name: "Teleport",
      description: "Instantly teleport a short distance, useful for escaping danger or repositioning.",
      level: 1,
      type: "Utility"
    }
  ],
  passiveAbilities: [
    {
      name: "Arcane Affinity",
      description: "Increases mana regeneration by 20% and reduces the cost of spells by 10%."
    },
    {
      name: "Combat Training",
      description: "Years of combat training grant a 15% chance to perform a critical strike with melee weapons."
    },
    {
      name: "Magical Insight",
      description: "Can identify magical items without the need for identification scrolls."
    }
  ],
  description: "A skilled battlemage who combines martial prowess with arcane magic.",
  background: "Eldrin was once an apprentice at the Royal Academy of Magic, but left to pursue a more practical application of his skills. He has since traveled the realm, offering his services to those in need while honing both his combat and magical abilities. His ultimate goal is to uncover the secrets of the ancient battlemages, whose techniques have been lost to time."
};

export const mockCompletedQuests = [
  {
    title: "The Lost Artifact",
    description: "Retrieved the mystical amulet from ancient ruins.",
    completedDate: "3 days ago",
    goldReward: 150,
    xpReward: 200
  },
  {
    title: "The Haunted Manor",
    description: "Investigated supernatural occurrences and put restless spirits to rest.",
    completedDate: "1 week ago",
    goldReward: 300,
    xpReward: 400
  },
  {
    title: "The Merchant's Caravan",
    description: "Escorted a merchant's caravan safely through bandit territory.",
    completedDate: "2 weeks ago",
    goldReward: 200,
    xpReward: 250
  }
];
