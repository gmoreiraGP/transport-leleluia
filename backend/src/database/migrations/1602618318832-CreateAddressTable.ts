import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
  TableColumn
} from "typeorm";

export class CreateAddressTable1602618318832 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "address",
        columns: [
          {
            name: "id",
            type: "int",
            isPrimary: true,
            isGenerated: true,
            generationStrategy: "increment"
          },
          {
            name: "receiverName",
            type: "varchar"
          },
          {
            name: "phone",
            type: "varchar"
          },
          {
            name: "document",
            type: "varchar"
          },
          {
            name: "place",
            type: "varchar"
          },
          {
            name: "number",
            type: "varchar"
          },
          {
            name: "cep",
            type: "varchar"
          },
          {
            name: "setor",
            type: "varchar"
          },
          {
            name: "city",
            type: "varchar"
          }
        ]
      })
    );
   
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("address");
    // await queryRunner.query('DROP EXTENSION "uuid-ossp"');
  }
}
