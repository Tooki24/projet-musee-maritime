<?php

namespace App\Entity;

use App\Repository\MuseumRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use ApiPlatform\Core\Annotation\ApiResource;
use Symfony\Component\Serializer\Annotation\Groups;


/**
 * @ORM\Entity(repositoryClass=MuseumRepository::class)
 * @ApiResource(
 *     collectionOperations={"get", "post"},
 *     itemOperations={"delete", "put"},
 *     normalizationContext={"groups"={"museum:read"}},
 *     denormalizationContext={"groups"={"museum:write"}},
 * )
 */
class Museum
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     * @Groups ({"museum:read", "museum:write"})
     */
    private $name;

    /**
     * @ORM\Column(type="string", length=255)
     * @Groups ({"museum:read", "museum:write"})
     */
    private $address;

    /**
     * @ORM\Column(type="string", length=12, nullable=true)
     * @Groups ({"museum:read", "museum:write"})
     */
    private $phoneNumber;

    /**
     * @ORM\Column(type="time")
     * @Groups ({"museum:read", "museum:write"})
     */
    private $dateOpening;

    /**
     * @ORM\Column(type="time")
     * @Groups ({"museum:read", "museum:write"})
     */
    private $dateClosing;

    /**
     * @ORM\OneToMany(targetEntity=Boat::class, mappedBy="museum")
     */
    private $boat;

    public function __construct()
    {
        $this->boat = new ArrayCollection();
        date_default_timezone_set('Europe/Paris');
    }

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

    public function getAddress(): ?string
    {
        return $this->address;
    }

    public function setAddress(string $address): self
    {
        $this->address = $address;

        return $this;
    }

    public function getPhoneNumber(): ?string
    {
        return $this->phoneNumber;
    }

    public function setPhoneNumber(?string $phoneNumber): self
    {
        $this->phoneNumber = $phoneNumber;

        return $this;
    }

    public function getDateOpening(): ?\DateTimeInterface
    {
        return $this->dateOpening;
    }

    public function setDateOpening(\DateTimeInterface $dateOpening): self
    {
        $this->dateOpening = $dateOpening;

        return $this;
    }

    public function getDateClosing(): ?\DateTimeInterface
    {
        return $this->dateClosing;
    }

    public function setDateClosing(\DateTimeInterface $dateClosing): self
    {
        $this->dateClosing = $dateClosing->format('H:i:s');

        return $this;
    }

    /**
     * @Groups ({"museum:read"})
     */
    public function getIsOpen()
    {
        $dateActual = date("h:i:s");
        if ($this->dateOpening <= $dateActual && $this->dateClosing >= $dateActual)
            return true;
        else
            return false;
    }

    /**
     * @return Collection<int, Boat>
     */
    public function getBoat(): Collection
    {
        return $this->boat;
    }

    public function addBoat(Boat $boat): self
    {
        if (!$this->boat->contains($boat)) {
            $this->boat[] = $boat;
            $boat->setMuseum($this);
        }

        return $this;
    }

    public function removeBoat(Boat $boat): self
    {
        if ($this->boat->removeElement($boat)) {
            // set the owning side to null (unless already changed)
            if ($boat->getMuseum() === $this) {
                $boat->setMuseum(null);
            }
        }

        return $this;
    }
}
