package BVApp;

public class UserResponse {
		
		public Boolean checkfailed;
		public Boolean psswmismatch;
		public Boolean psswblank;
		public String resultdescription;
		
		public UserResponse(Boolean checkfailed, Boolean psswmismatch, Boolean psswblank, String resultdescription) {
			this.checkfailed = checkfailed;
			this.psswmismatch = psswmismatch;
			this.psswblank = psswblank;
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

		
		public String getDescription() {
			return resultdescription;
		}

		public void setDescription(String resultdescription) {
			this.resultdescription = resultdescription;
		}
				
}
