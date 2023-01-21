-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema dorydb
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `dorydb` ;

-- -----------------------------------------------------
-- Schema dorydb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `dorydb` DEFAULT CHARACTER SET utf8 ;
USE `dorydb` ;

-- -----------------------------------------------------
-- Table `diving_log`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `diving_log` ;

CREATE TABLE IF NOT EXISTS `diving_log` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `site_name` VARCHAR(200) NOT NULL,
  `site_location` VARCHAR(200) NULL,
  `date` DATE NOT NULL,
  `max_depth` DOUBLE NULL,
  `visibility` VARCHAR(45) NULL,
  `dive_start` TIME NULL,
  `dive_end` TIME NULL,
  `total_time` TIME NULL,
  `weight_amount` DOUBLE NULL,
  `safety_stop` TINYINT NULL,
  `water_temp` DOUBLE NULL,
  `notes` TEXT NULL,
  `image_url` VARCHAR(2000) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `user`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `user` ;

CREATE TABLE IF NOT EXISTS `user` (
  `iduser` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `certification` VARCHAR(45) NOT NULL,
  `date_certified` DATETIME NULL,
  `age` INT NULL,
  `saltwater_suit` VARCHAR(45) NULL,
  `saltwater_weight` DOUBLE NULL,
  `diving_log_id` INT NOT NULL,
  PRIMARY KEY (`iduser`),
  INDEX `fk_user_diving_log_idx` (`diving_log_id` ASC),
  CONSTRAINT `fk_user_diving_log`
    FOREIGN KEY (`diving_log_id`)
    REFERENCES `diving_log` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `sealife`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `sealife` ;

CREATE TABLE IF NOT EXISTS `sealife` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(200) NOT NULL,
  `type` VARCHAR(200) NULL,
  `image_url` VARCHAR(2000) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `user_has_sealife`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `user_has_sealife` ;

CREATE TABLE IF NOT EXISTS `user_has_sealife` (
  `user_iduser` INT NOT NULL,
  `sealife_id` INT NOT NULL,
  PRIMARY KEY (`user_iduser`, `sealife_id`),
  INDEX `fk_user_has_sealife_sealife1_idx` (`sealife_id` ASC),
  INDEX `fk_user_has_sealife_user1_idx` (`user_iduser` ASC),
  CONSTRAINT `fk_user_has_sealife_user1`
    FOREIGN KEY (`user_iduser`)
    REFERENCES `user` (`iduser`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_user_has_sealife_sealife1`
    FOREIGN KEY (`sealife_id`)
    REFERENCES `sealife` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

SET SQL_MODE = '';
DROP USER IF EXISTS dory@localhost;
SET SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';
CREATE USER 'dory'@'localhost' IDENTIFIED BY 'password';

GRANT SELECT, INSERT, TRIGGER, UPDATE, DELETE ON TABLE * TO 'dory'@'localhost';

SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

-- -----------------------------------------------------
-- Data for table `diving_log`
-- -----------------------------------------------------
START TRANSACTION;
USE `dorydb`;
INSERT INTO `diving_log` (`id`, `site_name`, `site_location`, `date`, `max_depth`, `visibility`, `dive_start`, `dive_end`, `total_time`, `weight_amount`, `safety_stop`, `water_temp`, `notes`, `image_url`) VALUES (1, 'Two Towers', 'Australia', '2022-08-23', 70, 'clear', '10:00', '11:00', '1:00', 10, 1, 76, 'Saw sea turtle', 'https://www.google.com/url?sa=i&url=https%3A%2F%2Foliveridleyproject.org%2Fufaqs%2Fhow-deep-can-sea-turtles-dive&psig=AOvVaw0EbQvJreyhTsa_PEXPq_uN&ust=1674405573866000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCPCjloWN2fwCFQAAAAAdAAAAABAD');

COMMIT;

