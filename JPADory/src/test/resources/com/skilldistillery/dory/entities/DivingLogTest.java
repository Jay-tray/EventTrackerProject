package com.skilldistillery.dory.entities;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;

import org.junit.jupiter.api.AfterAll;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

class DivingLogTest {

	private static EntityManagerFactory emf;
	private EntityManager em;
	
	private DivingLog divingLog;

	
	@BeforeAll
	static void setUpBeforeClass() throws Exception {
		emf = Persistence.createEntityManagerFactory("JPADory");
	}

	@AfterAll
	static void tearDownAfterClass() throws Exception {
		emf.close();
	}

	@BeforeEach
	void setUp() throws Exception {
		em = emf.createEntityManager();
		divingLog = em.find(DivingLog.class, 1);
	}

	@AfterEach
	void tearDown() throws Exception {
		em.close();
		divingLog = null;
	}
	@Test
	void test() {
		assertNotNull(divingLog);
		assertEquals("test", divingLog.getSiteName());

	}

}
