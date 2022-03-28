<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20220328140924 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE boat (id INT AUTO_INCREMENT NOT NULL, name VARCHAR(255) NOT NULL, details LONGTEXT DEFAULT NULL, lauch_year DATE NOT NULL, owner_name VARCHAR(255) NOT NULL, length INT NOT NULL, materials VARCHAR(255) DEFAULT NULL, type VARCHAR(255) NOT NULL, restoration DATE DEFAULT NULL, nb_max_visitor INT NOT NULL, is_bookable TINYINT(1) NOT NULL, longitude INT NOT NULL, latitude INT NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE booking (id INT AUTO_INCREMENT NOT NULL, boat_id INT DEFAULT NULL, name VARCHAR(255) NOT NULL, phone_number VARCHAR(12) NOT NULL, start_date DATETIME NOT NULL, end_date DATETIME NOT NULL, INDEX IDX_E00CEDDEA1E84A29 (boat_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE image (id INT AUTO_INCREMENT NOT NULL, boat_id INT DEFAULT NULL, name VARCHAR(255) NOT NULL, file VARCHAR(255) NOT NULL, INDEX IDX_C53D045FA1E84A29 (boat_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE timetable (id INT AUTO_INCREMENT NOT NULL, opening_hours TIME NOT NULL, closing_hours TIME NOT NULL, day VARCHAR(255) NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE witness (id INT AUTO_INCREMENT NOT NULL, boat_id INT DEFAULT NULL, file LONGTEXT NOT NULL, INDEX IDX_CFF1AA0EA1E84A29 (boat_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE booking ADD CONSTRAINT FK_E00CEDDEA1E84A29 FOREIGN KEY (boat_id) REFERENCES boat (id)');
        $this->addSql('ALTER TABLE image ADD CONSTRAINT FK_C53D045FA1E84A29 FOREIGN KEY (boat_id) REFERENCES boat (id)');
        $this->addSql('ALTER TABLE witness ADD CONSTRAINT FK_CFF1AA0EA1E84A29 FOREIGN KEY (boat_id) REFERENCES boat (id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE booking DROP FOREIGN KEY FK_E00CEDDEA1E84A29');
        $this->addSql('ALTER TABLE image DROP FOREIGN KEY FK_C53D045FA1E84A29');
        $this->addSql('ALTER TABLE witness DROP FOREIGN KEY FK_CFF1AA0EA1E84A29');
        $this->addSql('DROP TABLE boat');
        $this->addSql('DROP TABLE booking');
        $this->addSql('DROP TABLE image');
        $this->addSql('DROP TABLE timetable');
        $this->addSql('DROP TABLE witness');
    }
}
