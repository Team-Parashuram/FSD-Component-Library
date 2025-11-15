"use client";

import { useState } from "react";
import {
  PixelHealthBar,
  PixelManaBar,
  PixelXPBar,
  PixelInventory,
  PixelInventorySlot,
  PixelAchievement,
  PixelDamageNumber,
} from "@/components/ui/pixel/pixel-game-ui";
import { PixelButton } from "@/components/ui/pixel/pixel-button";

export default function GameUIExamples() {
  const [hp, setHp] = useState(75);
  const [mp, setMp] = useState(50);
  const [xp, setXp] = useState(350);
  const [level, setLevel] = useState(12);
  const [showAchievement, setShowAchievement] = useState(false);
  const [damageNumbers, setDamageNumbers] = useState<Array<{ id: number; value: number; type: "damage" | "heal" | "critical" | "miss" }>>([]);

  const handleDamage = () => {
    setHp(Math.max(0, hp - 10));
    const id = Date.now();
    setDamageNumbers(prev => [...prev, { id, value: 10, type: "damage" }]);
    setTimeout(() => {
      setDamageNumbers(prev => prev.filter(d => d.id !== id));
    }, 1000);
  };

  const handleHeal = () => {
    setHp(Math.min(100, hp + 15));
    const id = Date.now();
    setDamageNumbers(prev => [...prev, { id, value: 15, type: "heal" }]);
    setTimeout(() => {
      setDamageNumbers(prev => prev.filter(d => d.id !== id));
    }, 1000);
  };

  const handleCritical = () => {
    setHp(Math.max(0, hp - 25));
    const id = Date.now();
    setDamageNumbers(prev => [...prev, { id, value: 25, type: "critical" }]);
    setTimeout(() => {
      setDamageNumbers(prev => prev.filter(d => d.id !== id));
    }, 1000);
  };

  return (
    <div className="container mx-auto px-4 py-16 space-y-24">
      {/* Health Bars */}
      <section>
        <h2 className="text-3xl font-bold mb-8 font-pixel">Health Bars</h2>
        
        <div className="space-y-8 max-w-2xl">
          <div>
            <h3 className="text-lg font-bold mb-4 font-pixel">Default Sizes</h3>
            <div className="space-y-4">
              <PixelHealthBar current={100} max={100} size="sm" label="HP" />
              <PixelHealthBar current={75} max={100} size="md" label="HP" />
              <PixelHealthBar current={30} max={100} size="lg" label="HP" />
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 font-pixel">Different Health States</h3>
            <div className="space-y-4">
              <PixelHealthBar current={85} max={100} label="High HP" />
              <PixelHealthBar current={45} max={100} label="Medium HP" />
              <PixelHealthBar current={15} max={100} label="Low HP" />
              <PixelHealthBar current={0} max={100} label="Dead" />
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 font-pixel">Without Labels</h3>
            <PixelHealthBar current={60} max={100} showLabel={false} />
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 font-pixel">Custom Color</h3>
            <PixelHealthBar current={70} max={100} color="#ff00ff" label="Shield" />
          </div>
        </div>
      </section>

      {/* Mana Bars */}
      <section>
        <h2 className="text-3xl font-bold mb-8 font-pixel">Mana Bars</h2>
        
        <div className="space-y-4 max-w-2xl">
          <PixelManaBar current={100} max={100} />
          <PixelManaBar current={60} max={100} />
          <PixelManaBar current={20} max={150} />
          <PixelManaBar current={mp} max={100} label="Magic" />
        </div>
      </section>

      {/* XP Bars */}
      <section>
        <h2 className="text-3xl font-bold mb-8 font-pixel">Experience Bars</h2>
        
        <div className="space-y-4 max-w-2xl">
          <PixelXPBar currentXP={500} requiredXP={1000} level={15} />
          <PixelXPBar currentXP={xp} requiredXP={500} level={level} />
          <PixelXPBar currentXP={250} requiredXP={500} level={5} showLevel={false} />
          <PixelXPBar currentXP={950} requiredXP={1000} level={20} />
        </div>
      </section>

      {/* Combined Stats */}
      <section>
        <h2 className="text-3xl font-bold mb-8 font-pixel">Character Stats</h2>
        
        <div className="max-w-2xl border-4 border-black p-6 bg-white dark:bg-[#2a2a2a] shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
          <div className="mb-4 flex items-center gap-4">
            <div className="w-20 h-20 border-4 border-black bg-[#ff8c00] flex items-center justify-center text-4xl">
              🧙
            </div>
            <div>
              <h3 className="text-2xl font-bold font-pixel">Wizard</h3>
              <p className="text-sm opacity-70">Level {level}</p>
            </div>
          </div>
          
          <div className="space-y-3">
            <PixelHealthBar current={hp} max={100} />
            <PixelManaBar current={mp} max={100} />
            <PixelXPBar currentXP={xp} requiredXP={500} level={level} showLevel={false} />
          </div>

          <div className="mt-6 flex gap-2">
            <PixelButton size="sm" variant="destructive" onClick={handleDamage}>
              Take Damage
            </PixelButton>
            <PixelButton size="sm" variant="secondary" onClick={handleHeal}>
              Heal
            </PixelButton>
            <PixelButton size="sm" variant="default" onClick={handleCritical}>
              Critical Hit
            </PixelButton>
          </div>

          {/* Damage Numbers Display */}
          <div className="relative mt-6 h-20 flex items-center justify-center">
            {damageNumbers.map(dmg => (
              <div key={dmg.id} className="absolute">
                <PixelDamageNumber value={dmg.value} type={dmg.type} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Inventory */}
      <section>
        <h2 className="text-3xl font-bold mb-8 font-pixel">Inventory System</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4 font-pixel">Basic Inventory</h3>
            <PixelInventory columns={5} title="Backpack">
              <PixelInventorySlot item="⚔️" />
              <PixelInventorySlot item="🛡️" count={1} rarity="rare" />
              <PixelInventorySlot item="💊" count={5} rarity="common" />
              <PixelInventorySlot item="🔮" rarity="epic" />
              <PixelInventorySlot item="👑" rarity="legendary" />
              <PixelInventorySlot isEmpty />
              <PixelInventorySlot isEmpty />
              <PixelInventorySlot isEmpty />
              <PixelInventorySlot isEmpty />
              <PixelInventorySlot isEmpty />
            </PixelInventory>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 font-pixel">Full Inventory</h3>
            <PixelInventory columns={4} title="Storage">
              <PixelInventorySlot item="💎" count={10} rarity="rare" />
              <PixelInventorySlot item="🪙" count={99} rarity="common" />
              <PixelInventorySlot item="🗡️" rarity="epic" />
              <PixelInventorySlot item="🏹" count={25} rarity="common" />
              <PixelInventorySlot item="🧪" count={3} rarity="rare" />
              <PixelInventorySlot item="📜" count={7} rarity="common" />
              <PixelInventorySlot item="🔑" count={2} rarity="legendary" />
              <PixelInventorySlot item="⚗️" rarity="epic" />
            </PixelInventory>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 font-pixel">Equipment Slots</h3>
            <PixelInventory columns={3} title="Equipment">
              <PixelInventorySlot item="🪖" rarity="rare" />
              <PixelInventorySlot item="👕" rarity="epic" />
              <PixelInventorySlot item="🥾" rarity="common" />
              <PixelInventorySlot item="⚔️" rarity="legendary" />
              <PixelInventorySlot item="🛡️" rarity="epic" />
              <PixelInventorySlot item="💍" rarity="legendary" />
            </PixelInventory>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 font-pixel">6-Column Grid</h3>
            <PixelInventory columns={6} title="Quick Items">
              <PixelInventorySlot item="🍖" count={10} />
              <PixelInventorySlot item="🍺" count={5} />
              <PixelInventorySlot item="🧨" count={3} />
              <PixelInventorySlot isEmpty />
              <PixelInventorySlot isEmpty />
              <PixelInventorySlot isEmpty />
            </PixelInventory>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section>
        <h2 className="text-3xl font-bold mb-8 font-pixel">Achievement Notifications</h2>
        
        <div className="space-y-4">
          <PixelAchievement
            variant="bronze"
            title="First Steps"
            description="Complete your first quest"
            icon="🥉"
            points={10}
          />

          <PixelAchievement
            variant="silver"
            title="Experienced"
            description="Reach level 25"
            icon="🥈"
            points={25}
          />

          <PixelAchievement
            variant="gold"
            title="Master"
            description="Defeat 100 enemies"
            icon="🥇"
            points={50}
          />

          <PixelAchievement
            variant="platinum"
            title="Legend"
            description="Complete all achievements"
            icon="👑"
            points={100}
          />

          <PixelAchievement
            variant="default"
            title="Treasure Hunter"
            description="Collect 1000 gold coins"
            icon="💰"
            points={30}
          />
        </div>

        <div className="mt-8">
          <PixelButton onClick={() => setShowAchievement(!showAchievement)}>
            Toggle Achievement
          </PixelButton>
          {showAchievement && (
            <div className="fixed top-4 right-4 z-50">
              <PixelAchievement
                variant="gold"
                title="Test Achievement"
                description="You clicked the button!"
                icon="🎉"
                points={5}
              />
            </div>
          )}
        </div>
      </section>

      {/* Damage Numbers */}
      <section>
        <h2 className="text-3xl font-bold mb-8 font-pixel">Damage Numbers</h2>
        
        <div className="border-4 border-black p-8 bg-white dark:bg-[#2a2a2a] shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
          <div className="flex items-center justify-center gap-8 flex-wrap">
            <PixelDamageNumber value={50} type="damage" />
            <PixelDamageNumber value={25} type="heal" />
            <PixelDamageNumber value={100} type="critical" />
            <PixelDamageNumber value={0} type="miss" />
          </div>
        </div>
      </section>

      {/* Usage Information */}
      <section className="border-4 border-black p-8 bg-[#f5f5dc] dark:bg-[#2a2a2a] shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
        <h2 className="text-2xl font-bold mb-4 font-pixel">Usage Examples</h2>
        <div className="space-y-4 font-mono text-sm">
          <div>
            <p className="font-bold mb-2">Health Bar:</p>
            <code className="block bg-white dark:bg-black p-4 border-2 border-black overflow-x-auto">
              {`<PixelHealthBar current={75} max={100} label="HP" />`}
            </code>
          </div>
          
          <div>
            <p className="font-bold mb-2">Inventory with Items:</p>
            <code className="block bg-white dark:bg-black p-4 border-2 border-black overflow-x-auto">
              {`<PixelInventory columns={5} title="Backpack">
  <PixelInventorySlot item="⚔️" rarity="legendary" />
  <PixelInventorySlot item="💊" count={5} />
  <PixelInventorySlot isEmpty />
</PixelInventory>`}
            </code>
          </div>
          
          <div>
            <p className="font-bold mb-2">Achievement Notification:</p>
            <code className="block bg-white dark:bg-black p-4 border-2 border-black overflow-x-auto">
              {`<PixelAchievement
  variant="gold"
  title="Master"
  description="Defeat 100 enemies"
  icon="🥇"
  points={50}
/>`}
            </code>
          </div>
        </div>
      </section>
    </div>
  );
}
