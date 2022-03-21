<?php

namespace App\Entity;

use App\Repository\BoatRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=BoatRepository::class)
 */
class Boat
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
     * @ORM\Column(type="text", nullable=true)
     */
    private $details;

    /**
     * @ORM\Column(type="date")
     */
    private $lauchYear;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $ownerName;

    /**
     * @ORM\Column(type="integer")
     */
    private $length;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $materials;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $type;

    /**
     * @ORM\Column(type="date", nullable=true)
     */
    private $restoration;

    /**
     * @ORM\Column(type="integer")
     */
    private $nbMaxVisitor;

    /**
     * @ORM\Column(type="boolean")
     */
    private $isBookable;

    /**
     * @ORM\Column(type="integer")
     */
    private $longitude;

    /**
     * @ORM\Column(type="integer")
     */
    private $latitude;

    /**
     * @ORM\ManyToOne(targetEntity=Museum::class, inversedBy="boat")
     */
    private $museum;

    /**
     * @ORM\OneToMany(targetEntity=Booking::class, mappedBy="boat")
     */
    private $booking;

    /**
     * @ORM\OneToMany(targetEntity=Image::class, mappedBy="boat")
     */
    private $image;

    /**
     * @ORM\OneToMany(targetEntity=Witness::class, mappedBy="boat")
     */
    private $witness;

    public function __construct()
    {
        $this->booking = new ArrayCollection();
        $this->image = new ArrayCollection();
        $this->witness = new ArrayCollection();
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

    public function getDetails(): ?string
    {
        return $this->details;
    }

    public function setDetails(?string $details): self
    {
        $this->details = $details;

        return $this;
    }

    public function getLauchYear(): ?\DateTimeInterface
    {
        return $this->lauchYear;
    }

    public function setLauchYear(\DateTimeInterface $lauchYear): self
    {
        $this->lauchYear = $lauchYear;

        return $this;
    }

    public function getOwnerName(): ?string
    {
        return $this->ownerName;
    }

    public function setOwnerName(string $ownerName): self
    {
        $this->ownerName = $ownerName;

        return $this;
    }

    public function getLength(): ?int
    {
        return $this->length;
    }

    public function setLength(int $length): self
    {
        $this->length = $length;

        return $this;
    }

    public function getMaterials(): ?string
    {
        return $this->materials;
    }

    public function setMaterials(?string $materials): self
    {
        $this->materials = $materials;

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

    public function getRestoration(): ?\DateTimeInterface
    {
        return $this->restoration;
    }

    public function setRestoration(?\DateTimeInterface $restoration): self
    {
        $this->restoration = $restoration;

        return $this;
    }

    public function getNbMaxVisitor(): ?int
    {
        return $this->nbMaxVisitor;
    }

    public function setNbMaxVisitor(int $nbMaxVisitor): self
    {
        $this->nbMaxVisitor = $nbMaxVisitor;

        return $this;
    }

    public function getIsBookable(): ?bool
    {
        return $this->isBookable;
    }

    public function setIsBookable(bool $isBookable): self
    {
        $this->isBookable = $isBookable;

        return $this;
    }

    public function getLongitude(): ?int
    {
        return $this->longitude;
    }

    public function setLongitude(int $longitude): self
    {
        $this->longitude = $longitude;

        return $this;
    }

    public function getLatitude(): ?int
    {
        return $this->latitude;
    }

    public function setLatitude(int $latitude): self
    {
        $this->latitude = $latitude;

        return $this;
    }

    public function getMuseum(): ?Museum
    {
        return $this->museum;
    }

    public function setMuseum(?Museum $museum): self
    {
        $this->museum = $museum;

        return $this;
    }

    /**
     * @return Collection<int, Booking>
     */
    public function getBooking(): Collection
    {
        return $this->booking;
    }

    public function addBooking(Booking $booking): self
    {
        if (!$this->booking->contains($booking)) {
            $this->booking[] = $booking;
            $booking->setBoat($this);
        }

        return $this;
    }

    public function removeBooking(Booking $booking): self
    {
        if ($this->booking->removeElement($booking)) {
            // set the owning side to null (unless already changed)
            if ($booking->getBoat() === $this) {
                $booking->setBoat(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection<int, Image>
     */
    public function getImage(): Collection
    {
        return $this->image;
    }

    public function addImage(Image $image): self
    {
        if (!$this->image->contains($image)) {
            $this->image[] = $image;
            $image->setBoat($this);
        }

        return $this;
    }

    public function removeImage(Image $image): self
    {
        if ($this->image->removeElement($image)) {
            // set the owning side to null (unless already changed)
            if ($image->getBoat() === $this) {
                $image->setBoat(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection<int, Witness>
     */
    public function getWitness(): Collection
    {
        return $this->witness;
    }

    public function addWitness(Witness $witness): self
    {
        if (!$this->witness->contains($witness)) {
            $this->witness[] = $witness;
            $witness->setBoat($this);
        }

        return $this;
    }

    public function removeWitness(Witness $witness): self
    {
        if ($this->witness->removeElement($witness)) {
            // set the owning side to null (unless already changed)
            if ($witness->getBoat() === $this) {
                $witness->setBoat(null);
            }
        }

        return $this;
    }
}
