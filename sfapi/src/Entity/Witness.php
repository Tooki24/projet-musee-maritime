<?php

namespace App\Entity;

use App\Repository\WitnessRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use ApiPlatform\Core\Annotation\ApiResource;
use Symfony\Component\Serializer\Annotation\Groups;



/**
 * @ORM\Entity(repositoryClass=WitnessRepository::class)
 * @ApiResource (
 *     collectionOperations={"post"},
 *     itemOperations={"delete", "patch"},
 *     shortName= "temoinages",
 *     denormalizationContext={"groups"={"witness:write"}}
 * )
 */
class Witness
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @Groups ({"witness:write"})
     * @ORM\Column(type="text")
     */
    private $file;

    /**
     * @ORM\ManyToOne(targetEntity=Boat::class, inversedBy="livres")
     * @Groups ("witness:write")
     */
    private $boat;

    /**
     * @ORM\OneToMany(targetEntity=Image::class, mappedBy="witness")
     */
    private $image;

    public function __construct()
    {
        $this->image = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getFile(): ?string
    {
        return $this->file;
    }

    public function setFile(string $file): self
    {
        $this->file = $file;

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
            $image->setWitness($this);
        }

        return $this;
    }

    public function removeImage(Image $image): self
    {
        if ($this->image->removeElement($image)) {
            // set the owning side to null (unless already changed)
            if ($image->getWitness() === $this) {
                $image->setWitness(null);
            }
        }

        return $this;
    }

    /**
     * @return mixed
     */
    public function getBoat() : Boat
    {
        return $this->boat;
    }

    public function setBoat(Boat $boat): self
    {
        $this->boat = $boat;

        return $this;
    }
}
