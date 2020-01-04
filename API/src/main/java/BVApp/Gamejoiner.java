package BVApp;

public class Gamejoiner {
		public Integer playernumber;
		public Boolean noshow;
		public Long gameid;

		protected Gamejoiner() {}
		
		public Gamejoiner(Integer playernumber, Boolean noshow, Long gameid) {
			this.playernumber = playernumber;
			this.noshow = noshow;
			this.gameid = gameid;
		}
		
		public Integer getPlayernumber() {
			return playernumber;
		}

		public void setPlayernumber(Integer playernumber) {
			this.playernumber = playernumber;
		}

		public Boolean getNoshow() {
			return noshow;
		}

		public void setNoshow(Boolean noshow) {
			this.noshow = noshow;
		}

		public Long getGameid() {
			return gameid;
		}

		public void setGame(Long gameid) {
			this.gameid = gameid;
		}
}
