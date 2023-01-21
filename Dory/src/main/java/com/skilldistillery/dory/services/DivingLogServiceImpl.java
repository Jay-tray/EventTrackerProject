package com.skilldistillery.dory.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.skilldistillery.dory.entities.DivingLog;
import com.skilldistillery.dory.repositories.DivingLogRespository;


@Service
public class DivingLogServiceImpl implements DivingLogService{

	@Autowired
	private DivingLogRespository logRepo;
	
	@Override
	public List<DivingLog> allDivingLogs() {
		return logRepo.findAll();
	}

	@Override
	public DivingLog getLog(int logId) {
		DivingLog log = null;
		Optional<DivingLog> logOpt = logRepo.findById(logId);
		if (logOpt.isPresent()) {
			log = logOpt.get();
		}
		return log;
	}

	@Override
	public DivingLog createLog(DivingLog log) {
		return logRepo.saveAndFlush(log);
	}

	@Override
	public DivingLog updateLog(int id, DivingLog log) {
		DivingLog logUpdate = getLog(id);
		logUpdate.setSiteName(log.getSiteName());
		logUpdate.setSiteLocation(log.getSiteLocation());
		logUpdate.setDate(log.getDate());
		logUpdate.setMaxDepth(log.getMaxDepth());
		logUpdate.setVisibility(log.getVisibility());
		logUpdate.setDiveStart(log.getDiveStart());
		logUpdate.setDiveEnd(log.getDiveEnd());
		logUpdate.setTotalTime(log.getTotalTime());
		logUpdate.setWeightAmount(log.getWeightAmount());
		logUpdate.setSafetyStop(log.getSafetyStop());
		logUpdate.setNotes(log.getNotes());
		logUpdate.setImageUrl(log.getImageUrl());
		return logRepo.save(logUpdate);
		
	}

	@Override
	public boolean deleteByID(int logId) {
		logRepo.deleteById(logId);
		return !logRepo.existsById(logId);
	}

}
