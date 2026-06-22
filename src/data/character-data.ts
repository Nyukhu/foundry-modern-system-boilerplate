export class CharacterData extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    const fields = foundry.data.fields;
    return {
      biography: new fields.HTMLField({ initial: "" }),
      attributes: new fields.SchemaField({
        strength: new fields.NumberField({ required: true, integer: true, initial: 10 }),
        agility: new fields.NumberField({ required: true, integer: true, initial: 10 }),
        spirit: new fields.NumberField({ required: true, integer: true, initial: 10 })
      })
    };
  }
}
