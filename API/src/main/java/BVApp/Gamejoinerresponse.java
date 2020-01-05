package BVApp;

public class Gamejoinerresponse{
		
		public Boolean checkfailed;
		public Boolean gameisfull;
		public Boolean alreadysigned;
		public Boolean gameispast;
		public String resultdescription;
		
		public Gamejoinerresponse(Boolean checkfailed, Boolean gameisfull, Boolean alreadysigned, Boolean gameispast, String resultdescription) {
			this.checkfailed = checkfailed;
			this.gameisfull = gameisfull;
			this.alreadysigned = alreadysigned;
			this.gameispast = gameispast;
			this.resultdescription = resultdescription;
		}
	
		public Boolean getFailed() {
			return checkfailed;
		}

		public void setFailed(Boolean checkfailed) {
			this.checkfailed = checkfailed;
		}

		public Boolean getgameisfull() {
			return gameisfull;
		}

		public void setgameisfull(Boolean gameisfull) {
			this.gameisfull = gameisfull;
		}
		
		public Boolean getalreadysigned() {
			return alreadysigned;
		}

		public void setalreadysigned(Boolean alreadysigned) {
			this.alreadysigned = alreadysigned;
		}

		public Boolean getgameispast() {
			return gameispast;
		}

		public void setgameispast(Boolean gameispast) {
			this.gameispast = gameispast;
		}

		public String getDescription() {
			return resultdescription;
		}

		public void setDescription(String resultdescription) {
			this.resultdescription = resultdescription;
		}
		
}
