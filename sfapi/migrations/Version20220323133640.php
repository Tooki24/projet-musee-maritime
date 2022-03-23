<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20220323133640 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE boat DROP FOREIGN KEY FK_D86E834A4B52E5B5');
        $this->addSql('DROP TABLE museum');
        $this->addSql('DROP INDEX IDX_D86E834A4B52E5B5 ON boat');
        $this->addSql('ALTER TABLE boat DROP museum_id');
        $this->addSql('ALTER TABLE image DROP FOREIGN KEY FK_C53D045FA1E84A29');
        $this->addSql('ALTER TABLE image DROP FOREIGN KEY FK_C53D045FF28D7E1C');
        $this->addSql('DROP INDEX IDX_C53D045FA1E84A29 ON image');
        $this->addSql('DROP INDEX IDX_C53D045FF28D7E1C ON image');
        $this->addSql('ALTER TABLE image DROP boat_id, DROP witness_id');
        $this->addSql('ALTER TABLE witness DROP FOREIGN KEY FK_CFF1AA0EA1E84A29');
        $this->addSql('DROP INDEX IDX_CFF1AA0EA1E84A29 ON witness');
        $this->addSql('ALTER TABLE witness DROP boat_id');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE museum (id INT AUTO_INCREMENT NOT NULL, name VARCHAR(255) CHARACTER SET utf8mb4 NOT NULL COLLATE `utf8mb4_unicode_ci`, address VARCHAR(255) CHARACTER SET utf8mb4 NOT NULL COLLATE `utf8mb4_unicode_ci`, phone_number VARCHAR(12) CHARACTER SET utf8mb4 DEFAULT NULL COLLATE `utf8mb4_unicode_ci`, date_opening TIME NOT NULL, date_closing TIME NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB COMMENT = \'\' ');
        $this->addSql('ALTER TABLE boat ADD museum_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE boat ADD CONSTRAINT FK_D86E834A4B52E5B5 FOREIGN KEY (museum_id) REFERENCES museum (id) ON UPDATE NO ACTION ON DELETE NO ACTION');
        $this->addSql('CREATE INDEX IDX_D86E834A4B52E5B5 ON boat (museum_id)');
        $this->addSql('ALTER TABLE image ADD boat_id INT DEFAULT NULL, ADD witness_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE image ADD CONSTRAINT FK_C53D045FA1E84A29 FOREIGN KEY (boat_id) REFERENCES boat (id) ON UPDATE NO ACTION ON DELETE NO ACTION');
        $this->addSql('ALTER TABLE image ADD CONSTRAINT FK_C53D045FF28D7E1C FOREIGN KEY (witness_id) REFERENCES witness (id) ON UPDATE NO ACTION ON DELETE NO ACTION');
        $this->addSql('CREATE INDEX IDX_C53D045FA1E84A29 ON image (boat_id)');
        $this->addSql('CREATE INDEX IDX_C53D045FF28D7E1C ON image (witness_id)');
        $this->addSql('ALTER TABLE witness ADD boat_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE witness ADD CONSTRAINT FK_CFF1AA0EA1E84A29 FOREIGN KEY (boat_id) REFERENCES boat (id) ON UPDATE NO ACTION ON DELETE NO ACTION');
        $this->addSql('CREATE INDEX IDX_CFF1AA0EA1E84A29 ON witness (boat_id)');
    }
}
