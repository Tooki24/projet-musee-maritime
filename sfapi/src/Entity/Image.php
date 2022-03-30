<?php

namespace App\Entity;

use App\Repository\ImageRepository;
use Doctrine\ORM\Mapping as ORM;
use ApiPlatform\Core\Annotation\ApiResource;
use Symfony\Component\Serializer\Annotation\Groups;
use Symfony\Component\Validator\Constraints as Assert;



/**
 * @ORM\Entity(repositoryClass=ImageRepository::class)
 * @ApiResource  (
 *     collectionOperations={"post", "get"},
 *     itemOperations={"get"={
 *          "normalization_context"={"groups"={"image:read", "image:item:get"}},
 *     }, "delete"},
 *     normalizationContext={"groups"={"image:read"}},
 *     denormalizationContext={"groups"={"image:write"}}
 * )
 */
class Image
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     * @Groups ({"image:read", "image:write", "boat:read"})
     * @Assert\NotBlank()
     */
    private $name;

    /**
     * @ORM\Column(type="string", length=255)
     * @Groups ({"image:read", "image:write", "boat:read"})
     * @Assert\NotBlank()
     */
    private $file;

    /**
     * @ORM\ManyToOne(targetEntity=Boat::class, inversedBy="livres")
     * @Groups ({"image:write", "image:read"})
     * @Assert\NotBlank()
     */
    private $boat;




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
