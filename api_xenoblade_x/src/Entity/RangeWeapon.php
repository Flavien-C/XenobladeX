<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use App\Repository\RangeWeaponRepository;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ApiResource()
 * @ORM\Entity(repositoryClass=RangeWeaponRepository::class)
 */
class RangeWeapon
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $name;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $type;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $attribute;

    /**
     * @ORM\Column(type="integer")
     */
    private $attack;

    /**
     * @ORM\Column(type="integer")
     */
    private $stability;

    /**
     * @ORM\Column(type="float")
     */
    private $cooldown;

    /**
     * @ORM\Column(type="integer")
     */
    private $tpGain;

    /**
     * @ORM\Column(type="integer")
     */
    private $amno;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(string $name): self
    {
        $this->name = $name;

        return $this;
    }

    public function getType(): ?string
    {
        return $this->type;
    }

    public function setType(string $type): self
    {
        $this->type = $type;

        return $this;
    }

    public function getAttribute(): ?string
    {
        return $this->attribute;
    }

    public function setAttribute(string $attribute): self
    {
        $this->attribute = $attribute;

        return $this;
    }

    public function getAttack(): ?int
    {
        return $this->attack;
    }

    public function setAttack(int $attack): self
    {
        $this->attack = $attack;

        return $this;
    }

    public function getStability(): ?int
    {
        return $this->stability;
    }

    public function setStability(int $stability): self
    {
        $this->stability = $stability;

        return $this;
    }

    public function getCooldown(): ?float
    {
        return $this->cooldown;
    }

    public function setCooldown(float $cooldown): self
    {
        $this->cooldown = $cooldown;

        return $this;
    }

    public function getTpGain(): ?int
    {
        return $this->tpGain;
    }

    public function setTpGain(int $tpGain): self
    {
        $this->tpGain = $tpGain;

        return $this;
    }

    public function getAmno(): ?int
    {
        return $this->amno;
    }

    public function setAmno(int $amno): self
    {
        $this->amno = $amno;

        return $this;
    }
}
