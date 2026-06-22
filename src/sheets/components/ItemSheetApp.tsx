import React from "react";

export function ItemSheetApp({ item }: { item: any }) {
  const system = item.system;

  const updateQuantity = (value: number) => {
    item.update({ "system.quantity": value });
  };

  const updateDescription = (value: string) => {
    item.update({ "system.description": value });
  };

  return (
    <div className="newsystem item-sheet">
      <h1>{item.name}</h1>
      <label>
        Quantity
        <input
          type="number"
          min={0}
          value={system.quantity}
          onChange={(e) => updateQuantity(Number(e.target.value))}
        />
      </label>
      <label>
        Description
        <textarea
          defaultValue={system.description}
          onBlur={(e) => updateDescription(e.target.value)}
        />
      </label>
    </div>
  );
}
