export class ItemData extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    const fields = foundry.data.fields;
    return {
      description: new fields.HTMLField({ initial: "" }),
      quantity: new fields.NumberField({ required: true, integer: true, initial: 1, min: 0 })
    };
  }
}
