<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20210819144728 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE armor (id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, name VARCHAR(255) NOT NULL, type VARCHAR(255) NOT NULL, defense INTEGER NOT NULL, physical INTEGER NOT NULL, ether INTEGER NOT NULL, fire INTEGER NOT NULL, electric INTEGER NOT NULL, beam INTEGER NOT NULL, gravity INTEGER NOT NULL)');
        $this->addSql('CREATE TABLE melee_weapon (id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, name VARCHAR(255) NOT NULL, type VARCHAR(255) NOT NULL, attribute VARCHAR(255) NOT NULL, attack INTEGER NOT NULL, stability INTEGER NOT NULL, cooldown DOUBLE PRECISION NOT NULL, tp_gain INTEGER NOT NULL)');
        $this->addSql('CREATE TABLE range_weapon (id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, name VARCHAR(255) NOT NULL, type VARCHAR(255) NOT NULL, attribute VARCHAR(255) NOT NULL, attack INTEGER NOT NULL, stability INTEGER NOT NULL, cooldown DOUBLE PRECISION NOT NULL, tp_gain INTEGER NOT NULL, amno INTEGER NOT NULL)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('DROP TABLE armor');
        $this->addSql('DROP TABLE melee_weapon');
        $this->addSql('DROP TABLE range_weapon');
    }
}
