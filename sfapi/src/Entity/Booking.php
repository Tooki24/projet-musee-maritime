<?php

namespace App\Entity;

use App\Repository\BookingRepository;
use Doctrine\ORM\Mapping as ORM;
use ApiPlatform\Core\Annotation\ApiResource;
use Symfony\Component\Serializer\Annotation\Groups;
use Symfony\Component\Validator\Constraints as Assert;



/**
 * @ORM\Entity(repositoryClass=BookingRepository::class)
 * @ApiResource (
 *     collectionOperations={"post", "get"},
 *     itemOperations={"delete", "get", "patch"},
 *     shortName="plannings",
 *     normalizationContext={"groups"={"booking:read"}},
 *     denormalizationContext={"groups"={"booking:write"}}
 * )
 */
class Booking
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;


    /**
     * @ORM\Column(type="string", length=255)
     * @Groups ("booking:read", "booking:write")
     */
    private $name;

    /**
     * @ORM\Column(type="string", length=12)
     * @Groups ("booking:read", "booking:write")
     */
    private $phoneNumber;

    /**
     * @ORM\Column(type="datetime")
     * @Groups ("booking:read", "booking:write")
     */
    private $startDate;

    /**
     * @ORM\Column(type="datetime")
     * @Groups ("booking:read", "booking:write")
     */
    private $endDate;

    /**
     * @ORM\ManyToOne(targetEntity=Boat::class, inversedBy="booking")
     * @Groups ("booking:read", "booking:write")
     */
    private $boat;

    /**
     * @ORM\Column(type="integer")
     * @Groups ("booking:read", "booking:write")
     */
    private $nbPerson;

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

    public function getPhoneNumber(): ?string
    {
        return $this->phoneNumber;
    }

    public function setPhoneNumber(string $phoneNumber): self
    {
        $this->phoneNumber = $phoneNumber;

        return $this;
    }

    public function getStartDate(): ?\DateTimeInterface
    {
        return $this->startDate;
    }

    public function setStartDate(\DateTimeInterface $startDate): self
    {
        $this->startDate = $startDate;

        return $this;
    }

    public function getEndDate(): ?\DateTimeInterface
    {
        return $this->endDate;
    }

    public function setEndDate(\DateTimeInterface $endDate): self
    {
        $this->endDate = $endDate;

        return $this;
    }

    public function getBoat(): ?Boat
    {
        return $this->boat;
    }

    public function setBoat(?Boat $boat): self
    {
        $this->boat = $boat;

        return $this;
    }

    public function getNbPerson(): ?int
    {
        return $this->nbPerson;
    }

    public function setNbPerson(int $nbPerson): self
    {
        $this->nbPerson = $nbPerson;

        return $this;
    }
}
