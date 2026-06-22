import React from "react";
import { createRoot, type Root } from "react-dom/client";
import { CharacterSheetApp } from "./components/CharacterSheetApp";

export class CharacterSheet extends foundry.applications.sheets.ActorSheetV2 {
  static DEFAULT_OPTIONS = {
    classes: ["newsystem", "sheet", "actor"],
    position: { width: 600, height: 480 }
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
    this.#root.render(React.createElement(CharacterSheetApp, { actor: this.document }));
  }

  async close(options: unknown) {
    this.#root?.unmount();
    this.#root = null;
    return super.close(options);
  }
}
