import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
  TableColumn
} from "typeorm";

export class CreateInvoicesTables1602617376808 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {

    await queryRunner.createTable(
      new Table({
        name: "invoices",
        columns: [
          {
            name: "id",
            type: "int",
            isPrimary: true,
            isGenerated: true,
            generationStrategy: "increment"
          },
          {
            name: "companyName",
            type: "varchar"
          },
          {
            name: "numberNote",
            type: "varchar"
          },
          {
            name: "document",
            type: "varchar"
          },
          {
            name: "emission",
            type: "timestamp"
          }
        ]
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("invoices");
  }
}
