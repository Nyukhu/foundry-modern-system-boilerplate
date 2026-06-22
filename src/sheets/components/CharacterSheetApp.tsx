import React, { useState } from "react";
import styles from "./CharacterSheetApp.module.scss";

const modifier = (score: number) => Math.floor((score - 10) / 2);
const fmtMod = (mod: number) => (mod >= 0 ? `+${mod}` : `${mod}`);

export function CharacterSheetApp({ actor }: { actor: Actor.Implementation }) {
  const system = actor.system;
  const attrs = system.attributes;
  const [chatMessage, setChatMessage] = useState("");

  const updateAttribute = (key: "strength" | "agility" | "spirit", value: number) => {
    actor.update({ system: { attributes: { [key]: value } } });
  };

  const updateBiography = (value: string) => {
    actor.update({ system: { biography: value } });
  };

  const sendChatMessage = () => {
    if (!chatMessage.trim()) return;
    ChatMessage.create({
      speaker: ChatMessage.getSpeaker({ actor }),
      content: chatMessage
    });
    setChatMessage("");
  };

  // derived purely from current doc state — recomputed every render, no local state needed
  const total = attrs.strength + attrs.agility + attrs.spirit;
  const totalMod = modifier(attrs.strength) + modifier(attrs.agility) + modifier(attrs.spirit);

  return (
    <div className={styles.sheet}>
      <h1>{actor.name}</h1>
      <div className={styles.attributes}>
        {(["strength", "agility", "spirit"] as const).map((key) => (
          <label className={styles.attributeLabel} key={key}>
            {key}
            <input
              type="number"
              value={attrs[key]}
              onChange={(e) => updateAttribute(key, Number(e.target.value))}
            />
            <span className={styles.modifier}>{fmtMod(modifier(attrs[key]))}</span>
          </label>
        ))}
      </div>
      <div className={styles.totals}>
        <span>Total: {total}</span>
        <span>Total mod: {fmtMod(totalMod)}</span>
      </div>
      <label className={styles.attributeLabel}>
        Biography
        <textarea
          defaultValue={system.biography}
          onBlur={(e) => updateBiography(e.target.value)}
        />
      </label>

      <div className={styles.chatRow}>
        <input
          type="text"
          placeholder="Say something..."
          value={chatMessage}
          onChange={(e) => setChatMessage(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendChatMessage()}
        />
        <button type="button" onClick={sendChatMessage}>
          Send to chat
        </button>
      </div>
    </div>
  );
}
