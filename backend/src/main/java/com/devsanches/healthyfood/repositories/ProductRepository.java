package com.devsanches.healthyfood.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.devsanches.healthyfood.entities.Product;

public interface ProductRepository extends JpaRepository<Product, Long>{

	List<Product> findAllByOrderByNameAsc();
}
