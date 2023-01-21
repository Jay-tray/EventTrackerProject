package com.skilldistillery.dory.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.skilldistillery.dory.entities.DivingLog;

public interface DivingLogRespository extends JpaRepository<DivingLog, Integer>{

}
