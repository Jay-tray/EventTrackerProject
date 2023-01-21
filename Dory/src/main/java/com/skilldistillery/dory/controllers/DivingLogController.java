package com.skilldistillery.dory.controllers;

import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
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

	@GetMapping("divinglogs/{id}")
	public DivingLog getLog(@PathVariable Integer id, HttpServletResponse res) {
		DivingLog log = logService.getLog(id);
		if (log == null) {
			res.setStatus(404);
		}
		return log;
	}

	@PostMapping("divinglogs")
	public DivingLog create(@RequestBody DivingLog log, HttpServletResponse res, HttpServletRequest req) {

		try {
			logService.createLog(log);
			res.setStatus(201);
			StringBuffer url = req.getRequestURL();
			url.append("/").append(log.getId());
			res.setHeader("Location", url.toString());
		} catch (Exception e) {
			e.printStackTrace();
			res.setStatus(404);
		}
		return log;
	}

	@PutMapping("divinglogs/{id}")
	public DivingLog update(@PathVariable Integer id, @RequestBody DivingLog log, HttpServletResponse res) {

		try {
			log = logService.updateLog(id, log);

			if (log == null) {
				res.setStatus(404);
			}
		} catch (Exception e) {
			e.printStackTrace();
			res.setStatus(400);
			log = null;
		}

		return log;
	}

	@DeleteMapping("divinglogs/{id}")
	public void delete(@PathVariable Integer id, HttpServletResponse res) {
		try {
			if (logService.deleteByID(id)) {
				res.setStatus(204);
			} else {
				res.setStatus(404);
			}
		} catch (Exception e) {
			e.printStackTrace();
			res.setStatus(400);
		}
	}
}
