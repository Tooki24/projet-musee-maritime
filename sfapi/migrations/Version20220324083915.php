<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20220324083915 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE witness ADD boat_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE witness ADD CONSTRAINT FK_CFF1AA0EA1E84A29 FOREIGN KEY (boat_id) REFERENCES boat (id)');
        $this->addSql('CREATE INDEX IDX_CFF1AA0EA1E84A29 ON witness (boat_id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE witness DROP FOREIGN KEY FK_CFF1AA0EA1E84A29');
        $this->addSql('DROP INDEX IDX_CFF1AA0EA1E84A29 ON witness');
        $this->addSql('ALTER TABLE witness DROP boat_id');
    }
}
