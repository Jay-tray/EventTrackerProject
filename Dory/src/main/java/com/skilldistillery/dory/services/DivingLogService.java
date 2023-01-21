package com.skilldistillery.dory.services;

import java.util.List;

import com.skilldistillery.dory.entities.DivingLog;

public interface DivingLogService {
	List<DivingLog> allDivingLogs();
	DivingLog getLog(int logId);
	DivingLog createLog(DivingLog log);
	DivingLog updateLog(int id, DivingLog log);
	boolean deleteByID(int logId);
}
