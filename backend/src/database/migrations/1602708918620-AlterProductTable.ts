import {MigrationInterface, QueryRunner, TableColumn, TableForeignKey} from "typeorm";

export class AlterProductTable1602708918620 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn(
            "product",
            new TableColumn({
              name: "invoice",
              type: "int"
            })
          );
      
          await queryRunner.createForeignKey(
            "product",
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
