package BVApp;

public class Gameresponse{
		
		public Boolean checkfailed;
		public Boolean sportcenternull;
		public Boolean datepast;
		public Boolean timenull;
		public Boolean priceinvalid;
		public String resultdescription;
		
		public Gameresponse(Boolean checkfailed, Boolean sportcenternull, Boolean datepast, Boolean timenull, Boolean priceinvalid, String resultdescription) {
			this.checkfailed = checkfailed;
			this.sportcenternull = sportcenternull;
			this.datepast = datepast;
			this.timenull = timenull;
			this.priceinvalid = priceinvalid;
			this.resultdescription = resultdescription;
		}
	
		public Boolean getFailed() {
			return checkfailed;
		}

		public void setFailed(Boolean checkfailed) {
			this.checkfailed = checkfailed;
		}

		public Boolean getsportcenternull() {
			return sportcenternull;
		}

		public void setsportcenternull(Boolean sportcenternull) {
			this.sportcenternull = sportcenternull;
		}
		
		public Boolean getdatepast() {
			return datepast;
		}

		public void setdatepast(Boolean datepast) {
			this.datepast = datepast;
		}

		public Boolean gettimenull() {
			return timenull;
		}

		public void settimenull(Boolean timenull) {
			this.timenull = timenull;
		}

		public Boolean getpriceinvalid() {
			return priceinvalid;
		}

		public void setpriceinvalid(Boolean priceinvalid) {
			this.priceinvalid = priceinvalid;
		}

		public String getDescription() {
			return resultdescription;
		}

		public void setDescription(String resultdescription) {
			this.resultdescription = resultdescription;
		};
		
		public boolean checkisint(String string) {
				try   {
						Integer.parseInt(string);
							return true;
						} catch (NumberFormatException ex)
						{
								return false;
						}
			}
}
