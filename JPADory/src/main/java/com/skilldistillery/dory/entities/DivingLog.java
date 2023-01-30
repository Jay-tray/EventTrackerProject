package com.skilldistillery.dory.entities;

import java.time.LocalDate;
import java.time.LocalTime;

import java.util.Objects;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "diving_log")
public class DivingLog {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;

	@Column(name = "site_name")
	private String siteName;
	
	@Column(name = "site_location")
	private String siteLocation;
	

	public void setDate(LocalDate date) {
		this.date = date;
	}

	private LocalDate date;
	
	@Column(name = "max_depth")
	private Double maxDepth;
	
	private String visibility;
	
	@Column(name = "dive_start")
	private LocalTime diveStart;
	
	@Column(name = "dive_end")
	private LocalTime diveEnd;
	
	//@Column(name = "total_time")
	//private Time totalTime;
	
	@Column(name = "weight_amount")
	private Double weightAmount;
	
	@Column(name = "safety_stop")
	private Boolean safetyStop;
	
	@Column(name = "water_temp")
	private Double waterTemp;
	
	private String notes;
	
	@Column(name = "image_url")
	private String imageUrl;

	public DivingLog() {
		super();
	}



	public DivingLog(int id, String siteName, String siteLocation, LocalDate date, Double maxDepth, String visibility,
			LocalTime diveStart, LocalTime diveEnd, Double weightAmount, Boolean safetyStop, Double waterTemp,
			String notes, String imageUrl) {
		super();
		this.id = id;
		this.siteName = siteName;
		this.siteLocation = siteLocation;
		this.date = date;
		this.maxDepth = maxDepth;
		this.visibility = visibility;
		this.diveStart = diveStart;
		this.diveEnd = diveEnd;
		this.weightAmount = weightAmount;
		this.safetyStop = safetyStop;
		this.waterTemp = waterTemp;
		this.notes = notes;
		this.imageUrl = imageUrl;
	}

	public void setDiveStart(LocalTime diveStart) {
		this.diveStart = diveStart;
	}

	public void setDiveEnd(LocalTime diveEnd) {
		this.diveEnd = diveEnd;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getSiteName() {
		return siteName;
	}

	public void setSiteName(String siteName) {
		this.siteName = siteName;
	}

	public String getSiteLocation() {
		return siteLocation;
	}

	public void setSiteLocation(String siteLocation) {
		this.siteLocation = siteLocation;
	}

	public Double getMaxDepth() {
		return maxDepth;
	}

	public void setMaxDepth(Double maxDepth) {
		this.maxDepth = maxDepth;
	}

	public LocalDate getDate() {
		return date;
	}



	public String getVisibility() {
		return visibility;
	}

	public void setVisibility(String visibility) {
		this.visibility = visibility;
	}


	

	public Double getWeightAmount() {
		return weightAmount;
	}

	public void setWeightAmount(Double weightAmount) {
		this.weightAmount = weightAmount;
	}

	public Boolean getSafetyStop() {
		return safetyStop;
	}

	public void setSafetyStop(Boolean safetyStop) {
		this.safetyStop = safetyStop;
	}

	public Double getWaterTemp() {
		return waterTemp;
	}

	public void setWaterTemp(Double waterTemp) {
		this.waterTemp = waterTemp;
	}

	public String getNotes() {
		return notes;
	}

	public void setNotes(String notes) {
		this.notes = notes;
	}

	public String getImageUrl() {
		return imageUrl;
	}

	public void setImageUrl(String imageUrl) {
		this.imageUrl = imageUrl;
	}

	@Override
	public String toString() {
		return "DivingLog [id=" + id + ", siteName=" + siteName + ", siteLocation=" + siteLocation + ", date=" + date
				+ ", maxDepth=" + maxDepth + ", visibility=" + visibility + ", diveStart=" + diveStart + ", diveEnd="
				+ diveEnd + ", weightAmount=" + weightAmount + ", safetyStop=" + safetyStop
				+ ", waterTemp=" + waterTemp + ", notes=" + notes + ", imageUrl=" + imageUrl + "]";
	}

	public LocalTime getDiveStart() {
		return diveStart;
	}



	public LocalTime getDiveEnd() {
		return diveEnd;
	}



	@Override
	public int hashCode() {
		return Objects.hash(id);
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		DivingLog other = (DivingLog) obj;
		return id == other.id;
	}
	
	
}


