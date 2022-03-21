<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20220321075509 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE boat ADD museum_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE boat ADD CONSTRAINT FK_D86E834A4B52E5B5 FOREIGN KEY (museum_id) REFERENCES museum (id)');
        $this->addSql('CREATE INDEX IDX_D86E834A4B52E5B5 ON boat (museum_id)');
        $this->addSql('ALTER TABLE booking ADD boat_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE booking ADD CONSTRAINT FK_E00CEDDEA1E84A29 FOREIGN KEY (boat_id) REFERENCES boat (id)');
        $this->addSql('CREATE INDEX IDX_E00CEDDEA1E84A29 ON booking (boat_id)');
        $this->addSql('ALTER TABLE image ADD boat_id INT DEFAULT NULL, ADD witness_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE image ADD CONSTRAINT FK_C53D045FA1E84A29 FOREIGN KEY (boat_id) REFERENCES boat (id)');
        $this->addSql('ALTER TABLE image ADD CONSTRAINT FK_C53D045FF28D7E1C FOREIGN KEY (witness_id) REFERENCES witness (id)');
        $this->addSql('CREATE INDEX IDX_C53D045FA1E84A29 ON image (boat_id)');
        $this->addSql('CREATE INDEX IDX_C53D045FF28D7E1C ON image (witness_id)');
        $this->addSql('ALTER TABLE witness ADD boat_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE witness ADD CONSTRAINT FK_CFF1AA0EA1E84A29 FOREIGN KEY (boat_id) REFERENCES boat (id)');
        $this->addSql('CREATE INDEX IDX_CFF1AA0EA1E84A29 ON witness (boat_id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE boat DROP FOREIGN KEY FK_D86E834A4B52E5B5');
        $this->addSql('DROP INDEX IDX_D86E834A4B52E5B5 ON boat');
        $this->addSql('ALTER TABLE boat DROP museum_id');
        $this->addSql('ALTER TABLE booking DROP FOREIGN KEY FK_E00CEDDEA1E84A29');
        $this->addSql('DROP INDEX IDX_E00CEDDEA1E84A29 ON booking');
        $this->addSql('ALTER TABLE booking DROP boat_id');
        $this->addSql('ALTER TABLE image DROP FOREIGN KEY FK_C53D045FA1E84A29');
        $this->addSql('ALTER TABLE image DROP FOREIGN KEY FK_C53D045FF28D7E1C');
        $this->addSql('DROP INDEX IDX_C53D045FA1E84A29 ON image');
        $this->addSql('DROP INDEX IDX_C53D045FF28D7E1C ON image');
        $this->addSql('ALTER TABLE image DROP boat_id, DROP witness_id');
        $this->addSql('ALTER TABLE witness DROP FOREIGN KEY FK_CFF1AA0EA1E84A29');
        $this->addSql('DROP INDEX IDX_CFF1AA0EA1E84A29 ON witness');
        $this->addSql('ALTER TABLE witness DROP boat_id');
    }
}
