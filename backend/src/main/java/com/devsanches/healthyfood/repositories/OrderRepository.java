package com.devsanches.healthyfood.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.devsanches.healthyfood.entities.Order;

public interface OrderRepository extends JpaRepository<Order, Long>{

}
