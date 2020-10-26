import {MigrationInterface, QueryRunner, TableColumn, TableForeignKey} from "typeorm";

export class AlterAddressTable1602708934104 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn(
            "address",
            new TableColumn({
              name: "invoice",
              type: "int"
            })
          );
      
          await queryRunner.createForeignKey(
            "address",
            new TableForeignKey({
              columnNames: ["invoice"],
              referencedColumnNames: ["id"],
              referencedTableName: "invoices",
              onDelete: "CASCADE"
            })
          );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
