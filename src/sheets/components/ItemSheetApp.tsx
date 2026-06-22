import React from "react";
import styles from "./ItemSheetApp.module.scss";

export function ItemSheetApp({ item }: { item: any }) {
  const system = item.system;

  const updateQuantity = (value: number) => {
    item.update({ "system.quantity": value });
  };

  const updateDescription = (value: string) => {
    item.update({ "system.description": value });
  };

  return (
    <div className={styles.sheet}>
      <h1>{item.name}</h1>
      <label className={styles.label}>
        Quantity
        <input
          type="number"
          min={0}
          value={system.quantity}
          onChange={(e) => updateQuantity(Number(e.target.value))}
        />
      </label>
      <label className={styles.label}>
        Description
        <textarea
          defaultValue={system.description}
          onBlur={(e) => updateDescription(e.target.value)}
        />
      </label>
    </div>
  );
}
