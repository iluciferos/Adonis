import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'pegawais'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments("id");
      table.string("nama");
      table.enu("gender", ["L", "P"]);
      table.integer("tinggi_badan");
      table.string("hobi");
      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
