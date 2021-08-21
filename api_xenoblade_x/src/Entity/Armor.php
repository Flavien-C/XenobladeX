<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use App\Repository\ArmorRepository;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ApiResource()
 * @ORM\Entity(repositoryClass=ArmorRepository::class)
 */
class Armor
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
     * @ORM\Column(type="integer")
     */
    private $defense;

    /**
     * @ORM\Column(type="integer")
     */
    private $physical;

    /**
     * @ORM\Column(type="integer")
     */
    private $ether;

    /**
     * @ORM\Column(type="integer")
     */
    private $fire;

    /**
     * @ORM\Column(type="integer")
     */
    private $electric;

    /**
     * @ORM\Column(type="integer")
     */
    private $beam;

    /**
     * @ORM\Column(type="integer")
     */
    private $gravity;

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

    public function getDefense(): ?int
    {
        return $this->defense;
    }

    public function setDefense(int $defense): self
    {
        $this->defense = $defense;

        return $this;
    }

    public function getPhysical(): ?int
    {
        return $this->physical;
    }

    public function setPhysical(int $physical): self
    {
        $this->physical = $physical;

        return $this;
    }

    public function getEther(): ?int
    {
        return $this->ether;
    }

    public function setEther(int $ether): self
    {
        $this->ether = $ether;

        return $this;
    }

    public function getFire(): ?int
    {
        return $this->fire;
    }

    public function setFire(int $fire): self
    {
        $this->fire = $fire;

        return $this;
    }

    public function getElectric(): ?int
    {
        return $this->electric;
    }

    public function setElectric(int $electric): self
    {
        $this->electric = $electric;

        return $this;
    }

    public function getBeam(): ?int
    {
        return $this->beam;
    }

    public function setBeam(int $beam): self
    {
        $this->beam = $beam;

        return $this;
    }

    public function getGravity(): ?int
    {
        return $this->gravity;
    }

    public function setGravity(int $gravity): self
    {
        $this->gravity = $gravity;

        return $this;
    }
}
