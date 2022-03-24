<?php

namespace App\Entity;

use App\Repository\TimetableRepository;
use Doctrine\ORM\Mapping as ORM;
use ApiPlatform\Core\Annotation\ApiResource;
use Symfony\Component\Serializer\Annotation\Groups;



/**
 * @ORM\Entity(repositoryClass=TimetableRepository::class)
 * @ApiResource(
 *     collectionOperations={"get"},
 *     itemOperations={"get", "patch"},
 *     shortName="horaires",
 *     normalizationContext={"groups"={"timetable:read"}},
 *     denormalizationContext={"groups"={"timetable:write"}}

 * )
 *
 */
class Timetable
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="time")
     * @Groups ({"timetable:read", "timetable:write"})
     */
    private $openingHours;

    /**
     * @ORM\Column(type="time")
     * @Groups ({"timetable:read", "timetable:write"})
     */
    private $closingHours;

    /**
     * @ORM\Column(type="string", length=255)
     * @Groups ({"timetable:read", "timetable:write"})
     */
    private $day;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getOpeningHours(): ?\DateTimeInterface
    {
        return $this->openingHours;
    }

    public function setOpeningHours(\DateTimeInterface $OpeningHours): self
    {
        $this->openingHours = $OpeningHours;

        return $this;
    }

    public function getClosingHours(): ?\DateTimeInterface
    {
        return $this->closingHours;
    }

    public function setClosingHours(\DateTimeInterface $closingHours): self
    {
        $this->closingHours = $closingHours;

        return $this;
    }

    public function getDay(): ?string
    {
        return $this->day;
    }

    public function setDay(string $day): self
    {
        $this->day = $day;

        return $this;
    }
}
