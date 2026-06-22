import React from "react";

const modifier = (score: number) => Math.floor((score - 10) / 2);
const fmtMod = (mod: number) => (mod >= 0 ? `+${mod}` : `${mod}`);

export function CharacterSheetApp({ actor }: { actor: any }) {
  const system = actor.system;
  const attrs = system.attributes;

  const updateAttribute = (key: string, value: number) => {
    actor.update({ [`system.attributes.${key}`]: value });
  };

  const updateBiography = (value: string) => {
    actor.update({ "system.biography": value });
  };

  // derived purely from current doc state — recomputed every render, no local state needed
  const total = attrs.strength + attrs.agility + attrs.spirit;
  const totalMod = modifier(attrs.strength) + modifier(attrs.agility) + modifier(attrs.spirit);

  return (
    <div className="newsystem character-sheet">
      <h1>{actor.name}</h1>
      <div className="attributes">
        {(["strength", "agility", "spirit"] as const).map((key) => (
          <label key={key}>
            {key}
            <input
              type="number"
              value={attrs[key]}
              onChange={(e) => updateAttribute(key, Number(e.target.value))}
            />
            <span className="modifier">{fmtMod(modifier(attrs[key]))}</span>
          </label>
        ))}
      </div>
      <div className="totals">
        <span>Total: {total}</span>
        <span>Total mod: {fmtMod(totalMod)}</span>
      </div>
      <label>
        Biography
        <textarea
          defaultValue={system.biography}
          onBlur={(e) => updateBiography(e.target.value)}
        />
      </label>
    </div>
  );
}
