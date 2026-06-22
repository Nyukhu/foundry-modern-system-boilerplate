import React from "react";
import { createRoot, type Root } from "react-dom/client";
import { ItemSheetApp } from "./components/ItemSheetApp";

export class ItemSheet extends foundry.applications.sheets.ItemSheetV2 {
  static DEFAULT_OPTIONS = {
    classes: ["newsystem", "sheet", "item"],
    position: { width: 480, height: 360 }
  };

  #root: Root | null = null;

  async _prepareContext(_options: unknown) {
    return { document: this.document };
  }

  async _renderHTML(context: unknown, _options: unknown) {
    return context;
  }

  _replaceHTML(_result: unknown, content: HTMLElement, _options: unknown) {
    if (!this.#root) this.#root = createRoot(content);
    this.#root.render(React.createElement(ItemSheetApp, { item: this.document }));
  }

  async close(options: unknown) {
    this.#root?.unmount();
    this.#root = null;
    return super.close(options);
  }
}
