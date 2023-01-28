// Import Mongoose
import mongoose from "mongoose";
// Logging
import Logger from "./Logger";
// Properties
import properties from "../properties.js";

// Start Import Models

import BookingModel from "../models/Hospitalmng_db/BookingModel";
import DoctorModel from "../models/Hospitalmng_db/DoctorModel";
import RegistrationModel from "../models/Hospitalmng_db/RegistrationModel";
import UserModel from "../models/Hospitalmng_db/UserModel";
import PatientsModel from "../models/Hospitalmng_db/PatientsModel";

// End Import Models

class Database {
  constructor() {}

  /**
   * Init database
   */
  async init() {
    await this.authenticate();
    Logger.info("MongoDB connected at: " + properties.hospitalmng_db_dbUrl);

    // Start Init Models

		BookingModel.init();
		DoctorModel.init();
		RegistrationModel.init();
		UserModel.init();
		PatientsModel.init();
 // End Init Models
  }

  /**
   * Start database connection
   */
  async authenticate() {
    Logger.info("Authenticating to the databases...");
    try {
      this.dbConnection_hospitalmng_db = await mongoose.connect(
        "mongodb://" + properties.hospitalmng_db_dbUrl,
        { useNewUrlParser: true }
      );
    } catch (err) {
      Logger.error(`Failed connection to the DB: ${err.message}`);
      Logger.error(err);
      await new Promise(resolve => setTimeout(resolve, 5000));
      await this.authenticate();
    }
  }

  /**
   * Get connection db
   */
  getConnection() {
    return this.dbConnection_hospitalmng_db;
  }
}

export default new Database();
