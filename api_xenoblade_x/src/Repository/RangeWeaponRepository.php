<?php

namespace App\Repository;

use App\Entity\RangeWeapon;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method RangeWeapon|null find($id, $lockMode = null, $lockVersion = null)
 * @method RangeWeapon|null findOneBy(array $criteria, array $orderBy = null)
 * @method RangeWeapon[]    findAll()
 * @method RangeWeapon[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class RangeWeaponRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, RangeWeapon::class);
    }

    // /**
    //  * @return RangeWeapon[] Returns an array of RangeWeapon objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('r')
            ->andWhere('r.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('r.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?RangeWeapon
    {
        return $this->createQueryBuilder('r')
            ->andWhere('r.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
