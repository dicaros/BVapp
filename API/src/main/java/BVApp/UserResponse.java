package BVApp;

//contains validation results from creating a new user

public class UserResponse {
		
		public Boolean checkfailed;
		public Boolean psswmismatch;
		public Boolean psswblank;
		public Boolean psswshort;
		public Boolean nameblank;
		public Boolean nameexists;
		public Boolean emailexists;		
		public Boolean emailvalid;
		public String resultdescription;
		
		public UserResponse(Boolean checkfailed, Boolean psswmismatch, Boolean psswblank, Boolean psswshort, Boolean nameblank, Boolean nameexists, Boolean emailexists, Boolean emailvalid, String resultdescription) {
			this.checkfailed = checkfailed;
			this.psswmismatch = psswmismatch;
			this.psswblank = psswblank;
			this.psswshort = psswshort;
			this.nameblank = nameblank;
			this.nameexists = nameexists;
			this.emailexists = emailexists;
			this.emailvalid = emailvalid;
			this.resultdescription = resultdescription;
		}
	
		public Boolean getFailed() {
			return checkfailed;
		}

		public void setFailed(Boolean checkfailed) {
			this.checkfailed = checkfailed;
		}

		public Boolean getpsswmismatch() {
			return psswmismatch;
		}

		public void setpsswmismatch(Boolean psswmismatch) {
			this.psswmismatch = psswmismatch;
		}
		
		public Boolean getpsswblank() {
			return psswblank;
		}

		public void setpsswblank(Boolean psswblank) {
			this.psswblank = psswblank;
		}

		public Boolean getpsswshort() {
			return psswshort;
		}

		public void setpsswshort(Boolean psswshort) {
			this.psswshort = psswshort;
		}
		
		public Boolean getnameblank() {
			return nameblank;
		}

		public void setnameblank(Boolean nameblank) {
			this.nameblank = nameblank;
		}

		public Boolean getnameexists() {
			return nameexists;
		}

		public void setnameexists(Boolean nameexists) {
			this.nameexists = nameexists;
		}

		public Boolean getemailexists() {
			return emailexists;
		}

		public void setemailexists(Boolean emailexists) {
			this.emailexists = emailexists;
		}

		public Boolean getemailvalid() {
			return emailvalid;
		}

		public void setemailvalid(Boolean emailvalid) {
			this.emailvalid = emailvalid;
		}

		public String getDescription() {
			return resultdescription;
		}

		public void setDescription(String resultdescription) {
			this.resultdescription = resultdescription;
		}
				
}
