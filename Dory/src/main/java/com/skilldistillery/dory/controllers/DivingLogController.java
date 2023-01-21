package com.skilldistillery.dory.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.skilldistillery.dory.entities.DivingLog;
import com.skilldistillery.dory.services.DivingLogService;

@RestController
@RequestMapping("api")
public class DivingLogController {

		@Autowired
		private DivingLogService logService;
		
		@GetMapping("divinglogs")
		public List<DivingLog> listAllDivingLogs() {
			return logService.allDivingLogs();
		}
}
